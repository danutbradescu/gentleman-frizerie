export default {
  name: "service", title: "Serviciu / Preț", type: "document",
  fields: [
    { name: "name", title: "Denumire serviciu", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "price", title: "Preț (RON)", type: "number", validation: (Rule: any) => Rule.required().min(0) },
    { name: "duration", title: "Durată (minute)", type: "number" },
    { name: "description", title: "Descriere scurtă (optional)", type: "text", rows: 2 },
  ],
};
