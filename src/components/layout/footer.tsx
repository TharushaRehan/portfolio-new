import { ArrowUpRight } from "lucide-react";
import { ProfilePicture } from "../common";
import { Button } from "../ui/button";
import { EMAIL_ADDRESS, IconDiscord, IconGitHub, IconX } from "@/constants";

const socials = [
  { label: "X", href: "https://x.com", icon: IconX },
  { label: "GitHub", href: "https://github.com", icon: IconGitHub },
  { label: "Discord", href: "https://discord.com", icon: IconDiscord },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/10 bg-background">
      {/* Decorative arc, echoing the reference layout */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 z-0 h-[120%] w-[60%] -translate-y-1/2 rounded-full border border-border/10" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:gap-12">
        {/* Left: headline */}
        <h2 className="text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
          {`Let's create something extraordinary together`}
          <span className="text-green-500">.</span>
        </h2>

        {/* Right: identity + contact */}
        <div className="flex flex-col gap-y-10">
          {/* Identity row */}
          <div className="flex items-center gap-x-5">
            <ProfilePicture />
            <div className="flex flex-col gap-y-2">
              <div>
                <p className="text-2xl font-semibold tracking-tight">
                  Tharusha Perera
                </p>
                <p className="text-muted-foreground">
                  Software Engineer, Developer
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <Icon width={20} height={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-y-4">
            <p className="text-muted-foreground">Contact me</p>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="w-fit text-3xl font-semibold tracking-tight transition-colors hover:text-green-500 md:text-5xl"
            >
              {EMAIL_ADDRESS}
            </a>
          </div>

          {/* Pitch */}
          <p className="max-w-lg text-lg text-muted-foreground">
            Hit me up if you&apos;re looking for a{" "}
            <span className="font-semibold text-foreground">
              fast, reliable
            </span>{" "}
            <span className="font-semibold text-foreground">developer</span> who
            can bring your vision to life.
          </p>

          {/* CTA */}
          <Button
            asChild
            className="group h-14 w-fit rounded-full bg-green-500 pl-8 pr-3 text-base font-semibold text-black hover:bg-green-400"
          >
            <a href="/contact">
              Book a call
              <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export { Footer };
