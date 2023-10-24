import Banner from "@/components/Banner";
import Card from "@/components/Card";
import { client } from "@/sanity/lib/client";
import { Home } from "@/typings";
import { groq } from "next-sanity";

const query = groq`
  *[_type == 'home'][0]{
    philosophy,
    mission,
    vision,
  }
`;

export const revalidate = 30;
export default async function Home() {
  const home: Home = await client.fetch(query);
  return (
    <div>
      <Banner />
      <div className="max-w-6xl mx-auto">
        <div className="p-5">
          <h2 className="text-4xl font-bold py-2">Our Philosophy</h2>
          <p className="text-sm md:text-base">{home.philosophy}</p>
        </div>
        <div className="p-5">
          <h2 className="text-4xl font-bold py-2 capitalize">
            What we are know for
          </h2>
          <div className="flex flex-col gap-6 md:flex-row">
            <Card
              image="https://i.imgur.com/TDASCDg.jpg"
              title="Our vision"
              content={home.vision}
              direction
            />
            <Card
              image="https://i.imgur.com/CwD4dmO.jpg"
              title="Our mission"
              content={home.mission}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
