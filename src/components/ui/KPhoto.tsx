"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface KPhotoProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  fallbackText?: string;
}

export default function KPhoto({
  src,
  alt,
  fill = true,
  width,
  height,
  sizes,
  priority,
  className,
  imgClassName,
  fallbackText = "MA",
}: KPhotoProps) {
  const [err, setErr] = useState(false);

  if (err) {
    return (
      <div
        className={cn(
          "grid place-items-center bg-gradient-to-br from-[#33291c] via-[#211b12] to-[#0f0d0a]",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <span className="font-serif text-xl tracking-[0.35em] text-champagne/60 sm:text-2xl">
          {fallbackText}
        </span>
      </div>
    );
  }

  if (!fill) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width ?? 800}
        height={height ?? 600}
        sizes={sizes}
        priority={priority}
        onError={() => setErr(true)}
        className={imgClassName}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onError={() => setErr(true)}
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
}
