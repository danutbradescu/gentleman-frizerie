import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, publishedAt, mainImage, excerpt
    }`
  );
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, body, publishedAt, mainImage, seoDescription, excerpt,
      "author": author->{ name, image }
    }`,
    { slug }
  );
}

export async function getAllBarbers() {
  return client.fetch(
    `*[_type == "barber"] | order(order asc) {
      _id, name, slug, bio, photo,
      "services": services[]->{ name, price, duration }
    }`
  );
}

export async function getBarberBySlug(slug: string) {
  return client.fetch(
    `*[_type == "barber" && slug.current == $slug][0] {
      _id, name, bio, photo, instagram,
      "services": services[]->{ name, price, duration, description }
    }`,
    { slug }
  );
}

export async function getLatestPosts(count = 3) {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0...$count] {
      _id, title, slug, publishedAt, mainImage, excerpt
    }`,
    { count }
  );
}

export async function getAllGalleryImages() {
  return client.fetch(
    `*[_type == "gallery"] | order(order asc) {
      _id,
      image,
      category
    }`
  );
}