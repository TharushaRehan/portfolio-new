import * as React from "react";
import StackIcon from "tech-stack-icons";

// --- Original Stylized Company Logo SVG Components ---

export const IconGoogle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.9999 12.24C21.9999 11.4933 21.9333 10.76 21.8066 10.0533H12.3333V14.16H17.9533C17.7333 15.3467 17.0133 16.3733 15.9666 17.08V19.68H19.5266C21.1933 18.16 21.9999 15.4533 21.9999 12.24Z"
      fill="#4285F4"
    />
    <path
      d="M12.3333 22C15.2333 22 17.6866 21.0533 19.5266 19.68L15.9666 17.08C15.0199 17.7333 13.7933 18.16 12.3333 18.16C9.52659 18.16 7.14659 16.28 6.27992 13.84H2.59326V16.5133C4.38659 20.0267 8.05992 22 12.3333 22Z"
      fill="#34A853"
    />
    <path
      d="M6.2799 13.84C6.07324 13.2267 5.9599 12.58 5.9599 11.92C5.9599 11.26 6.07324 10.6133 6.2799 10L2.59326 7.32667C1.86659 8.78667 1.45326 10.32 1.45326 11.92C1.45326 13.52 1.86659 15.0533 2.59326 16.5133L6.2799 13.84Z"
      fill="#FBBC05"
    />
    <path
      d="M12.3333 5.68C13.8933 5.68 15.3133 6.22667 16.3866 7.24L19.6 4.02667C17.68 2.29333 15.2266 1.33333 12.3333 1.33333C8.05992 1.33333 4.38659 3.97333 2.59326 7.32667L6.27992 10C7.14659 7.56 9.52659 5.68 12.3333 5.68Z"
      fill="#EA4335"
    />
  </svg>
);

export const IconApple = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-foreground/80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.482 15.334C16.274 16.146 15.238 17.554 15.238 19.138C15.238 21.694 17.062 22.846 19.33 22.99C21.682 23.122 23.53 21.73 23.53 19.138C23.53 16.57 21.742 15.334 19.438 15.334C18.23 15.334 17.482 15.334 17.482 15.334ZM19.438 1.018C17.074 1.018 15.238 2.41 15.238 4.982C15.238 7.554 17.062 8.702 19.33 8.842C21.682 8.974 23.53 7.582 23.53 4.982C23.518 2.41 21.742 1.018 19.438 1.018Z" />
  </svg>
);

export const IconMicrosoft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.4 2H2v9.4h9.4V2Z" fill="#F25022" />
    <path d="M22 2h-9.4v9.4H22V2Z" fill="#7FBA00" />
    <path d="M11.4 12.6H2V22h9.4V12.6Z" fill="#00A4EF" />
    <path d="M22 12.6h-9.4V22H22V12.6Z" fill="#FFB900" />
  </svg>
);

export const IconFigma = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="figma" {...props} />
);

export const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-foreground/80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const IconSlack = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#36C5F0" />
    <path d="M9 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="#2EB67D" />
    <path d="M14 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" fill="#ECB22E" />
    <path d="M15.5 15a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" fill="#E01E5A" />
    <path
      d="M10 14h4v-1.5a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5 1.5V14Z"
      fill="#E01E5A"
    />
    <path
      d="M8.5 14a1.5 1.5 0 0 0 1.5 1.5h1.5v-1a1.5 1.5 0 0 0-1.5-1.5H8.5v1Z"
      fill="#ECB22E"
    />
    <path
      d="M15.5 10a1.5 1.5 0 0 0-1.5-1.5H12.5v4a1.5 1.5 0 0 0 1.5 1.5h1.5v-4Z"
      fill="#36C5F0"
    />
    <path
      d="M14 8.5a1.5 1.5 0 0 0-1.5-1.5h-1v4a1.5 1.5 0 0 0 1.5 1.5h1v-4Z"
      fill="#2EB67D"
    />
  </svg>
);

export const IconNotion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-foreground/80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.111 5.889h3.222v10.222h-3.222V7.889zm-4.333 0h3.222v10.222H7.778V7.889z" />
  </svg>
);

// --- New Unique SVG Icons ---
export const IconVercel = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="vercel" {...props} />
);

