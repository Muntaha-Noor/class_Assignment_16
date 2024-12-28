const blockContent = {
    name: "blockContent",
    title: "Block Content",
    type: "array",
    of: [
      {
        type: "block",
        styles: [{ title: "Normal", value: "normal" }],
        lists: [{ title: "Bullet", value: "bullet" }],
        marks: {
          decorators: [
            { title: "Strong", value: "strong" },
            { title: "Emphasis", value: "em" },
          ],
          annotations: [
            {
              name: "link",
              type: "object",
              title: "Link",
              fields: [
                {
                  name: "href",
                  type: "url",
                  title: "URL",
                },
              ],
            },
          ],
        },
      },
      {
        type: "image",
        options: { hotspot: true },
      },
    ],
  };
  
  export default blockContent;
  