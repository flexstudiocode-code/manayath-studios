import type { Metadata } from "next";
import PortalClient from "@/components/PortalClient";
import JsonLd, { OrganizationJsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Client Portal — Secure Wedding Gallery Access",
  description:
    "Access your password-protected wedding galleries, films, albums, proof selection, favourites and delivery tracking — and share with family via QR code.",
  alternates: { canonical: "/portal" },
  robots: { index: false, follow: true },
};

export default function PortalPage() {
  return (
    <>
      <OrganizationJsonLd />
      <JsonLd
        data={[
          webPageSchema("Client Portal — Secure Wedding Gallery Access", "Password-protected wedding galleries, albums, proof selection and delivery tracking.", "/portal"),
          breadcrumbSchema([{ name: "Client Portal", path: "/portal" }]),
        ]}
      />
      <PortalClient />
    </>
  );
}
