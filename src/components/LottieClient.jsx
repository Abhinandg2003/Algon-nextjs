"use client";

import dynamic from "next/dynamic";

// lottie-web touches `document` / `navigator` when it is imported, which crashes
// server rendering. Loading it client-only keeps every existing <Lottie /> call
// (including the `lottieRef` prop) working unchanged.
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default Lottie;
