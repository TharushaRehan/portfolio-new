import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { MotionButton } from "@/components/motion";
import { DotLabel, ProfilePicture } from "@/components/common";

const Hero = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex items-center overflow-hidden w-full pt-20"
      id="hero"
    >
      <div className="glow-element top-1/4 left-1/4 opacity-50" />
      <div
        className="glow-element top-1/2 right-1/4 opacity-30"
        style={{ animationDelay: "-15s" }}
      />

      <div className="px-20 py-28 w-full flex">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col items-center w-full"
        >
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-start md:justify-between w-full">
            <div className="flex items-center gap-x-4 shrink-0">
              <ProfilePicture />
              <div className="text-nowrap text-start">
                <p className="text-2xl md:text-3xl font-medium">
                  Tharusha Perera
                </p>
                <p className="text-sm text-muted-foreground">
                  Product Engineer
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <DotLabel text="Available for freelance work" />
              <h1 className="flex-1 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-7xl mb-8 md:text-start">
                Hi! I&apos;m{" "}
                <span className="inline-flex items-center justify-center bg-secondary text-secondary-foreground rounded-full px-5 py-2 mx-2 text-2xl md:text-3xl lg:text-4xl align-middle shadow-sm">
                  Tharusha Perera
                </span>
                <br />a{" "}
                <span className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-5 py-2 mx-2 text-2xl md:text-4xl lg:text-6xl align-middle shadow-sm">
                  Product Engineer
                </span>
                <br />
                building{" "}
                <span className="inline-flex items-center justify-center border-2 border-foreground/10 bg-white rounded-full px-5 py-2 mx-2 text-2xl md:text-4xl lg:text-6xl align-middle shadow-sm">
                  apps
                </span>{" "}
                people love.
              </h1>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-medium text-center">
            I ship polished digital products across web and mobile. Bridging the
            gap between engineering quality and user experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <MotionButton
              size="lg"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-primary text-primary-foreground font-bold px-6 h-12 w-full sm:w-auto flex items-center gap-2"
            >
              See my work
              <motion.span
                whileHover={{ x: 6 }}
                className="w-5 h-5 inline-block"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </MotionButton>

            {/* <div className="flex items-center gap-4 text-foreground/70 justify-center">
              <MotionAnchor
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card rounded-full"
              >
                <IconGitHub className="w-5 h-5" />
              </MotionAnchor>
              <MotionAnchor
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card rounded-full"
              >
                <LinkedinLogoIcon className="w-5 h-5" />
              </MotionAnchor>
              <MotionAnchor
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-card rounded-full"
              >
                <TwitterLogoIcon className="w-5 h-5" />
              </MotionAnchor>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

Hero.displayName = "Hero";

export { Hero };
