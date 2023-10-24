import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
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
      rows: 4,
    }),
    defineField({
      name: "bgImage",
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
    defineField({
      name: "philosophy",
      title: "Philosophy",
      type: "text",      
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "text",
      rows: 4,
    }),
   
  ],
});
