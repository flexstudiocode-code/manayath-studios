import { ArrowUpRight, Instagram } from "lucide-react";
import KPhoto from "@/components/ui/KPhoto";
import Reveal from "@/components/motion/Reveal";
import { site } from "@/data/site";
import { u } from "@/lib/utils";

const posts = [
  "1519741497674-611481863552",
  "1591604466107-ec97de577aff",
  "1520854221256-17451cc331bf",
  "1532712938310-34cb3982ef74",
  "1511285560929-80b456fea0bc",
  "1583939003579-730e3918a45a",
];

export default function InstagramFeed() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
        {posts.map((p, i) => (
          <Reveal key={p} delay={i * 0.05} y={20}>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View this wedding photo on Instagram"
              className="group relative block aspect-square overflow-hidden rounded-2xl"
            >
              <KPhoto
                src={u(p, 500)}
                alt="Behind the scenes wedding photography by Manayath Studios"
                className="absolute inset-0"
                imgClassName="transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width:640px) 50vw, 20vw"
              />
              <span className="absolute inset-0 grid place-items-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/45 group-hover:opacity-100">
                <Instagram size={20} className="text-white" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 flex justify-center">
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
        >
          <Instagram size={15} className="text-gold" />
          Follow @manayath.studios
          <ArrowUpRight size={13} />
        </a>
      </Reveal>
    </div>
  );
}