export const IconStripe = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="stripe" {...props} />
);

export const IconDiscord = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.317 4.482a1.88 1.88 0 0 0-1.635-.482C17.398 3.42 16.02 3 12 3s-5.398.42-6.682 1.001a1.88 1.88 0 0 0-1.635.483c-1.875 1.2-2.325 3.61-1.568 5.711 1.62 4.47 5.063 7.8 9.885 7.8s8.265-3.33 9.885-7.8c.757-2.1-.307-4.51-1.568-5.711ZM8.45 13.4c-.825 0-1.5-.75-1.5-1.65s.675-1.65 1.5-1.65c.825 0 1.5.75 1.5 1.65s-.675 1.65-1.5 1.65Zm7.1 0c-.825 0-1.5-.75-1.5-1.65s.675-1.65 1.5-1.65c.825 0 1.5.75 1.5 1.65s-.675 1.65-1.5 1.65Z"
      fill="#5865F2"
    />
  </svg>
);

export const IconX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-foreground/90"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zM17.03 19.75h1.866L7.156 4.25H5.16l11.874 15.5z" />
  </svg>
);

export const IconSpotify = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.125 14.175c-.188.3-.563.413-.863.225-2.437-1.5-5.5-1.725-9.15-1.012-.338.088-.675-.15-.763-.488-.088-.337.15-.675.488-.762 3.937-.787 7.287-.525 9.975 1.125.3.187.412.562.225.862zm.9-2.7c-.225.363-.675.488-1.037.263-2.7-1.65-6.825-2.1-9.975-1.162-.413.113-.825-.15-1-.562-.15-.413.15-.825.563-1 .362-.112 3.487-.975 6.6 1.312.362.225.487.675.262 1.038v.112zm.113-2.887c-3.225-1.875-8.55-2.025-11.512-1.125-.487.15-.975-.15-1.125-.637-.15-.488.15-.975.638-1.125 3.337-.975 9.15-.787 12.825 1.312.45.263.6.825.337 1.275-.263.45-.825.6-1.275.337v-.038z"
      fill="#1DB954"
    />
  </svg>
);

export const IconDropbox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 8l-6 4 6 4 6-4-6-4z" fill="#0061FF" />
    <path d="M6 12l6 4 6-4-6-4-6 4z" fill="#007BFF" />
    <path d="M12 16l6-4-6-4-6 4 6 4z" fill="#4DA3FF" />
    <path d="M18 12l-6-4-6 4 6 4 6-4z" fill="#0061FF" />
  </svg>
);

export const IconTwitch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.149 0L.707 3.028v17.944h5.66v3.028h3.028l3.028-3.028h4.243l7.07-7.07V0H2.15zm19.799 13.434l-3.535 3.535h-4.95l-3.029 3.029v-3.03H5.14V1.414h16.808v12.02z"
      fill="#9146FF"
    />
    <path
      d="M15.53 5.303h2.12v6.36h-2.12v-6.36zm-4.95 0h2.12v6.36h-2.12v-6.36z"
      fill="#9146FF"
    />
  </svg>
);

export const IconLinear = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="linear-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5E5CE6" />
        <stop offset="100%" stopColor="#2C2C2C" />
      </linearGradient>
    </defs>
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-4 9h8v2H8v-2z"
      fill="url(#linear-grad)"
    />
  </svg>
);

export const IconYouTube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.582 6.186A2.482 2.482 0 0 0 19.82 4.42C18.1 4 12 4 12 4s-6.1 0-7.82.42c-.98.26-1.74.98-1.762 1.766C2 7.94 2 12 2 12s0 4.06.418 5.814c.022.786.782 1.506 1.762 1.766C6.1 20 12 20 12 20s6.1 0 7.82-.42c.98-.26 1.74-.98 1.762-1.766C22 16.06 22 12 22 12s0-4.06-.418-5.814zM9.75 15.5V8.5L15.75 12 9.75 15.5z"
      fill="#FF0000"
    />
  </svg>
);

