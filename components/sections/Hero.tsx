"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Blochează scroll când meniul e deschis
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "Despre noi", href: "#About" },
    { label: "Galerie", href: "/galerie" },
    { label: "Recenzii", href: "https://mero.ro/p/gentlemanmotru?page=reviews&absp=company_details_deeplink", external: true },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ── OVERLAY MENIU MOBIL ── */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 98,
          background: "rgba(0,0,0,0.6)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* ── DRAWER MENIU MOBIL ── */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "min(320px, 85vw)",
        background: "#0d0d0d",
        zIndex: 99,
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex", flexDirection: "column",
        padding: "2rem",
        borderLeft: "1px solid rgba(255,255,255,0.08)",
      }}>
        {/* Header drawer */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "3rem",
        }}>
          <div>
            <div style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "0.2em", color: "#CCFF00" }}>
              #Gentleman
            </div>
            <div style={{ fontSize: "0.55rem", letterSpacing: "0.35em", opacity: 0.4, marginTop: "2px" }}>
              SALON
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: "none", border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff", width: "36px", height: "36px",
              cursor: "pointer", fontSize: "1rem",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>

        {/* Link-uri */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8rem", fontWeight: 700,
                color: "#fff", textDecoration: "none",
                padding: "0.9rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                transition: "color 0.2s",
                letterSpacing: "-0.01em",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social în meniu */}
        <div style={{
          marginTop: "auto", paddingTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex", gap: "1.5rem",
        }}>
          {["Facebook", "Instagram", "TikTok"].map(s => (
            <a key={s} href="#" style={{
              fontSize: "0.65rem", letterSpacing: "0.15em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
              textDecoration: "none",
            }}>{s}</a>
          ))}
        </div>

        {/* Mero CTA în meniu */}
        <a
          href="https://mero.ro/p/gentlemanmotru"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block", marginTop: "1.5rem",
            padding: "1rem", background: "#CCFF00",
            color: "#000", textAlign: "center",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700, fontSize: "0.75rem",
            letterSpacing: "0.2em", textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Programează-te pe Mero →
        </a>
      </div>

      {/* ── HERO SECTION ── */}
      <section style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "500px",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
        fontFamily: "'Barlow Condensed', sans-serif",
      }}>
        {/* Poza fundal */}
        <Image
          src="/images/hero-section.png"
          alt="Gentleman SALON"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        />

        {/* Overlay gradient */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: isMobile
            ? "linear-gradient(to bottom, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.2) 40%, rgba(10,10,10,0.85) 100%)"
            : "linear-gradient(to right, #0a0a0a 35%, rgba(10,10,10,0.5) 65%, transparent)",
        }} />

        {/* ── NAV DESKTOP ── */}
        {!isMobile && (
          <nav style={{
            position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "2rem 2.5rem",
          }}>
            <div style={{ display: "flex", gap: "2.5rem", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              <a href="tel:+40723924186" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>0723 924 186</a>
              <a href="#about" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Despre noi</a>
              <a href="/galerie" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Galerie</a>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.25em", color: "#CCFF00" }}>#Gentleman</div>
              <div style={{ fontSize: "0.58rem", letterSpacing: "0.4em", opacity: 0.5, marginTop: "3px" }}>SALON</div>
            </div>
            <div style={{ display: "flex", gap: "2.5rem", fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              <a href="https://mero.ro/p/gentlemanmotru?page=reviews&absp=company_details_deeplink" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Recenzii</a>
              <a href="/contact" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Contact</a>
              <Link href="/blog" style={{ color: "#CCFF00", textDecoration: "none", borderBottom: "1px solid #CCFF00" }}>Blog</Link>
            </div>
          </nav>
        )}

        {/* ── NAV MOBIL ── */}
        {isMobile && (
          <nav style={{
            position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "1.25rem 1.5rem",
          }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.2em", color: "#CCFF00" }}>
                #Gentleman
              </div>
              <div style={{ fontSize: "0.5rem", letterSpacing: "0.35em", opacity: 0.4, marginTop: "2px" }}>
                SALON
              </div>
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              style={{
                background: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff", cursor: "pointer",
                padding: "0.5rem 0.75rem",
                display: "flex", flexDirection: "column",
                gap: "5px", alignItems: "center",
              }}
            >
              <span style={{ display: "block", width: "20px", height: "1.5px", background: "#fff" }} />
              <span style={{ display: "block", width: "20px", height: "1.5px", background: "#fff" }} />
              <span style={{ display: "block", width: "12px", height: "1.5px", background: "#CCFF00", alignSelf: "flex-end" }} />
            </button>
          </nav>
        )}

        {/* Numere 01/03 — doar desktop */}
        {!isMobile && (
          <div style={{
            position: "absolute", left: "2.5rem", top: "50%", transform: "translateY(-50%)",
            zIndex: 5, display: "flex", flexDirection: "column", alignItems: "center",
          }}>
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", opacity: 0.4 }}>01</span>
            <div style={{ width: "1px", height: "120px", background: "rgba(255,255,255,0.15)", margin: "0.75rem 0" }} />
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", opacity: 0.4 }}>03</span>
          </div>
        )}

        {/* ── CONȚINUT PRINCIPAL ── */}
        <div style={{
          position: "absolute",
          bottom: isMobile ? "2.5rem" : "4rem",
          left: isMobile ? "1.5rem" : "5.5rem",
          right: isMobile ? "1.5rem" : "auto",
          zIndex: 5,
          maxWidth: isMobile ? "100%" : "400px",
        }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? "clamp(1.8rem, 6vw, 2.4rem)" : "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "1.5rem",
            color: "#fff",
          }}>
            Arta tunsului, redefinită la cele mai înalte standarde.
          </h1>

          <a href="#frizeri" style={{
            display: "inline-block",
            padding: "0.75rem 2rem",
            border: "1.5px solid #CCFF00",
            color: "#CCFF00",
            fontSize: "0.72rem", fontWeight: 600,
            letterSpacing: "0.15em", textTransform: "uppercase",
            textDecoration: "none",
          }}>
            Servicii ↓
          </a>
        </div>

        {/* Săgeata jos — doar desktop */}
        {!isMobile && (
          <div style={{
            position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)",
            zIndex: 5, fontSize: "1rem", opacity: 0.4,
          }}>↓</div>
        )}

        {/* Social media vertical — doar desktop */}
        {!isMobile && (
          <div style={{
            position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)",
            zIndex: 5, display: "flex", flexDirection: "column", gap: "1.5rem",
          }}>
            {["Facebook", "Instagram", "TikTok"].map(s => (
              <a key={s} href="#" style={{
                fontSize: "0.6rem", letterSpacing: "0.18em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
                textDecoration: "none", writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}>{s}</a>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
