import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About Us",
  type: "document",
  fields: [
    defineField({
      name: "header",
      title: "Header",
      type: "string",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "text",
      rows: 5,
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
      name: "illustrationImage",
      title: "Illustration Image",
      type: "image",
      options: {
        hotspot: true,
      },     
    }),    
  ],
});
