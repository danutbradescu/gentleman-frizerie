import Link from "next/link";
import Footer from "@/components/Footer";

export default function TermeniSiConditii() {
  const sections = [
    { titlu: "1. Operator", content: `Valeanu Darius Alexandru Ion PFA, Str. Margaretei, nr. 11, bl. T6, et. 1, ap. 7, Motru, Gorj. CUI: [completează]. Email: valeanuhairstyle@gmail.com.` },
    { titlu: "2. Servicii", content: `Gentleman Barbershop oferă servicii de frizerie și îngrijire personală (tuns, bărbierit, styling) în salon, precum și posibilitatea de programare online prin platforma Mero.` },
    { titlu: "3. Programări", content: `Programările se pot face prin platforma Mero (mero.ro/p/gentlemanmotru) sau direct la salon. Anularea unei programări trebuie efectuată cu minimum 2 ore înainte. Neprezentarea repetată poate duce la restricționarea accesului la programări online.` },
    { titlu: "4. Prețuri", content: `Prețurile afișate pe site sunt orientative și pot fi actualizate fără notificare prealabilă. Prețul final este cel comunicat în salon la momentul prestării serviciului.` },
    { titlu: "5. Utilizarea site-ului", content: `Conținutul acestui site (texte, imagini, design) aparține Valeanu Darius Alexandru Ion PFA. Este interzisă reproducerea parțială sau totală fără acordul scris al operatorului.` },
    { titlu: "6. Răspundere", content: `Operatorul nu este responsabil pentru eventuale erori tehnice ale platformelor terțe (Mero, Google Maps). Informațiile de pe site sunt furnizate "ca atare", fără garanții de completitudine.` },
    { titlu: "7. Soluționare litigii", content: `În caz de litigii, vei putea apela la platforma europeană de soluționare online a litigiilor: https://ec.europa.eu/consumers/odr. Jurisdicția competentă este cea din România.` },
    { titlu: "8. Legea aplicabilă", content: `Prezentele condiții sunt guvernate de legislația română. Orice dispută va fi soluționată de instanțele competente din România.` },
  ];

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 2.5rem", background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" style={{ fontSize: "0.72rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", textDecoration: "none", textTransform: "uppercase" }}>← Acasă</Link>
        <Link href="/" style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "0.25em", color: "#CCFF00", textDecoration: "none" }}>#Gentleman</Link>
        <div style={{ width: "80px" }} />
      </nav>

      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "10rem 2.5rem 6rem" }}>
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#CCFF00", opacity: 0.8, marginBottom: "1rem" }}>Legal</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "0.75rem" }}>Termeni și Condiții</h1>
        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginBottom: "4rem", letterSpacing: "0.05em" }}>Ultima actualizare: Iunie 2026</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {sections.map(s => (
            <div key={s.titlu} style={{ borderLeft: "2px solid rgba(204,255,0,0.2)", paddingLeft: "2rem" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>{s.titlu}</h2>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(255,255,255,0.55)" }}>{s.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
