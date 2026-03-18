"use client";

import { useState } from "react";

type Props = {
  className?: string;
  height?: number;
  maxWidth?: number;
  alt?: string;
};

export function Logo({
  className,
  height = 40,
  maxWidth = 160,
  alt = "Logo",
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={[
          "grid place-items-center rounded-xl border border-black/10 bg-white text-sm font-semibold text-zinc-900",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ width: height, height }}
        aria-label={alt}
      >
        S
      </div>
    );
  }

  return (
    <div
      className={["shrink-0", className].filter(Boolean).join(" ")}
      style={{ height, maxWidth }}
      aria-label={alt}
    >
      {/* Using <img> to gracefully handle "missing logo.png" without build/runtime issues. */}
      <img
        src="/logo.png"
        alt={alt}
        className="h-full w-auto max-w-full object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

