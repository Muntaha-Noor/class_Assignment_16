import { Rule } from 'sanity'; 

const author = {
    name: "author",
    title: "Author",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: "bio",
        title: "Biography",
        type: "text",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: "name",
        media: "image",
      },
    },
  };
  
  export default author;
  