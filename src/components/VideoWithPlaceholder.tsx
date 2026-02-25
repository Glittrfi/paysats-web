"use client";

import { useEffect, useRef, useState } from "react";

interface VideoWithPlaceholderProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

export function VideoWithPlaceholder({
  src,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
}: VideoWithPlaceholderProps) {
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const reveal = () => setReady(true);

  useEffect(() => {
    const timer = setTimeout(reveal, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-b from-arka-surface via-orange-50 to-white rounded-[inherit] transition-opacity duration-500 ${ready ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <span className="text-2xl font-bold text-arka-primary font-display">Arka</span>
        <div className="mt-3 h-1 w-16 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-full animate-shimmer rounded-full bg-gradient-to-r from-transparent via-arka-primary/40 to-transparent" />
        </div>
      </div>
      <video
        ref={videoRef}
        className="h-full w-full object-cover bg-gradient-to-b from-arka-surface via-orange-50 to-white"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload="auto"
        src={src}
        onLoadedData={reveal}
        onPlay={reveal}
      >
        <track kind="captions" />
      </video>
    </div>
  );
}
