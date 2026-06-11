export default {
  name: "post", title: "Articol Blog", type: "document",
  fields: [
    { name: "title", title: "Titlu articol", type: "string", validation: (Rule: any) => Rule.required().max(80) },
    { name: "slug", title: "URL (Slug)", type: "slug", options: { source: "title", maxLength: 96 }, validation: (Rule: any) => Rule.required() },
    { name: "seoDescription", title: "Descriere SEO (max 155 caractere)", type: "text", rows: 3, validation: (Rule: any) => Rule.required().max(155) },
    { name: "mainImage", title: "Poza principală", type: "image", options: { hotspot: true } },
    { name: "publishedAt", title: "Data publicării", type: "datetime", initialValue: () => new Date().toISOString() },
    { name: "excerpt", title: "Scurt rezumat", type: "text", rows: 3 },
    { name: "body", title: "Conținutul articolului", type: "array", of: [{ type: "block" }, { type: "image" }] },
    { name: "author", title: "Autor", type: "reference", to: [{ type: "barber" }] },
  ],
};
