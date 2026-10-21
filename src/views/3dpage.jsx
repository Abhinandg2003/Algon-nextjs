"use client";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

export default function Splinescene() {
  return (
    <section className="csd-section csd-dark-section" data-navbar="dark">
      <div className="relative h-full w-full bg-black">
        <Spline scene="https://prod.spline.design/5H1HKMlsxexSqwxF/scene.splinecode" />
      </div>
    </section>
  );
}
