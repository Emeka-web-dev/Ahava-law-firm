import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "proficiency",
      title: "Proficiency",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "image",
      title: "Image",
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
    // defineField({
    //   name: 'bio',
    //   title: 'Bio',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Block',
    //       type: 'block',
    //       styles: [{title: 'Normal', value: 'normal'}],
    //       lists: [],
    //     },
    //   ],
    // }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
