"use client";

import { useEffect } from "react";
import { PAYSATS_DEMO_VIDEO } from "@/lib/constants";
import { useI18n } from "@/lib/i18n";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const { t } = useI18n();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="PaySats demo video"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Enter" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />
      <div className="relative w-full max-w-lg">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-0 rounded-full bg-white/90 p-2 text-gray-700 transition hover:bg-white"
          aria-label="Close video"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
          {PAYSATS_DEMO_VIDEO ? (
            <video
              className="aspect-video w-full"
              controls
              autoPlay
              playsInline
              src={PAYSATS_DEMO_VIDEO}
            >
              <track kind="captions" />
            </video>
          ) : (
            <div className="aspect-video w-full flex items-center justify-center bg-gray-900 text-gray-500">
              <p>Add PAYSATS_DEMO_VIDEO in src/lib/constants.ts</p>
            </div>
          )}
        </div>
        <p className="mt-3 text-center text-sm text-white">
          {t("modal.caption")}
        </p>
      </div>
    </div>
  );
}
