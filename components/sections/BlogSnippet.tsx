import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

export default function BlogSnippet({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) return null;
  return (
    <section style={{
      background: "#0d0d0d", padding: "6rem 2.5rem",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      fontFamily: "'Barlow Condensed', sans-serif",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between", marginBottom: "4rem",
          flexWrap: "wrap", gap: "1rem",
        }}>
          <div>
            <p style={{ fontSize: "0.62rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#CCFF00", opacity: 0.8, marginBottom: "0.75rem" }}>
              De pe blog
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1, color: "#fff" }}>
              Ultimele articole
            </h2>
          </div>
          <Link href="/blog" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CCFF00", textDecoration: "none", borderBottom: "1px solid #CCFF00", paddingBottom: "2px" }}>
            Toate articolele →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
          {posts.map((post, i) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`} style={{ textDecoration: "none", color: "inherit" }}>
              <article style={{ background: "#0d0d0d", display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", background: "#111" }}>
                  {post.mainImage ? (
                    <Image src={urlFor(post.mainImage).width(600).url()} alt={post.title} fill style={{ objectFit: "cover", filter: "grayscale(40%) brightness(0.6)" }} />
                  ) : (
                    <div style={{ position: "absolute", inset: 0, background: "#1a1a1a" }} />
                  )}
                  <div style={{ position: "absolute", top: "1rem", left: "1rem", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#CCFF00", opacity: 0.7, background: "rgba(0,0,0,0.5)", padding: "4px 8px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div style={{ padding: "1.75rem 2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "0.75rem" }}>
                    {new Date(post.publishedAt).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.3, color: "#fff", flex: 1 }}>
                    {post.title}
                  </h3>
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "1rem" }}>
                    Citește →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
