import Link from "next/link";
import Footer from "@/components/Footer";

export default function PoliticaConfidentialitate() {
  const sections = [
    { titlu: "1. Cine suntem", content: `Valeanu Darius Alexandru Ion PFA, cu sediul în Str. Margaretei, nr. 11, bl. T6, et. 1, ap. 7, Motru, Gorj. CUI: [completează]. Contact: valeanuhairstyle@gmail.com, 0723 924 186.` },
    { titlu: "2. Ce date colectăm", content: `Prin formularul de contact: nume, adresă de email, număr de telefon (opțional) și mesajul trimis. Nu colectăm date fără consimțământul tău explicit.` },
    { titlu: "3. De ce colectăm aceste date", content: `Exclusiv pentru a răspunde la mesajele trimise prin formularul de contact. Nu folosim datele tale în scopuri de marketing fără acordul tău.` },
    { titlu: "4. Cât timp păstrăm datele", content: `Datele din formularul de contact sunt păstrate maxim 12 luni, după care sunt șterse. Poți solicita ștergerea oricând scriindu-ne la valeanuhairstyle@gmail.com.` },
    { titlu: "5. Cu cine împărtășim datele", content: `Nu vindem și nu transferăm datele tale către terți. Folosim serviciul Resend (resend.com) exclusiv pentru trimiterea emailurilor, cu care prelucrăm date conform GDPR.` },
    { titlu: "6. Drepturile tale", content: `Ai dreptul de acces, rectificare, ștergere, portabilitate și opoziție față de prelucrarea datelor. Poți exercita aceste drepturi scriind la valeanuhairstyle@gmail.com. Ai și dreptul de a depune o plângere la ANSPDCP (www.dataprotection.ro).` },
    { titlu: "7. Cookies", content: `Site-ul nostru nu folosește cookies de tracking sau publicitate. Folosim exclusiv cookies tehnice necesare funcționării site-ului.` },
    { titlu: "8. Modificări", content: `Ne rezervăm dreptul de a actualiza această politică. Versiunea actualizată va fi publicată pe această pagină cu data modificării.` },
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
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "0.75rem" }}>Politica de Confidențialitate</h1>
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
