import ContactInfo from "@/components/ContactInfo";
import Layout from "@/components/Layout";
import MyForm from "@/components/MyForm";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Contact } from "@/typings";
import { groq } from "next-sanity";
import Link from "next/link";

const query = groq`
    *[_type == "contact"][0]{
      email,
      address,
      phone,
      socialLinks,
      backgroundImage,
    }
  `;

  export const revalidate = 60;
async function page() {
  
  const contact: Contact = await client.fetch(query);

  return (
    <Layout img={urlForImage(contact.backgroundImage).url()} pageName="Contact">
      <div className="flex flex-col-reverse md:grid grid-cols-12 gap-4 max-w-6xl mx-auto">
        <div className="bg-black/70 md:col-span-6 lg:col-span-7 p-4">
          <h2 className="font-bold text-3xl">Get in touch</h2>
          <p className="mt-3">
            We’d love to learn more about you. Don’t like filling out forms?
            Don’t worry. You can email us at
          </p>
          <Link
            href={`mailto:${contact.email}`}
            className="text-[#FADBBA]"
          >
           {contact.email}
          </Link>
         <MyForm/>
        </div>
        <div className="md:col-span-6 lg:col-span-5">
          <ContactInfo address={contact.address} email={contact.email} phone={contact.phone} />
        </div>
      </div>
    </Layout>
  );
}

export default page;
