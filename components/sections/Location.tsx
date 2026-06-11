export default function Location() {
  const ADDRESS = "Strada Mărului 1, 215200 Motru";
  const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.974260451842!2d22.9664561!3d44.801713199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47521521adf28f9d%3A0x6dfceb913e89a1f0!2sGentleman!5e0!3m2!1sen!2sro!4v1781090410198!5m2!1sen!2sro";
  const MERO_URL = "https://mero.ro/p/gentlemanmotru?utm_source=app_profile_share_button";

  return (
    <section style={{ background: "#111", color: "#fff", padding: "6rem 2rem", fontFamily: "'Barlow Condensed', sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "2rem" }}>
            Ne găsești<br /><span style={{ color: "#CCFF00" }}>oricând.</span>
          </h2>
          <p style={{ fontSize: "1.25rem", marginBottom: "0.5rem", opacity: 0.7 }}>Adresă</p>
          <p style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "2rem" }}>{ADDRESS}</p>
          <p style={{ fontSize: "1.25rem", marginBottom: "0.5rem", opacity: 0.7 }}>Program</p>
          <p style={{ fontSize: "1.25rem", lineHeight: 1.8 }}>
            Luni – Vineri: 09:00 – 20:00<br />
            Sâmbătă: 09:00 – 18:00<br />
            <span style={{ color: "#CCFF00" }}>Duminică: Închis</span>
          </p>
          <a href={MERO_URL} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", marginTop: "2rem", padding: "1rem 2.5rem",
            background: "#CCFF00", color: "#000", fontWeight: 700, fontSize: "0.85rem",
            letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
          }}>
            Programează-te pe Mero →
          </a>
          <p style={{ marginTop: "1rem", fontSize: "0.85rem", opacity: 0.4 }}>
            Sau vino direct — nu e nevoie de programare.
          </p>
        </div>
        <div>
          <iframe src={MAPS_EMBED_URL} width="100%" height="400"
            style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
            allowFullScreen loading="lazy" title="Locatie Gentleman SALON" />
        </div>
      </div>
    </section>
  );
}
