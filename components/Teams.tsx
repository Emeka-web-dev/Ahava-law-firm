import { groq } from "next-sanity";
import { Teamz } from "@/typings";
import { client } from "@/sanity/lib/client";
import Team from "./Team";
import { urlForImage } from "@/sanity/lib/image";

const query = groq`
    *[_type == "team"]{
        name,
        image,
        role,
        socialLinks,
        proficiency,
    }
`;

export default async function Teams() {
  const teams: Teamz[] = await client.fetch(query);
  return (
    <div className="grid md:grid-cols-2 md:gap-12 p-4 lg:gap-24">
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          role={team.role}
          photo={urlForImage(team.image).url()}
          proficiency={team.proficiency}
          socials={team.socialLinks}
        />
      ))}
    </div>
  );
}
