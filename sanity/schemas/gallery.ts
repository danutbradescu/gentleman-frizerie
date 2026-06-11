export default {
  name: "gallery",
  title: "Galerie Foto",
  type: "document",

  fields: [
    {
      name: "image",
      title: "Fotografie",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "category",
      title: "Categorie",
      type: "string",
      options: {
        list: [
          { title: "Tuns", value: "tuns" },
          { title: "Bărbierit", value: "barbierit" },
          { title: "Styling", value: "styling" },
          { title: "Transformare", value: "transformare" },
        ],
      },
    },

    {
      name: "order",
      title: "Ordine afișare",
      type: "number",
    },
  ],

  preview: {
    select: {
      title: "category",
      media: "image",
    },

    prepare({ title, media }: any) {
      return {
        title: title || "Fără categorie",
        media,
      };
    },
  },
};