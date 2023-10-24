import AboutPoints from "@/components/AboutPoints";
import Layout from "@/components/Layout";
import Teams from "@/components/Teams";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { AboutUs } from "@/typings";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";


const query = groq`
  *[_type == "about"][0]{
    header,
    caption,
    illustrationImage,
    backgroundImage,
  }
`

export const revalidate = 30;
async function page() {
 

 const aboutUs: AboutUs = await client.fetch(query);
  return (
    <Layout img={urlForImage(aboutUs.backgroundImage).url()} pageName="About Us">
      <div className="max-w-6xl mx-4 xl:mx-auto py-6">
        <div className="flex flex-col lg:flex-row items-center justify-center ">
          <div>
            <h3 className="text-xl font-semibold my-2">
              {aboutUs.header}
            </h3>
            <p>
              {aboutUs.caption}
            </p>
          </div>
          <Image
            src={urlForImage(aboutUs.illustrationImage).url()}
            alt="img illustrator"
            width={350}
            height={350}
          />
        </div>
        <div className="mt-12 mb-8 ">
          <h4 className="uppercase text-center tracking-wider font-semibold text-[#FADBBA]">
            delivering solution differently
          </h4>
          <h3 className="text-center font-normal text-3xl capitalize py-2 ">
            why choose us:
          </h3>
        </div>
        <AboutPoints />
        <div className="pt-9">
          <h3 className="text-center font-normal text-3xl capitalize py-2">
            Meet our team:
          </h3>
          <Teams />
        </div>
      </div>
      <div className="bg-[#faba76] text-white py-14">
        <div className="max-w-6xl mx-8 xl:mx-auto md:flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Need help? Let’s talk.</h3>
          <Link
            href="/contact"
            className="py-4 px-4 bg-white text-[#faba76] inline-block uppercase tracking-wide mt-2 md:mt-0 hover:bg-black hover:text-white duration-300 ease-in"
          >
            get in touch
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default page;
