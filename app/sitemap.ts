import { MetadataRoute } from "next";
import { getAllPosts, getAllBarbers } from "@/lib/sanity";

const BASE_URL = "https://gentlemanstudio.ro"; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, barbers] = await Promise.all([getAllPosts(), getAllBarbers()]);

  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/galerie`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 },
  ];

  const blogPages = posts.map((post: any) => ({
    url: `${BASE_URL}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const barberPages = barbers.map((barber: any) => ({
    url: `${BASE_URL}/frizeri/${barber.slug.current}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...barberPages];
}