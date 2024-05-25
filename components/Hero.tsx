"use client";

import { myRoles } from "@/data";
import Link from "next/link";
import { useState } from "react";
import { FaArrowDown, FaLocationArrow } from "react-icons/fa6";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { FlipWords } from "./ui/flip-words";
import MagicButton from "./ui/magic-button";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

type PDFFile = string | File | null;
const Hero = () => {
  const [file, setFile] = useState<PDFFile>("./Tharusha_Perera_CV_common.pdf");
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  //

  //
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white 
        dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute 
        top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex 
          items-center justify-center dark:bg-black-100 bg-white 
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            <div className="">
              Hi!👋 I&apos;m Tharusha Perera, a<br />
              <FlipWords words={myRoles} /> <br />
              based in Sri Lanka.
            </div>
          </div>

          <div className="flex md:gap-10 md:flex-row gap-5 flex-col mt-4 md:mt-0">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaArrowDown />}
                position="right"
              />
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10">
                  View CV
                  <FaLocationArrow className="ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] overflow-scroll sm:max-w-[325px] md:max-w-fit">
                <DialogHeader>
                  <Link href={"/Tharusha_Perera_CV_common.pdf"} target="_blank">
                    <Button
                      className="w-fit bg-transparent text-white-200 border border-white-200 rounded-full hover:bg-black-100"
                      size={"sm"}
                    >
                      Download
                    </Button>
                  </Link>
                </DialogHeader>
                <Document
                  file={file}
                  options={options}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="mt-10"
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      width={1000}
                    />
                  ))}
                </Document>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
