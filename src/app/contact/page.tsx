import Header from "@/components/common/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ArrowRight, Send } from "lucide-react";
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
        <div className="flex justify-between">
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
          <div className="max-w-150 space-y-5">
            <p className="font-semibold text-lg">{`Hi, I’m Tharusha, a passionate web designer with a love for creating visually stunning experiences. With a strong background in design and front-end development, I specialize in crafting responsive websites that not only look great but also provide interactions across all devices.`}</p>
            <p className="text-gray-500">{`Over the years, I’ve had the opportunity to work with a diverse range of clients, from startups to established brands, helping them bring their visions to life online.`}</p>
            <p className="font-bold">{`Let’s create something amazing together!`}</p>
            <div className="space-y-5 mt-10">
              <p className="font-bold text-3xl tracking-tight">{`Let's get in touch`}</p>
              <Input
                placeholder="Name"
                className="bg-gray-100 h-12 rounded-md border-none focus-visible:ring-0"
              />
              <Input
                placeholder="Email"
                className="bg-gray-100 h-12 rounded-md border-none focus-visible:ring-0"
              />
              <Textarea
                placeholder="Leave me a message"
                className="bg-gray-100 min-h-28 resize-y field-sizing-fixed rounded-md border-none focus-visible:ring-0"
                rows={5}
              />
              <Button className="w-full gap-x-2">
                Send Message <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-x-2">
            <div className="size-3 bg-green-500 rounded-full" />
            <p className="text-lg text-center">FAQ</p>
          </div>
          <p className="text-5xl font-extrabold text-center">{`Got Questions?`}</p>
        </div>
      </section>
    </main>
  );
}
