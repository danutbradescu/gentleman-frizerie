import type { Metadata } from "next";
import { getBarberBySlug, getAllBarbers, urlFor } from "@/lib/sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/page";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const barber = await getBarberBySlug(slug);
  if (!barber) return {};
  return {
    title: barber.name,
    description: `Cunoaște-l pe ${barber.name} — frizer la Gentleman SALON Motru.`,
    openGraph: { images: barber.photo ? [{ url: urlFor(barber.photo).width(800).height(800).url() }] : [] },
  };
}

export async function generateStaticParams() {
  const barbers = await getAllBarbers();
  return barbers.map((b: any) => ({ slug: b.slug.current }));
}

export default async function BarberProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const barber = await getBarberBySlug(slug);
  if (!barber) notFound();

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 2.5rem", background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", textDecoration: "none", textTransform: "uppercase" }}>← Înapoi</Link>
        <Link href="/" style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "0.25em", color: "#CCFF00", textDecoration: "none" }}>#Gentleman</Link>
        <Link href="/blog" style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", textDecoration: "none", textTransform: "uppercase" }}>Blog</Link>
      </nav>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", minHeight: "100vh" }}>
        <div style={{ position: "relative", overflow: "hidden", minHeight: "500px" }}>
          {barber.photo ? (
            <Image src={urlFor(barber.photo).width(900).url()} alt={barber.name} fill priority style={{ objectFit: "cover", objectPosition: "top" }} />
          ) : <div style={{ position: "absolute", inset: 0, background: "#1a1a1a" }} />}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, #0a0a0a, transparent)" }} />
        </div>
        <div style={{ padding: "8rem 4rem 4rem", display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid rgba(255,255,255,0.06)", background: "#0d0d0d" }}>
          <div style={{ fontSize: "0.65rem", letterSpacing: "0.35em", color: "#CCFF00", marginBottom: "1rem", textTransform: "uppercase", opacity: 0.8 }}>Frizer · Gentleman SALON</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 700, lineHeight: 1, marginBottom: "2rem" }}>{barber.name}</h1>
          <div style={{ width: "40px", height: "2px", background: "#CCFF00", marginBottom: "2rem" }} />
          {barber.bio && <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(255,255,255,0.6)", maxWidth: "420px", marginBottom: "3rem" }}>{barber.bio}</p>}
          {barber.instagram && <a href={barber.instagram} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#CCFF00", textDecoration: "none", marginBottom: "3rem" }}>Instagram →</a>}
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "6rem 2.5rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "2rem", marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>Servicii & Prețuri</h2>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "6px" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}>
          {barber.services?.map((service: any, i: number) => (
            <div key={service.name} style={{ background: "#0a0a0a", padding: "2rem 2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", position: "relative" }}>
              <span style={{ position: "absolute", top: "1.5rem", right: "1.5rem", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.15)" }}>{String(i + 1).padStart(2, "0")}</span>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.05em" }}>{service.name}</h3>
              {service.description && <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "rgba(255,255,255,0.4)" }}>{service.description}</p>}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {service.duration ? <span style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>{service.duration} min</span> : <span />}
                <span style={{ fontSize: "1.4rem", fontWeight: 700, color: "#CCFF00" }}>{service.price} <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>RON</span></span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "5rem", display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
          <a href="https://mero.ro/p/gentlemanmotru?utm_source=app_profile_share_button" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "1.1rem 3rem", background: "#CCFF00", color: "#000", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>Programează-te pe Mero →</a>
          <p style={{ fontSize: "0.8rem", opacity: 0.35 }}>Sau vino direct — nu e nevoie de programare.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
