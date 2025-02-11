import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <div className="flex justify-center items-center">
        <Link href={"/"} className={buttonVariants({ variant: "link" })}>
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
