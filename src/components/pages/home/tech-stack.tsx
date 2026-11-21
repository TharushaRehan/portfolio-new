import { Asterisk } from "lucide-react";
import { Marquee, SectionLabel } from "@/components/common";
import {
  IconFirebase,
  IconGCP,
  IconNestJS,
  IconNextjs,
  IconReactNative,
  IconStripe,
  IconSupabase,
  IconSwift,
  IconTailwind,
  IconTypeScript,
  IconKotlin,
  IconMongoDB,
} from "@/constants";

const tools = [
  { icon: IconNextjs, name: "Next.js", description: "Full-stack React framework for the web" },
  { icon: IconReactNative, name: "React Native", description: "Cross-platform iOS and Android apps" },
  { icon: IconTypeScript, name: "TypeScript", description: "Typed JavaScript across the whole stack" },
  { icon: IconTailwind, name: "Tailwind CSS", description: "Utility-first styling, fast to iterate" },
  { icon: IconNestJS, name: "NestJS", description: "Structured Node.js backend services" },
  { icon: IconSupabase, name: "Supabase", description: "Postgres, auth and storage in one" },
  { icon: IconFirebase, name: "Firebase", description: "Realtime data, auth and push for mobile" },
  { icon: IconMongoDB, name: "MongoDB", description: "Document database for flexible data" },
  { icon: IconStripe, name: "Stripe", description: "Payments, subscriptions and credits" },
  { icon: IconGCP, name: "Google Cloud", description: "Hosting and cloud infrastructure" },
  { icon: IconSwift, name: "Swift", description: "Native iOS apps with SwiftUI" },
  { icon: IconKotlin, name: "Kotlin", description: "Native Android development" },
];

const buildTypes = ["Web apps", "Mobile apps", "SaaS platforms", "Landing pages", "UI libraries", "Payment flows"];

const TechStack = () => (
  <section id="stack">
    <div className="mx-auto w-full max-w-7xl px-6 py-24">
      <div className="mb-16 flex flex-col items-center gap-5 text-center">
        <SectionLabel index={2} text="Tools & Skills" />
        <h2 className="text-4xl font-light tracking-tighter md:text-6xl">
          My everyday toolbox
        </h2>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map(({ icon: Icon, name, description }) => (
          <li
            key={name}
            className="flex items-center gap-5 rounded-2xl border bg-card p-6 shadow-xs transition-shadow hover:shadow-md"
          >
            <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-muted">
              <Icon width={28} height={28} aria-hidden />
            </span>
            <div>
              <p className="text-lg font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-ink py-6 text-ink-foreground">
      <Marquee duration={30}>
        {buildTypes.map((t) => (
          <div key={t} className="flex items-center">
            <p className="whitespace-nowrap px-8 text-3xl font-light tracking-tight md:text-4xl">
              {t}
            </p>
            <Asterisk className="size-8 text-lime" />
          </div>
        ))}
      </Marquee>
    </div>
  </section>
);

TechStack.displayName = "TechStack";

export { TechStack };
