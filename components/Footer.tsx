import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { groq } from "next-sanity";
import { Contact } from "@/typings";
import { client } from "@/sanity/lib/client";

const query = groq`
  *[_type == "contact"][0]{
    email,
    address,
    phone,
    socialLinks,
  }
`;
const Footer = async () => {
  const contact: Contact = await client.fetch(query);
  return (
    <footer className="bg-black">
      <div className="max-w-6xl mx-auto py-6">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src="https://i.imgur.com/z1SbcYk.png"
              height={100}
              width={120}
              alt="footer image"
            />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 mt-2">
          <div className="flex items-center justify-center text-sm">
            <CiLocationOn className="w-6 h-6 mr-2 " />
            <p>{contact.address}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center">
              <AiOutlineMail className="h-6 w-6 mr-2" />
              <p>{contact.email}</p>
            </div>
            <div className="flex items-center justify-center">
              <AiOutlinePhone className="h-6 w-6 mr-2" />
              <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
            </div>
          </div>
        </div>
        <div className="items-center justify-center flex gap-2 pt-2">
          {contact.socialLinks.map((socialLink, i) => (
            <SocialIcon
              key={i}
              className="text-gray-500"
              url={socialLink}
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
        </div>
      </div>
      <div className="text-center bg-gray-950">
        <Link href="https://emeka-resume-kula.vercel.app/">
          <p>
            Made with <span>&#x2764;&#xFE0F;</span> by Emeka
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
