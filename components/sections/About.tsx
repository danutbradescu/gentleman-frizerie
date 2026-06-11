import { getAllBarbers, urlFor } from "@/lib/sanity";

export default async function About() {
  const barbers = await getAllBarbers();

  const values = [
    {
      nr: "01",
      titlu: "Respect",
      desc: "Fiecare client e tratat cu atenție și considerație. Nu e o simplă programare — e o relație.",
    },
    {
      nr: "02",
      titlu: "Creativitate",
      desc: "Fiecare tunsoare e o oportunitate de expresie. Artiștii noștri au libertatea să crească și să lase amprentă.",
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
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
        }}
      >
        {/* stânga */}
        <div>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#CCFF00",
              opacity: 0.8,
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
              lineHeight: 1.05,
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

        {/* dreapta */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
            Gentleman s-a născut dintr-o idee simplă: Motru merită mai mult decât o frizerie obișnuită. Merită un loc în care oamenii se simt bineveniți, artiștii au libertatea să crească, iar fiecare vizită lasă o amintire.
          </p>

          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
            Am construit Gentleman pe respect, creativitate și atenție la detalii — pentru că cele mai bune rezultate apar când profesionalismul și atmosfera se întâlnesc în același loc.
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
            maxWidth: "1200px",
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
                  color: "rgba(255,255,255,0.1)",
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

      {/* ── BARBERS ── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem",
            marginBottom: "2rem",
          }}
        >
          Echipa
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          {barbers.map((barber: any) => (
            <div
              key={barber._id}
              style={{
                background: "#111",
                border: "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3/4",
                }}
              >
                {barber.photo && (
                  <img
                    src={urlFor(barber.photo).width(600).url()}
                    alt={barber.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>

              <div style={{ padding: "1rem" }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    marginBottom: "0.5rem",
                  }}
                >
                  {barber.name}
                </h3>

                {barber.bio && (
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.6,
                    }}
                  >
                    {barber.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}