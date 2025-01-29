import { socialMedia } from "@/data";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { buttonVariants } from "./ui/button";
import MagicButton from "./ui/magic-button";

const Footer = () => {
  return (
    <footer className="container pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] capitalize">
          Ready to take <span className="text-purple">your</span> digital
          presence to <span className="text-purple">next level.</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <a href="maito:tharushaperera088@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div
        className="flex mt-16 md:flex-row flex-col justify-between 
      items-center gap-10 md:gap-0"
      >
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Tharusha Perera
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="cursor-pointer flex justify-center 
              items-center backdrop-filter backdrop-blur-lg saturate-180 
              bg-opacity-100 bg-black-200 rounded-lg border 
              border-black-300 hover:opacity-80"
            >
              <Link
                href={info.link}
                target="_blank"
                className={buttonVariants({ variant: "outline" })}
              >
                <info.img />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
