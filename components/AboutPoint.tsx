"use client";

import Image from "next/image";
import FramerContainer from "./FramerContainer";

type Props = {
  title: string;
  point: string;
  pointImg: string;
  index: number;
};

function AboutPoint({ title, point, pointImg, index }: Props) {
  const oddNumbers = [1, 3, 5, 7, 9];

  let side = oddNumbers.find((oddNumber) => oddNumber == index)
    ? "right"
    : "left";
  return (
    <FramerContainer
      initial={{ scaleX: 1.2, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{once: true}}
      className="w-[90%] md:h-[28rem] mx-auto relative"
    >
      <div
        className={`w-full lg:w-[80%] h-[11rem] md:h-full md:absolute top-0 ${
          side == "right" ? "right-0" : "left-0"
        }`}
      >
        <div className="w-full h-full relative">
          <Image
            src={pointImg}
            alt="point image"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
      <div
        className={`p-6 lg:p-16 bg-[#f1f2f6] text-black border-b-4 border-b-[#faba76] md:absolute md:top-1/2 transform md:-translate-y-1/2 ${
          side == "right" ? "md:left-[20px]" : "md:right-[20px]"
        } lg:${
          side == "left" ? "left-0" : "right-0"
        } md:w-[26rem] lg:w-[33rem]`}
      >
        <h3 className="text-2xl font-semibold pb-3">{title}</h3>
        <p>{point}</p>
      </div>
    </FramerContainer>
  );
}

export default AboutPoint;
