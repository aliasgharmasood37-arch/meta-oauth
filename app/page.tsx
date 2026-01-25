export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#eef2f7",
      fontFamily: "Arial"
    }}>
      <div style={{
        background: "#ffffff",
        padding: 40,
        borderRadius: 12,
        width: 420,
        textAlign: "center",
        boxShadow: "0 12px 30px rgba(0,0,0,0.12)"
      }}>
        <h2 style={{ color: "#111827", marginBottom: 10 }}>
          Connect Your Instagram
        </h2>

        <p style={{ color: "#374151", marginBottom: 28 }}>
          Authorize your Instagram Business account to enable automated replies.
        </p>

        <a href="/auth/connect" style={{ textDecoration: "none" }}>
          <button style={{
            padding: "12px 24px",
            fontSize: 16,
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            background: "#2563eb",
            color: "#ffffff",
            fontWeight: 600
          }}>
            🔗 Connect with Facebook
          </button>
        </a>
      </div>
    </div>
  );
}
