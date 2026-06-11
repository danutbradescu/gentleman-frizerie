"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

type Barber = {
  _id: string; name: string;
  slug: { current: string };
  bio: string; photo: any;
  services?: Array<{ name: string; price: number }>;
};

export default function Barbers({ barbers }: { barbers: Barber[] }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="frizeri" style={{
      display: "flex", width: "100%",
      height: "80vh", minHeight: "500px",
      fontFamily: "'Barlow Condensed', sans-serif",
    }}>
      {barbers.slice(0, 2).map((barber, i) => {
        const isHovered = hovered === barber._id;
        const otherHovered = hovered !== null && hovered !== barber._id;
        return (
          <div
            key={barber._id}
            onMouseEnter={() => setHovered(barber._id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              flex: isHovered ? 1.4 : otherHovered ? 0.6 : 1,
              position: "relative", overflow: "hidden", cursor: "pointer",
              transition: "flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              borderRight: i === 0 ? "1px solid rgba(204,255,0,0.25)" : "none",
            }}
          >
            {barber.photo ? (
              <Image
                src={urlFor(barber.photo).width(800).url()}
                alt={barber.name} fill
                style={{
                  objectFit: "cover",
                  filter: isHovered ? "grayscale(0%) brightness(0.7)" : "grayscale(100%) brightness(0.3)",
                  transition: "filter 0.6s ease",
                }}
              />
            ) : (
              <div style={{ position: "absolute", inset: 0, background: i === 0 ? "#1a1a1a" : "#181818" }} />
            )}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "60%",
              background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)", zIndex: 1,
            }} />
            <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", zIndex: 2 }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#CCFF00", opacity: 0.7, marginBottom: "0.4rem" }}>
                0{i + 1} — FRIZER
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 3vw, 2.8rem)",
                fontWeight: 700, color: "#fff", lineHeight: 1,
              }}>
                {barber.name}
              </h2>
              {barber.bio && (
                <p style={{
                  fontSize: "0.8rem", color: "rgba(255,255,255,0.5)",
                  marginTop: "0.4rem", maxWidth: "220px", lineHeight: 1.5,
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 0.4s 0.1s, transform 0.4s 0.1s",
                }}>
                  {barber.bio}
                </p>
              )}
              <Link href={`/frizeri/${barber.slug.current}`} style={{
                display: "inline-block", marginTop: "1rem",
                fontSize: "0.7rem", letterSpacing: "0.15em",
                textTransform: "uppercase", color: "#CCFF00",
                textDecoration: "none", borderBottom: "1px solid #CCFF00",
                paddingBottom: "1px",
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.4s 0.15s, transform 0.4s 0.15s",
              }}>
                Vezi profilul lui {barber.name.split(" ")[0]} →
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
