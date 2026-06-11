import { getLatestPosts, getAllBarbers } from "@/lib/sanity";
import Hero from "@/components/sections/Hero";
import Barbers from "@/components/sections/Barbers";
import BlogSnippet from "@/components/sections/BlogSnippet";
import Location from "@/components/sections/Location";
import About from "@/components/sections/About";

export const revalidate = 60;

export default async function HomePage() {
  const [barbers, latestPosts] = await Promise.all([
    getAllBarbers(),
    getLatestPosts(3),
  ]);
  return (
    <>
      <Hero />
      <Barbers barbers={barbers} />
      <About />
      <BlogSnippet posts={latestPosts} />
      <Location />
    </>
  );
}
