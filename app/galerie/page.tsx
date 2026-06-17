"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllGalleryImages, urlFor } from "@/lib/sanity";
import Footer from "@/components/footer/page";

const categoryLabels: Record<string, string> = {
  tuns: "Tuns",
  barbierit: "Bărbierit",
  styling: "Styling",
  transformare: "Transformare",
  all: "Toate",
};

export default function GaleriePage() {
  const [images, setImages] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [lightbox, setLightbox] = useState<any | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getAllGalleryImages().then((data) => {
      setImages(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFiltered(images);
    } else {
      setFiltered(images.filter((img) => img.category === activeFilter));
    }
  }, [activeFilter, images]);

  // Cursor custom
  useEffect(() => {
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY, visible: true });
    const leave = () => setCursor(c => ({ ...c, visible: false }));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseleave", leave); };
  }, []);

  // Închide lightbox cu Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const categories = ["all", ...Array.from(new Set(images.map((img) => img.category).filter(Boolean)))];

  // Masonry: distribuie în 3 coloane
  const columns = [[], [], []] as any[][];
  filtered.forEach((img, i) => columns[i % 3].push(img));

  return (
    <>
      {/* Cursor custom */}
      <div style={{
        position: "fixed",
        left: cursor.x, top: cursor.y,
        zIndex: 9999, pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        opacity: cursor.visible && hoveredId ? 1 : 0,
        transition: "opacity 0.2s, transform 0.15s",
        display: "flex", alignItems: "center", justifyContent: "center",
        width: "72px", height: "72px",
        borderRadius: "50%",
        background: "#CCFF00",
        color: "#000",
        fontSize: "0.6rem",
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        fontFamily: "'Barlow Condensed', sans-serif",
        mixBlendMode: "difference",
      }}>
        VEzi
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.95)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out",
            padding: "2rem",
          }}
        >
          <div style={{ position: "relative", maxWidth: "900px", maxHeight: "85vh", width: "100%" }}>
            <Image
              src={urlFor(lightbox.image).width(1200).url()}
              alt={lightbox.category || ""}
              width={1200} height={800}
              style={{ width: "100%", height: "auto", maxHeight: "85vh", objectFit: "contain" }}
            />
            {lightbox.category && (
              <div style={{
                position: "absolute", bottom: "-2.5rem", left: 0,
                fontSize: "0.65rem", letterSpacing: "0.25em",
                textTransform: "uppercase", color: "#CCFF00", opacity: 0.7,
              }}>
                {categoryLabels[lightbox.category] || lightbox.category}
              </div>
            )}
          </div>
          <button onClick={() => setLightbox(null)} style={{
            position: "absolute", top: "1.5rem", right: "1.5rem",
            background: "none", border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff", width: "40px", height: "40px",
            cursor: "pointer", fontSize: "1rem",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>✕</button>
        </div>
      )}

      <div style={{
        background: "#0a0a0a", minHeight: "100vh",
        fontFamily: "'Barlow Condensed', sans-serif", color: "#fff",
        cursor: hoveredId ? "none" : "default",
      }}>

        {/* NAV */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.5rem 2.5rem",
          background: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <Link href="/" style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", textDecoration: "none", textTransform: "uppercase" }}>← Acasă</Link>
          <Link href="/" style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "0.25em", color: "#CCFF00", textDecoration: "none" }}>#Gentleman</Link>
          <div style={{ width: "80px" }} />
        </nav>

        {/* HEADER */}
        <div style={{
          paddingTop: "10rem", paddingBottom: "4rem",
          paddingLeft: "2.5rem", paddingRight: "2.5rem",
          maxWidth: "1200px", margin: "0 auto",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between", flexWrap: "wrap", gap: "2rem",
        }}>
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#CCFF00", opacity: 0.8, marginBottom: "1rem" }}>
              Gentleman SALON · Motru
            </p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.02em" }}>
              Galerie
            </h1>
          </div>

          {/* Filtre */}
          <div style={{ display: "flex", gap: "0", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  background: "none",
                  border: "1px solid",
                  borderColor: activeFilter === cat ? "#CCFF00" : "rgba(255,255,255,0.12)",
                  color: activeFilter === cat ? "#000" : "rgba(255,255,255,0.5)",
                  backgroundColor: activeFilter === cat ? "#CCFF00" : "transparent",
                  padding: "0.5rem 1.25rem",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "0.7rem", letterSpacing: "0.15em",
                  textTransform: "uppercase", cursor: "pointer",
                  marginLeft: "-1px",
                  transition: "all 0.2s",
                }}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>
        </div>

        {/* MASONRY GRID */}
        <div
          ref={containerRef}
          style={{
            maxWidth: "1200px", margin: "0 auto",
            padding: "3rem 2.5rem 6rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "4px",
            alignItems: "start",
          }}
        >
          {columns.map((col, colIdx) => (
            <div key={colIdx} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {col.map((img: any) => (
                <div
                  key={img._id}
                  onMouseEnter={() => setHoveredId(img._id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setLightbox(img)}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    cursor: "none",
                    background: "#111",
                  }}
                >
                  <Image
                    src={urlFor(img.image).width(600).url()}
                    alt={img.category || "Gentleman SALON"}
                    width={600} height={800}
                    style={{
                      width: "100%", height: "auto",
                      display: "block",
                      filter: hoveredId === img._id ? "grayscale(0%) brightness(0.85)" : "grayscale(30%) brightness(0.7)",
                      transform: hoveredId === img._id ? "scale(1.04)" : "scale(1)",
                      transition: "filter 0.5s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />

                  {/* Overlay la hover */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                    opacity: hoveredId === img._id ? 1 : 0,
                    transition: "opacity 0.4s ease",
                  }} />

                  {/* Categorie */}
                  {img.category && (
                    <div style={{
                      position: "absolute", bottom: "1rem", left: "1rem",
                      fontSize: "0.6rem", letterSpacing: "0.2em",
                      textTransform: "uppercase", color: "#CCFF00",
                      opacity: hoveredId === img._id ? 0.9 : 0,
                      transform: hoveredId === img._id ? "translateY(0)" : "translateY(6px)",
                      transition: "opacity 0.3s 0.1s, transform 0.3s 0.1s",
                    }}>
                      {categoryLabels[img.category] || img.category}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "6rem 0", color: "rgba(255,255,255,0.2)" }}>
            <p style={{ fontSize: "1rem", letterSpacing: "0.1em" }}>Nicio fotografie adăugată încă.</p>
            <p style={{ fontSize: "0.8rem", marginTop: "0.5rem", opacity: 0.6 }}>Adaugă poze din Sanity Studio → Galerie Foto</p>
          </div>
        )}

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}