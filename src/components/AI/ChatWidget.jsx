"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { RiSendPlane2Fill } from "react-icons/ri";



const WIDTH = 360;
const HEIGHT = 520;
const GAP = 16;
const PADDING = 10;

// The Gemini call now happens server-side in /api/chat (src/app/api/chat/route.js),
// so the API key never reaches the browser.
const CHAT_ENDPOINT = "/api/chat";

function computePosition(rect) {
  if (!rect) return null;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const nearBottom = rect.top + rect.height / 2 > vh / 2;
  const nearRight = rect.left + rect.width / 2 > vw / 2;

  const spaceAbove = rect.top - GAP;
  const spaceBelow = vh - rect.bottom - GAP;
  const spaceLeft = rect.right;
  const spaceRight = vw - rect.left;

  let openUpward = nearBottom;
  if (openUpward && spaceAbove < HEIGHT && spaceBelow >= HEIGHT) openUpward = false;
  if (!openUpward && spaceBelow < HEIGHT && spaceAbove >= HEIGHT) openUpward = true;

  let openLeftward = nearRight;
  if (openLeftward && spaceLeft < WIDTH && spaceRight >= WIDTH) openLeftward = false;
  if (!openLeftward && spaceRight < WIDTH && spaceLeft >= WIDTH) openLeftward = true;

  let top = openUpward ? rect.top - GAP - HEIGHT : rect.bottom + GAP;
  let left = openLeftward ? rect.right - WIDTH : rect.left;

  top = Math.min(Math.max(top, PADDING), vh - HEIGHT - PADDING);
  left = Math.min(Math.max(left, PADDING), vw - WIDTH - PADDING);

  return { top, left };
}

