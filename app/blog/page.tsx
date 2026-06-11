import type { Metadata } from "next";
import { getAllPosts, urlFor } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 60;
export const metadata: Metadata = {
  title: "Blog",
  description: "Sfaturi de îngrijire, tendințe în frizerie și noutăți de la Gentleman SALON Motru.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 2.5rem", background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", textDecoration: "none", textTransform: "uppercase" }}>← Acasă</Link>
        <Link href="/" style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "0.25em", color: "#CCFF00", textDecoration: "none" }}>#Gentleman</Link>
        <div style={{ width: "80px" }} />
      </nav>
      <div style={{ paddingTop: "10rem", paddingBottom: "4rem", paddingLeft: "2.5rem", paddingRight: "2.5rem", maxWidth: "1200px", margin: "0 auto", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#CCFF00", opacity: 0.8, marginBottom: "1rem" }}>Gentleman SALON · Motru</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.02em" }}>Blog</h1>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem 6rem" }}>
        {posts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "8rem 0", color: "rgba(255,255,255,0.25)" }}>
            <p style={{ fontSize: "1rem", letterSpacing: "0.1em" }}>Niciun articol publicat încă.</p>
          </div>
        ) : (
          <>
            {posts[0] && (
              <Link href={`/blog/${posts[0].slug.current}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <article style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", borderBottom: "1px solid rgba(255,255,255,0.06)", cursor: "pointer" }}>
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "#111" }}>
                    {posts[0].mainImage ? (
                      <Image src={urlFor(posts[0].mainImage).width(800).url()} alt={posts[0].title} fill style={{ objectFit: "cover", filter: "grayscale(30%) brightness(0.7)" }} />
                    ) : <div style={{ position: "absolute", inset: 0, background: "#1a1a1a" }} />}
                  </div>
                  <div style={{ padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid rgba(255,255,255,0.06)", background: "#0d0d0d" }}>
                    <div style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#CCFF00", opacity: 0.8, marginBottom: "1rem" }}>
                      Cel mai recent · {new Date(posts[0].publishedAt).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.5rem", color: "#fff" }}>{posts[0].title}</h2>
                    {posts[0].excerpt && <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginBottom: "2rem" }}>{posts[0].excerpt}</p>}
                    <span style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CCFF00", borderBottom: "1px solid #CCFF00", paddingBottom: "2px", alignSelf: "flex-start" }}>Citește articolul →</span>
                  </div>
                </article>
              </Link>
            )}
            {posts.length > 1 && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "1px" }}>
                {posts.slice(1).map((post: any) => (
                  <Link key={post._id} href={`/blog/${post.slug.current}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <article style={{ background: "#0a0a0a", display: "flex", flexDirection: "column", height: "100%" }}>
                      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", background: "#111" }}>
                        {post.mainImage ? <Image src={urlFor(post.mainImage).width(600).url()} alt={post.title} fill style={{ objectFit: "cover", filter: "grayscale(40%) brightness(0.6)" }} /> : <div style={{ position: "absolute", inset: 0, background: "#1a1a1a" }} />}
                      </div>
                      <div style={{ padding: "1.75rem 2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                        <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "0.75rem" }}>
                          {new Date(post.publishedAt).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
                        </p>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.3, color: "#fff", flex: 1 }}>{post.title}</h3>
                        <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "1rem" }}>Citește →</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "3rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.72rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>
        <span>© {new Date().getFullYear()} Gentleman SALON · Motru</span>
        <Link href="/" style={{ color: "#CCFF00", textDecoration: "none" }}>#Gentleman</Link>
      </footer>
    </div>
  );
}
