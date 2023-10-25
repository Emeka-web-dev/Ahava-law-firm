import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Home } from "@/typings";
import { groq } from "next-sanity";
import Image from "next/image";
import FramerContainer from "./FramerContainer";

const query = groq`
*[_type == 'home'][0]{
  header,
  caption,
  illustrationImage,
  bgImage,
}
`;
async function Banner() {
  const banner: Home = await client.fetch(query);
  return (
    <div className="relative w-full min-h-[350px] lg:h-[500px] flex">
      <div
        className="absolute right-0 w-full h-full bg-gray-200/50 bg-cover bg-center opacity-50 z-[-1]"
        style={{ backgroundImage: `url(${urlForImage(banner.bgImage).url()})` }}
      />
      <div className="max-w-6xl mx-auto flex px-3 lg:px-0">
        <FramerContainer
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center md:max-w-[60%] gap-3"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-center text-[#FADBBA]">
            {banner.header}
          </h1>
          <p className="text-center">{banner.caption}</p>
        </FramerContainer>

        <FramerContainer
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="md:flex items-end hidden"
        >
          <Image
            src={urlForImage(banner.illustrationImage).url()}
            layout="responsive"
            height={600}
            width={600}
            alt="bannner image"
          />
        </FramerContainer>
      </div>
    </div>
  );
}

export default Banner;
