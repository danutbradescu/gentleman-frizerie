
import { getAllBarbers, urlFor } from "@/lib/sanity";

export default async function About() {
  const barbers = await getAllBarbers();

  const values = [
    { nr: "01", titlu: "Respect", desc: "Fiecare client e tratat cu atenție și considerație. Nu e o simplă programare — e o relație." },
    { nr: "02", titlu: "Creativitate", desc: "Fiecare tunsoare e o oportunitate de expresie. Artiștii noștri au libertatea să crească și să lase amprentă." },
    { nr: "03", titlu: "Detaliu", desc: "Diferența dintre bine și excepțional stă în detalii. Noi nu le ignorăm pe niciunul." },
  ];

  return (
    <section id="about" style={{
      background: "#0a0a0a",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      fontFamily: "'Barlow Condensed', sans-serif",
      color: "#fff",
      overflow: "hidden",
    }}>

      {/* ── BLOC 1: Motto + Intro ── */}
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "8rem 2.5rem 6rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center",
      }}>
        {/* Stânga */}
        <div>
          <p style={{
            fontSize: "0.65rem", letterSpacing: "0.35em",
            textTransform: "uppercase", color: "#CCFF00",
            opacity: 0.8, marginBottom: "1.5rem",
          }}>
            Despre noi
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700, lineHeight: 1.05,
            marginBottom: "2rem",
          }}>
            Nu e doar o tunsoare,<br />
            <span style={{ color: "#CCFF00" }}>e o experiență.</span>
          </h2>
          <div style={{ width: "40px", height: "2px", background: "#CCFF00", marginBottom: "2.5rem" }} />
        </div>

        {/* Dreapta */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "rgba(255,255,255,0.6)" }}>
            Gentleman s-a născut dintr-o idee simplă: Motru merită mai mult decât o frizerie obișnuită. Merită un loc în care oamenii se simt bineveniți, artiștii au libertatea să crească, iar fiecare vizită lasă o amintire.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "rgba(255,255,255,0.6)" }}>
            Am construit Gentleman pe respect, creativitate și atenție la detalii — pentru că cele mai bune rezultate apar când profesionalismul și atmosfera se întâlnesc în același loc.
          </p>
        </div>
      </div>

      {/* ── BLOC 2: Valori ── */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}>
          {values.map((v, i) => (
            <div key={v.nr} style={{
              padding: "3.5rem 2.5rem",
              borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
              position: "relative",
            }}>
              <span style={{
                position: "absolute", top: "2rem", right: "1.5rem",
                fontSize: "0.6rem", letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.1)",
              }}>{v.nr}</span>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.6rem", fontWeight: 700,
                marginBottom: "1rem", color: "#fff",
              }}>{v.titlu}</h3>
              <p style={{
                fontSize: "0.9rem", lineHeight: 1.75,
                color: "rgba(255,255,255,0.45)",
              }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}