export default {
  name: "barber", title: "Frizer", type: "document",
  fields: [
    { name: "name", title: "Nume complet", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "URL (ex: andrei)", type: "slug", options: { source: "name", maxLength: 50 }, validation: (Rule: any) => Rule.required() },
    { name: "photo", title: "Fotografie profil", type: "image", options: { hotspot: true } },
    { name: "bio", title: "Bio scurt", type: "text", rows: 4 },
    { name: "instagram", title: "Link Instagram (optional)", type: "url" },
    { name: "services", title: "Servicii prestate", type: "array", of: [{ type: "reference", to: [{ type: "service" }] }] },
    { name: "order", title: "Ordinea de afișare (1 = primul)", type: "number" },
  ],
};