// Minimal, dependency-free markdown renderer — handles the things the
// model actually produces in these short answers: headings (#, ##, ###),
// **bold**, "* " bullet lists, and line breaks. Deliberately NOT using
// dangerouslySetInnerHTML since this text comes from an API response;
// building real React nodes instead keeps it safe even if the model ever
// echoes back HTML-like text.
function renderInline(line) {
  return line.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderMarkdown(text) {
  if (!text) return text;

  const lines = text.split("\n");
  const blocks = [];
  let listItems = [];

  const flushList = (key) => {
    if (listItems.length) {
      blocks.push(
        <ul key={`ul-${key}`} className="chat-list">
          {listItems}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((line, i) => {
    // "#", "##", "###" etc at the start of a line marks a heading. Chat
    // bubbles are small, so all heading levels render the same way —
    // bold and a touch bigger, not a real h1/h2/h3 size jump.
    const headingMatch = line.match(/^\s*#{1,6}\s+(.*)/);
    if (headingMatch) {
      flushList(i);
      blocks.push(
        <div key={i} className="chat-heading">
          {renderInline(headingMatch[1])}
        </div>
      );
      return;
    }

    // "* " or "- " at the start of a line marks a bullet item, matching
    // the two list markers the model tends to use.
    const bulletMatch = line.match(/^\s*[*-]\s+(.*)/);
    if (bulletMatch) {
      listItems.push(<li key={i}>{renderInline(bulletMatch[1])}</li>);
      return;
    }

    flushList(i);

    if (line.trim() === "") {
      blocks.push(<br key={i} />);
    } else {
      blocks.push(<div key={i}>{renderInline(line)}</div>);
    }
  });

  flushList("end");
  return blocks;
}

// Three dots that bounce in sequence, shown while waiting for the first
// token of a reply. Pure CSS animation (see .typing-dots in your CSS),
// no JS timers needed.
function TypingIndicator() {
  return (
    <span className="typing-dots">
      <span />
      <span />
      <span />
    </span>
  );
}

// Gemini uses "model" instead of "assistant" for its own turns.
function toGeminiContents(messages) {
  return messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));
}

export default function ChatWidget({ open, anchorRect }) {
  const position = computePosition(anchorRect);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: "user", content: text }];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    console.log("[ChatWidget] Message count:", nextMessages.length);

    try {
      const res = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      console.log("[ChatWidget] Response status:", res.status, res.statusText);

      if (!res.ok) {
        const errBody = await res.text();
        console.error("[ChatWidget] Error response body:", errBody);

        // Try to pull out Google's structured error message so the chat
        // bubble shows something actually useful instead of raw JSON/HTML.
        let friendly = errBody || `Request failed (${res.status})`;
        try {
          const parsedErr = JSON.parse(errBody);
          if (parsedErr?.error?.message) friendly = parsedErr.error.message;
        } catch {
          // errBody wasn't JSON — fall back to raw text above
        }

        throw new Error(`(${res.status}) ${friendly}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let chunkCount = 0;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        // Gemini's SSE stream now separates events with \r\n\r\n rather
        // than \n\n. Normalize line endings first so the split below
        // reliably finds event boundaries regardless of which one shows up.
        buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, "\n");
        const lines = buffer.split("\n\n");
        buffer = lines.pop(); // keep any incomplete chunk for next read

        for (const line of lines) {
          const dataLine = line.split("\n").find((l) => l.startsWith("data: "));
          if (!dataLine) continue;

          const payload = dataLine.slice(6).trim();
          if (!payload || payload === "[DONE]") continue;

          let parsed;
          try {
            parsed = JSON.parse(payload);
          } catch {
            continue; // skip partial/non-JSON fragments
          }

          chunkCount += 1;
          // Debug: log every parsed chunk so you can see exactly what
          // Gemini sent back — remove this once things are working.
          console.log(`[ChatWidget] Gemini chunk #${chunkCount}:`, parsed);

          // A prompt can be blocked before any candidate is generated.
          if (parsed?.promptFeedback?.blockReason) {
            throw new Error(`Blocked: ${parsed.promptFeedback.blockReason}`);
          }

          const candidate = parsed?.candidates?.[0];

          // A candidate can stop early for reasons other than finishing
          // normally (safety, recitation, hitting max tokens, etc).
          if (candidate?.finishReason && candidate.finishReason !== "STOP") {
            console.warn("[ChatWidget] Gemini finishReason:", candidate.finishReason);
          }

          // Concatenate ALL parts, not just parts[0] — a chunk can contain
          // multiple parts, and the first one isn't guaranteed to hold the
          // visible answer text (e.g. thought/reasoning parts, function
          // calls, or empty parts can come first).
          const token = candidate?.content?.parts
            ?.map((p) => p.text)
            .filter(Boolean)
            .join("");

          if (token) {
            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = {
                ...updated[updated.length - 1],
                content: updated[updated.length - 1].content + token,
              };
              return updated;
            });
          }
        }
      }

      console.log(`[ChatWidget] Stream finished. Total chunks: ${chunkCount}`);
    } catch (err) {
      console.error("[ChatWidget] sendMessage failed:", err);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: `Error: ${err.message || "something went wrong"}`,
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!position) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="chat-widget border border-[#666]/30"
          style={{ top: position.top, left: position.left }}
          initial={{ opacity: 0, scale: .8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: .8, y: 40 }}
          transition={{ duration: .35, ease: [0.22,1,0.36,1] }}
        >
          {/* <div className="chat-header">
            AI Assistant
          </div> */}

          <div
            className="chat-body"
            ref={bodyRef}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {messages.length === 0 && (
              <div className="chat-empty">How can we help you?</div>
            )}
            {messages.map((m, i) => (
              <motion.div
                key={i}
                className={`chat-message chat-message--${m.role}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {m.content ? (
                  renderMarkdown(m.content)
                ) : loading && i === messages.length - 1 ? (
                  <TypingIndicator />
                ) : (
                  ""
                )}
              </motion.div>
            ))}
          </div>

          <div className="chat-input">
  <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={handleKeyDown}
    placeholder="Ask anything..."
    disabled={loading}
  />
  <button
    type="button"
    className="chat-send-btn"
    onClick={sendMessage}
    disabled={loading || !input.trim()}
    aria-label="Send message"
  >
    <RiSendPlane2Fill className="w-5 h-5"/>
  </button>
</div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}