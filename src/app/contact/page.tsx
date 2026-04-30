import Header from "@/components/common/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <Separator />
      <section className="p-20 space-y-20">
        <div className="space-y-5">
          <div className="flex gap-x-2 items-center">
            <div className="bg-green-500 size-3 rounded-full" />
            <p className="tracking-tighter">Available for freelance work</p>
          </div>
          <h1 className="text-5xl font-medium">About Me</h1>
        </div>
        <div>
          <div className="flex gap-x-5 max-w-150">
            <Avatar className="w-22.5 h-22.5">
              <AvatarImage src={"./profile-pic.jpeg"} />
              <AvatarFallback>Tharusha Perera</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-y-5">
              <Link href={"mailto:tharushaperera088@gmail.com"}>
                <p className="text-xl font-semibold">
                  tharushaperera088@gmail.com
                </p>
              </Link>
              <p className="text-gray-500">{`I’m Tharusha, a passionate web designer with a love for creating visually stunning and user-friendly digital experiences. `}</p>
              <Link
                href={"https://cal.com/tharusha-perera/30min"}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-fit cursor-pointer group inline-flex items-center h-12 rounded-full",
                )}
              >
                Book a call
                <ArrowRight
                  size={16}
                  className="transform transition-transform duration-300 group-hover:translate-x-1 ml-2"
                />
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
}
