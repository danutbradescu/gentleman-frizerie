import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import post from "./schemas/post";
import barber from "./schemas/barber";
import service from "./schemas/service";
import gallery from "./schemas/gallery";

export default defineConfig({
  name: "gentleman-studio",
  title: "Gentleman — Admin",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: { types: [post, barber, service, gallery] },
});

