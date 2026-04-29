import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background px-4 py-16 text-foreground">
      <div className="w-full max-w-3xl rounded-3xl border border-border/70 bg-card/70 px-8 py-14 shadow-xl shadow-black/5 backdrop-blur-xl sm:px-12 sm:py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/90">
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-8 text-muted-foreground sm:text-lg">
            The page you are looking for doesn’t exist or has been moved. Please
            check the URL or return to the homepage.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "default" }), "gap-x-2")}
          >
            <Home size={16} />
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
