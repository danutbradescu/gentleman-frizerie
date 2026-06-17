"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/footer/page";

export default function ContactPage() {
  const [form, setForm] = useState({ nume: "", email: "", telefon: "", mesaj: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.nume || !form.email || !form.mesaj) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ nume: "", email: "", telefon: "", mesaj: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "1rem",
    letterSpacing: "0.05em",
    padding: "1rem 1.25rem",
    outline: "none",
    transition: "border-color 0.2s",
    borderRadius: "0",
  };

  return (
    <div style={{
      background: "#0a0a0a", minHeight: "100vh",
      fontFamily: "'Barlow Condensed', sans-serif", color: "#fff",
    }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: isMobile ? "1.25rem 1.5rem" : "1.5rem 2.5rem",
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <Link href="/" style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", textDecoration: "none", textTransform: "uppercase" }}>← Acasă</Link>
        <Link href="/" style={{ fontSize: isMobile ? "0.85rem" : "1rem", fontWeight: 700, letterSpacing: "0.25em", color: "#CCFF00", textDecoration: "none" }}>#Gentleman</Link>
        <div style={{ width: isMobile ? "60px" : "80px" }} />
      </nav>

      {/* CONȚINUT */}
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        padding: isMobile ? "8rem 1.5rem 4rem" : "10rem 2.5rem 6rem",
      }}>

        {/* Header */}
        <div style={{ marginBottom: isMobile ? "3rem" : "5rem" }}>
          <p style={{
            fontSize: "0.65rem", letterSpacing: "0.35em",
            textTransform: "uppercase", color: "#CCFF00",
            opacity: 0.8, marginBottom: "1rem",
          }}>
            Ia legătura cu noi
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? "clamp(2rem, 10vw, 3rem)" : "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700, lineHeight: 1, marginBottom: "1.5rem",
          }}>
            Hai să vorbim.
          </h1>
          <div style={{ width: "40px", height: "2px", background: "#CCFF00" }} />
        </div>

        {/* Grid — stivuit pe mobil */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "3rem" : "6rem",
          alignItems: "start",
        }}>

          {/* Stânga — Info */}
          <div>
            <p style={{
              fontSize: "1rem", lineHeight: 1.8,
              color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem",
            }}>
              Ai o întrebare sau vrei să afli mai multe despre serviciile noastre? Scrie-ne și îți răspundem în cel mai scurt timp.
            </p>

            {/* Date contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {[
                { label: "Telefon", value: "0723924186", href: "tel:+40723924186" },
                { label: "Email", value: "valeanuhairstyle@gmail.com", href: "mailto:valeanuhairstyle@gmail.com" },
                { label: "Adresă", value: "Strada Marului 1, 215200 Motru, Gorj", href: undefined },
              ].map(item => (
                <div key={item.label}>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.25rem" }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: "1.05rem", color: "#fff", textDecoration: "none" }}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: "1.05rem", color: "#fff" }}>{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Box Mero */}
            <div style={{
              padding: "1.5rem",
              border: "1px solid rgba(204,255,0,0.2)",
              background: "rgba(204,255,0,0.03)",
            }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#CCFF00", opacity: 0.8, marginBottom: "0.5rem" }}>
                Vrei să te programezi?
              </p>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", marginBottom: "1rem", lineHeight: 1.6 }}>
                Folosește Mero pentru o programare rapidă.
              </p>
              <a
                href="https://mero.ro/p/gentlemanmotru?utm_source=app_profile_share_button"
                target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#CCFF00", textDecoration: "none", borderBottom: "1px solid #CCFF00", paddingBottom: "2px" }}
              >
                Programează-te pe Mero →
              </a>
            </div>
          </div>

          {/* Dreapta — Formular */}
          <div style={{
            background: "#0d0d0d",
            padding: isMobile ? "2rem 1.5rem" : "3rem",
            border: "1px solid rgba(255,255,255,0.06)",
          }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem", color: "#CCFF00" }}>✓</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", marginBottom: "1rem" }}>
                  Mesaj trimis!
                </h2>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                  Îți mulțumim că ne-ai contactat.<br />Îți răspundem în cel mai scurt timp.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{ background: "none", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.5)", padding: "0.75rem 2rem", cursor: "pointer", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Trimite-ne un mesaj
                </h2>

                {/* Nume + Email pe același rând pe desktop */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: "1rem",
                }}>
                  <div>
                    <label style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>
                      Nume *
                    </label>
                    <input
                      name="nume" value={form.nume} onChange={handleChange}
                      placeholder="Numele tău"
                      style={inputStyle}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#CCFF00"}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>
                      Email *
                    </label>
                    <input
                      name="email" value={form.email} onChange={handleChange}
                      type="email" placeholder="email@exemplu.ro"
                      style={inputStyle}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#CCFF00"}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"}
                    />
                  </div>
                </div>

                {/* Telefon */}
                <div>
                  <label style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>
                    Telefon <span style={{ opacity: 0.4 }}>(opțional)</span>
                  </label>
                  <input
                    name="telefon" value={form.telefon} onChange={handleChange}
                    type="tel" placeholder="07XX XXX XXX"
                    style={inputStyle}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#CCFF00"}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>

                {/* Mesaj */}
                <div>
                  <label style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>
                    Mesaj *
                  </label>
                  <textarea
                    name="mesaj" value={form.mesaj} onChange={handleChange}
                    placeholder="Scrie mesajul tău aici..."
                    rows={5}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = "#CCFF00"}
                    onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>

                {status === "error" && (
                  <p style={{ color: "#ff4444", fontSize: "0.85rem" }}>
                    A apărut o eroare. Încearcă din nou sau scrie-ne direct pe email.
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === "loading" || !form.nume || !form.email || !form.mesaj}
                  style={{
                    marginTop: "0.5rem",
                    padding: "1.1rem",
                    background: status === "loading" ? "rgba(204,255,0,0.5)" : "#CCFF00",
                    color: "#000",
                    border: "none",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    cursor: status === "loading" || !form.nume || !form.email || !form.mesaj ? "not-allowed" : "pointer",
                    opacity: (!form.nume || !form.email || !form.mesaj) ? 0.5 : 1,
                    transition: "opacity 0.2s",
                    width: "100%",
                  }}
                >
                  {status === "loading" ? "Se trimite..." : "Trimite mesajul →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}