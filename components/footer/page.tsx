import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      fontFamily: "'Barlow Condensed', sans-serif",
      color: "rgba(255,255,255,0.4)",
      background: "#0a0a0a",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "3rem 2.5rem 2rem",
        display: "flex", flexWrap: "wrap",
        justifyContent: "space-between", gap: "2rem",
      }}>

        {/* Identitate firmă */}
        <div style={{ maxWidth: "400px" }}>
          <div style={{ fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.2em", color: "#CCFF00", marginBottom: "0.75rem" }}>
            #Gentleman
          </div>
          <p style={{ fontSize: "0.72rem", lineHeight: 1.8, letterSpacing: "0.02em" }}>
            VALEANU DARIUS ALEXANDRU ION PFA<br />
            Sediu: Str. Margaretei, nr. 11, bl. T6, et. 1, ap. 7, Motru, Gorj<br />
            CUI: 45518704
          </p>
        </div>

        {/* Linkuri legale */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "0.25rem" }}>
            Legal
          </p>
          <Link href="/politica-confidentialitate" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Politica de Confidențialitate
          </Link>
          <Link href="/termeni-si-conditii" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            Termeni și Condiții
          </Link>
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
          >
            Soluționare Litigii (SOL/ANPC)
          </a>
        </div>

        {/* Contact rapid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "0.25rem" }}>
            Contact
          </p>
          <a href="tel:+40723924186" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            0723 924 186
          </a>
          <a href="mailto:valeanuhairstyle@gmail.com" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            valeanuhairstyle@gmail.com
          </a>
        </div>
      </div>

      {/* Bară jos */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "1.5rem 2.5rem",
        maxWidth: "1200px", margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        fontSize: "0.7rem", letterSpacing: "0.1em",
        color: "rgba(255,255,255,0.25)", textTransform: "uppercase",
        flexWrap: "wrap", gap: "1rem",
      }}>
        <span>© {new Date().getFullYear()} Gentleman Barbershop · Motru</span>
        <Link href="/" style={{ color: "#CCFF00", textDecoration: "none" }}>#Gentleman</Link>
      </div>
    </footer>
  );
}
