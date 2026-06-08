"use client";

import { useCallback } from "react";

const PHONE = "60125777436"; // Fix It Sukil

/**
 * Bot-hardened WhatsApp link. The prefilled wa.me?text= URL is built on click
 * (in JS) and never rendered into the served HTML, so crawlers can't harvest a
 * ready-to-fire link and auto-spam the number. The bare number stays as a no-JS
 * fallback href.
 */
export default function WhatsAppCTA({
  text,
  children,
  className,
}: {
  text?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!text) return;
      e.preventDefault();
      window.open(
        `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer",
      );
    },
    [text],
  );

  return (
    <a
      href={`https://wa.me/${PHONE}`}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
