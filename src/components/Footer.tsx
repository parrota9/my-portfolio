export default function Footer() {
  return (
    <footer
      style={{ padding: "20px 28px", borderTop: "1px solid var(--line)" }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "24px",
          flexWrap: "wrap",
          fontFamily: "var(--mono)",
          fontSize: "12px",
          letterSpacing: "0.03em",
          color: "var(--muted)",
        }}
      >
        <div>Zaky Amrul Hakim © 2026</div>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="mailto:zaky.hakim@outlook.com" className="navlk">
            Email
          </a>
          <a
            href="https://github.com/parrota9"
            target="_blank"
            rel="noopener noreferrer"
            className="navlk"
          >
            GitHub
          </a>
          <a
            href="https://my.linkedin.com/in/zakyhakim19"
            target="_blank"
            rel="noopener noreferrer"
            className="navlk"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
