import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  return (
    <div className="container py-20">
      <h1 className="heading capitalize text-purple">Blogs</h1>
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="border px-5 py-3 rounded-lg w-full flex md:max-w-[700px] items-center">
          <div className="w-full items-center justify-between ">
            <h3 className="text-xl">React Native vs Expo</h3>
            <p className="mt-2 text-purple">
              <span className="opacity-70 text-primary text-xs">by</span>{" "}
              Tharusha Perera
            </p>
          </div>
          <Link
            className="flex items-center gap-x-1 border rounded-xl px-3 py-2 group hover:border-purple transition-all duration-300 h-fit"
            href={"/blogs/react-native-vs-expo"}
          >
            <p className="text-nowrap">Read here</p>
            <ArrowRight
              className="group-hover:translate-x-1 transition-all duration-300"
              size={16}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
