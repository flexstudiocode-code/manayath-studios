"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

export default function QRCard({
  value,
  label = "Scan to open your wedding gallery, films & albums",
  size = 170,
  title = "Client Gallery QR",
}: {
  value: string;
  label?: string;
  size?: number;
  title?: string;
}) {
  const [dataUrl, setDataUrl] = useState<string>("");

  useEffect(() => {
    QRCode.toDataURL(value, {
      width: 640,
      margin: 2,
      color: { dark: "#14110c", light: "#FBF9F6" },
    })
      .then(setDataUrl)
      .catch(() => {});
  }, [value]);

  return (
    <div className="rounded-3xl border border-border/70 bg-card/60 p-6 text-center shadow-card backdrop-blur-sm">
      <h3 className="font-serif text-xl">{title}</h3>
      <p className="mx-auto mt-1 max-w-[220px] text-xs text-muted-foreground">{label}</p>
      <div className="mx-auto mt-5 w-fit rounded-2xl border border-border/70 bg-[#FBF9F6] p-3">
        {dataUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={dataUrl} alt="QR code linking to your private wedding gallery" width={size} height={size} className="rounded-lg" />
        ) : (
          <div
            className="animate-pulse rounded-lg bg-charcoal/10"
            style={{ width: size, height: size }}
            aria-label="Generating QR code"
          />
        )}
      </div>
      <a
        href={dataUrl}
        download="manayath-client-qr.png"
        className={cn(
          "mt-5 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-xs font-semibold transition-colors hover:border-gold hover:text-gold",
          !dataUrl && "pointer-events-none opacity-50"
        )}
      >
        <Download size={13} />
        Download QR
      </a>
    </div>
  );
}
