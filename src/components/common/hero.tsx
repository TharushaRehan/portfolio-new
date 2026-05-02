import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Hero = () => {
  return (
    <div className="px-20 py-10 flex gap-x-10">
      <div className="flex items-center gap-x-5 justify-center">
        <Avatar className="w-22.5 h-22.5">
          <AvatarImage src={"./profile-pic.jpeg"} />
          <AvatarFallback>Tharusha Perera</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-2xl md:text-3xl font-medium tracking-tight bg-linear-to-b from-foreground to-foreground/70 text-transparent bg-clip-text">
            Tharusha Perera
          </p>
          <p className="text-gray-500">Product Engineer</p>
          <div></div>
        </div>
      </div>
      <div>
        <p className="text-4xl font-medium">
          Hi! I&apos;m{" "}
          <span className="bg-white shadow-xl rounded-full px-3 py-2 text-xl">
            Tharusha Perera
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
