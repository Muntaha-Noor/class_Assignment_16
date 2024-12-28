import { Rule } from 'sanity'; 

const category = {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
    ],
    preview: {
      select: {
        title: "title",
      },
    },
  };
  
  export default category;
  