export const IconJava = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3s-5 2-5 6c0 5 5 6 5 6s5-1 5-6c0-4-5-6-5-6Z" fill="#007396" />
    <path
      d="M7 16s2 1 5 1 5-1 5-1"
      stroke="#E87722"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10 8.5s1.5-.5 2 0"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const IconPython = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2h-4a4 4 0 0 0-4 4v4h4a4 4 0 0 1 4 4v4a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-4h-4a4 4 0 0 1-4-4V6a4 4 0 0 0-4-4Z"
      fill="#306998"
    />
    <circle cx="8" cy="6" r="1" fill="#FFE873" />
    <path
      d="M12 22h4a4 4 0 0 0 4-4v-4h-4a4 4 0 0 1-4-4V6a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v4h4a4 4 0 0 1 4 4v4a4 4 0 0 0 4 4Z"
      fill="#FFE873"
    />
    <circle cx="16" cy="18" r="1" fill="#306998" />
  </svg>
);

export const IconKotlin = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="kotlin" {...props} />
);

export const IconSwift = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="swift" {...props} />
);

export const IconHTML = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 3h16l-1.5 17L12 21l-6.5-1L4 3Z" fill="#E34F26" />
    <path d="M7 7h10l-.5 5.5L12 14l-4.5-1L7 7Z" fill="#fff" />
    <path d="M12 17.5l3.5-.97L16.5 14H12v3.5Z" fill="#fff" opacity="0.7" />
  </svg>
);

export const IconCSS = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 3h16l-1.5 17L12 21l-6.5-1L4 3Z" fill="#1572B6" />
    <path d="M7 7h10l-.5 5.5L12 14l-4.5-1L7 7Z" fill="#fff" />
    <path d="M12 17.5l3.5-.97L16.5 14H12v3.5Z" fill="#fff" opacity="0.6" />
  </svg>
);

export const IconJavaScript = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="js" {...props} />
);

export const IconTypeScript = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="typescript" {...props} />
);

export const IconReact = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="react" />
);

export const IconNextjs = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="nextjs2" {...props} />
);

export const IconTailwind = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 16c5 0 6-3 12-3 0 0-2 5-12 5 5 0 6-3 12-3"
      stroke="#38B2AC"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M2 12c5 0 6-3 12-3 0 0-2 5-12 5"
      stroke="#0BC5EA"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const IconFramerMotion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="9" stroke="#A855F7" strokeWidth="2" />
    <path
      d="M7 12h10M12 7v10"
      stroke="#A855F7"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const IconNestJS = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="nestjs" {...props} />
);

export const IconReactNative = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="reactnative" {...props} />
);

export const IconExpo = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="expo" {...props} />
);

export const IconSupabase = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="supabase" {...props} />
);

export const IconFirebase = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="firebase" {...props} />
);

export const IconMongoDB = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="mongodb" {...props} />
);

export const IconGCP = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 7h8v4H4V7Z" fill="#4285F4" />
    <path d="M12 7h8v4h-8V7Z" fill="#34A853" />
    <path d="M4 11h8v6H4v-6Z" fill="#FBBC05" />
    <path d="M12 11h8v6h-8v-6Z" fill="#EA4335" />
  </svg>
);

export const IconClerk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="#7C3AED"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="#7C3AED" />
    <path
      d="M8 12h8M12 8v8"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const IconSQLite = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="#2D8CCF"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="4" width="16" height="16" rx="3" fill="#2D8CCF" />
    <path d="M8 8h8v8H8V8Zm0 8h8v2H8v-2Z" fill="#fff" opacity="0.9" />
  </svg>
);

export const IconRazorpay = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="#0E4DA4"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 4h16v16H4V4Z" rx="3" fill="#0E4DA4" />
    <path d="M7 8h10v2H7V8Zm0 5h10v2H7v-2Z" fill="#fff" />
  </svg>
);

export const IconAndroidStudio = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="android" {...props} />
);

export const IconVSCode = (props: React.SVGProps<SVGSVGElement>) => (
  <StackIcon name="vscode" {...props} />
);

export const IconXcode = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="#0A84FF"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="4" width="16" height="16" rx="4" fill="#0A84FF" />
    <path
      d="M9 9l6 6M15 9l-6 6"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const IconPostman = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="#FF6C37"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 6h16v12H4V6Z" rx="3" fill="#FF6C37" />
    <path d="M8 8h8v2H8V8Zm0 5h5v2H8v-2Z" fill="#fff" />
  </svg>
);
