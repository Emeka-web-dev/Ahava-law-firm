import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone number",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
  ],
});
