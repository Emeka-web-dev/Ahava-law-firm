import Image from "next/image";
import React from "react";
import {SocialIcon} from "react-social-icons"


type Props = {
  name: string;
  role: string;
  photo: string;
  proficiency: string;
  socials?: string[];
};

function Team({ name, role, photo, proficiency, socials }: Props) {
  return (
    <div className="flex flex-col items-center justify-center pb-12 md:pb-4 max-w-lg mx-auto">
      <div className="relative w-48 h-48">
        <Image src={photo} layout="fill" alt="team image" className="object-cover rounded-full" />
      </div>
      <div className="py-4 text-center">
        <h2 className="text-xl font-medium tracking-wide uppercase">{name}</h2>
        <h3 className="text-lg font-medium tracking-wide uppercase">{role}</h3>
      </div>
      <p className="text-center">{proficiency}</p>
      <div className="flex gap-4 p-4">{socials?.map((social, i) => (
        <SocialIcon key={i} 
        className="text-white border rounded-full"
        url={social}
        fgColor="#fff"
        bgColor="transparent"  />
      ))}</div>
    </div>
  );
}

export default Team;
