"use client"
import { useId, useState } from "react"
import { ArrowRight, LoaderCircle } from "lucide-react"

// Same public Web3Forms key the contact page uses.
const WEB3FORMS_ACCESS_KEY = "db3407a5-1cdc-4065-8095-f274d79c7e9a"

export default function LeadForm({
  service,
  title = "Tell us the bottleneck",
  note = "We reply within one working day.",
  messageLabel = "What is getting stuck?",
  submitLabel = "Send",
  compact = false,
}) {
  const [status, setStatus] = useState("idle") // idle | sending | sent | error
  const uid = useId()

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")
    const data = new FormData(e.currentTarget)
    data.append("access_key", WEB3FORMS_ACCESS_KEY)
    data.append("subject", `Service enquiry: ${service}`)
    data.append("service", service)
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
      const json = await res.json()
      setStatus(json.success ? "sent" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="svp-form flex flex-col gap-3" role="status">
        <p className="svp-h3">Thanks, we have it.</p>
        <p className="svp-body">
          Someone from the team will reply within one working day with a straight answer on what it needs.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="svp-form flex flex-col gap-5" aria-label={`Enquiry about ${service}`}>
      <div className="flex flex-col gap-1">
        <p className="svp-h3">{title}</p>
        <p className="svp-body text-[14px]">{note}</p>
      </div>

      <div className={`grid gap-x-6 gap-y-2 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="sr-only" htmlFor={`${uid}-name`}>Full name</label>
        <input id={`${uid}-name`} name="name" required placeholder="Full name *" className="svp-field" autoComplete="name" />
        <label className="sr-only" htmlFor={`${uid}-email`}>Work email</label>
        <input id={`${uid}-email`} name="email" type="email" required placeholder="Work email *" className="svp-field" autoComplete="email" />
        <label className="sr-only" htmlFor={`${uid}-org`}>Organisation</label>
        <input id={`${uid}-org`} name="organisation" placeholder="Organisation" className="svp-field" autoComplete="organization" />
        <label className="sr-only" htmlFor={`${uid}-phone`}>Phone</label>
        <input id={`${uid}-phone`} name="phone" type="tel" placeholder="Phone" className="svp-field" autoComplete="tel" />
      </div>

      <label className="sr-only" htmlFor={`${uid}-msg`}>{messageLabel}</label>
      <textarea id={`${uid}-msg`} name="message" required placeholder={`${messageLabel} *`} className="svp-field" rows={3} />

      {status === "error" && (
        <p className="text-[14px] text-red-400" role="alert">
          That didn&apos;t send. Please email support@algonsolutions.com instead.
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-[12px] text-[var(--svp-faint)] max-w-[34ch]">
          By sending this you agree to our <a href="/privacy" className="underline">privacy policy</a>.
        </p>
        <button type="submit" className="svp-btn svp-btn--primary" disabled={status === "sending"}>
          {status === "sending" ? <LoaderCircle size={16} className="animate-spin" /> : null}
          {submitLabel}
          {status !== "sending" && <ArrowRight size={16} />}
        </button>
      </div>
    </form>
  )
}
