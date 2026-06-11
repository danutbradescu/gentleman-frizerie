import type { Metadata } from "next";
import { getPostBySlug, getAllPosts, urlFor } from "@/lib/sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.seoDescription,
    openGraph: {
      title: post.title, description: post.seoDescription,
      images: post.mainImage ? [{ url: urlFor(post.mainImage).width(1200).height(630).url() }] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p: any) => ({ slug: p.slug.current }));
}

const ptComponents = {
  block: {
    normal: ({ children }: any) => <p style={{ fontSize: "1.1rem", lineHeight: 1.9, color: "rgba(255,255,255,0.7)", marginBottom: "1.75rem" }}>{children}</p>,
    h2: ({ children }: any) => <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#fff", marginTop: "3rem", marginBottom: "1rem" }}>{children}</h2>,
    h3: ({ children }: any) => <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "#fff", marginTop: "2rem", marginBottom: "0.75rem" }}>{children}</h3>,
    blockquote: ({ children }: any) => <blockquote style={{ borderLeft: "3px solid #CCFF00", paddingLeft: "1.5rem", margin: "2rem 0", fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>{children}</blockquote>,
  },
  marks: {
    strong: ({ children }: any) => <strong style={{ color: "#fff", fontWeight: 700 }}>{children}</strong>,
  },
  list: {
    bullet: ({ children }: any) => <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.75rem", color: "rgba(255,255,255,0.7)" }}>{children}</ul>,
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "0.5rem", listStyleType: "none", paddingLeft: "1rem", position: "relative" }}>
        <span style={{ position: "absolute", left: "-0.5rem", color: "#CCFF00", fontWeight: 700 }}>—</span>
        {children}
      </li>
    ),
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 2.5rem", background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/blog" style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", textDecoration: "none", textTransform: "uppercase" }}>← Blog</Link>
        <Link href="/" style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "0.25em", color: "#CCFF00", textDecoration: "none" }}>#Gentleman</Link>
        <Link href="/" style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", textDecoration: "none", textTransform: "uppercase" }}>Acasă</Link>
      </nav>
      <div style={{ position: "relative", width: "100%", height: "70vh", minHeight: "500px" }}>
        {post.mainImage ? (
          <Image src={urlFor(post.mainImage).width(1600).height(900).url()} alt={post.title} fill priority style={{ objectFit: "cover", filter: "grayscale(40%) brightness(0.45)" }} />
        ) : <div style={{ position: "absolute", inset: 0, background: "#111" }} />}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0a0a0a 15%, rgba(10,10,10,0.3) 60%, transparent)" }} />
        <div style={{ position: "absolute", bottom: "4rem", left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "780px", padding: "0 2rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#CCFF00", opacity: 0.8, marginBottom: "1rem" }}>
            {new Date(post.publishedAt).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
            {post.author?.name && ` · ${post.author.name}`}
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.15, color: "#fff" }}>{post.title}</h1>
        </div>
      </div>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "5rem 2rem 6rem" }}>
        <div style={{ width: "40px", height: "2px", background: "#CCFF00", marginBottom: "2.5rem" }} />
        {post.excerpt && <p style={{ fontSize: "1.25rem", lineHeight: 1.7, color: "rgba(255,255,255,0.85)", fontWeight: 500, marginBottom: "3rem", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>{post.excerpt}</p>}
        {post.body ? <PortableText value={post.body} components={ptComponents} /> : <p style={{ color: "rgba(255,255,255,0.4)" }}>Conținut indisponibil.</p>}
        <div style={{ margin: "4rem 0", height: "1px", background: "rgba(255,255,255,0.08)" }} />
        {post.author?.name && (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#1a1a1a", border: "1px solid rgba(204,255,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: "#CCFF00", fontWeight: 700 }}>
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p style={{ fontSize: "0.95rem", fontWeight: 600 }}>{post.author.name}</p>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Frizer · Gentleman SALON</p>
            </div>
          </div>
        )}
        <div style={{ marginTop: "5rem" }}>
          <Link href="/blog" style={{ display: "inline-block", padding: "0.9rem 2.5rem", border: "1.5px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>← Toate articolele</Link>
        </div>
      </div>
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "3rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.72rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>
        <span>© {new Date().getFullYear()} Gentleman SALON · Motru</span>
        <Link href="/" style={{ color: "#CCFF00", textDecoration: "none" }}>#Gentleman</Link>
      </footer>
    </div>
  );
}
