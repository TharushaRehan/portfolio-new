import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { images } from "@/assets/images";

const ProfilePicture = () => {
  return (
    <Avatar className="w-22.5 h-22.5">
      <AvatarImage src={images.profilePic} />
      <AvatarFallback>Tharusha Perera</AvatarFallback>
    </Avatar>
  );
};

ProfilePicture.displayName = "ProfilePicture";

export { ProfilePicture };
