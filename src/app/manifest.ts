import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Manayath Studios — Kerala Wedding Photography & Films",
    short_name: "Manayath",
    description:
      "Kerala's cinematic wedding storytellers. Hindu, Christian & Muslim wedding photography and films across all 14 districts.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F0D0A",
    theme_color: "#0F0D0A",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
