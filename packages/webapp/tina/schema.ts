import { Schema } from "tinacms";

export default {
  collections: [
    {
      name: "snippet",
      label: "Snippets",
      path: "../content/snippets",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          isTitle: true,
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "rich-text",
          name: "body",
          label: "Body",
          isBody: true,
        },
      ],
    },
  ]
} satisfies Schema
