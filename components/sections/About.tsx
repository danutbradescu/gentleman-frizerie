import { getAllBarbers } from "@/lib/sanity";

export default async function About() {
  const values = [
    {
      nr: "01",
      titlu: "Respect",
      desc: "Fiecare client e tratat cu atenție și considerație. Nu e o simplă programare — e o relație.",
    },
    {
      nr: "02",
      titlu: "Creativitate",
      desc: "Fiecare tunsoare e o oportunitate de expresie. Artiștii noștri au libertatea să creeze și să lase amprentă.",
    },
    {
      nr: "03",
      titlu: "Detaliu",
      desc: "Diferența dintre bine și excepțional stă în detalii. Noi nu le ignorăm pe niciunul.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "'Barlow Condensed', sans-serif",
        color: "#fff",
        overflow: "hidden",
      }}
    >

      {/* ── INTRO ── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
        }}
      >
        {/* left */}
        <div>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#CCFF00",
              opacity: 0.85,
              marginBottom: "1rem",
            }}
          >
            Despre noi
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Nu e doar o tunsoare,<br />
            <span style={{ color: "#CCFF00" }}>e o experiență.</span>
          </h2>

          <div
            style={{
              width: "50px",
              height: "2px",
              background: "#CCFF00",
            }}
          />
        </div>

        {/* right */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
            Gentleman s-a născut dintr-o idee simplă: Motru merită mai mult decât o frizerie obișnuită. Merită un loc în care oamenii se simt bineveniți și fiecare vizită contează.
          </p>

          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
            Am construit brandul pe respect, creativitate și atenție la detalii — pentru că experiența contează mai mult decât o simplă tunsoare.
          </p>
        </div>
      </div>

      {/* ── VALUES ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {values.map((v) => (
            <div
              key={v.nr}
              style={{
                padding: "2.5rem 1.5rem",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1rem",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.12)",
                }}
              >
                {v.nr}
              </span>

              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  marginBottom: "0.8rem",
                }}
              >
                {v.titlu}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}