export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0a0a0f",
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(128, 0, 255, 0.08) 0%, rgba(0, 0, 0, 0) 80%)",
        fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
        padding: "2rem",
        margin: 0,
      }}
    >
      <div
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(15, 15, 20, 0.7)",
          borderRadius: "2rem",
          padding: "3rem 4rem",
          boxShadow: "0 25px 45px -12px rgba(128, 0, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(128, 0, 255, 0.3)",
          maxWidth: "700px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #ffffff 0%, #c084fc 40%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
            textShadow: "0 2px 10px rgba(168, 85, 247, 0.2)",
          }}
        >
          Cloud Computing Lab 8 – Vercel Deployment
        </h1>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(128, 0, 255, 0.12)",
              padding: "1rem 1.5rem",
              borderRadius: "1rem",
              borderLeft: "4px solid #a855f7",
              transition: "transform 0.2s ease",
            }}
          >
            <p
              style={{
                fontSize: "1.3rem",
                fontWeight: "500",
                color: "#e9e9ff",
                margin: 0,
              }}
            >
              <span style={{ color: "#c084fc", fontWeight: "600" }}>Name:</span>{" "}
              <span style={{ background: "linear-gradient(120deg, #f0f0ff, #d9d9ff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Muhammad Awais Ishaq
              </span>
            </p>
          </div>

          <div
            style={{
              backgroundColor: "rgba(128, 0, 255, 0.08)",
              padding: "1rem 1.5rem",
              borderRadius: "1rem",
              borderLeft: "4px solid #7e22ce",
              transition: "transform 0.2s ease",
            }}
          >
            <p
              style={{
                fontSize: "1.3rem",
                fontWeight: "500",
                color: "#e9e9ff",
                margin: 0,
              }}
            >
              <span style={{ color: "#c084fc", fontWeight: "600" }}>Roll No:</span>{" "}
              <span style={{ background: "linear-gradient(120deg, #f0f0ff, #d9d9ff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                01-131232-052
              </span>
            </p>
          </div>
        </div>
< span style={{ background: "linear-gradient(120deg, #f0f0ff, #d9d9ff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
<h1>
        {process.env.NEXT_PUBLIC_APP_NAME}
      </h1>
      </span>
        <div
          style={{
            marginTop: "2.5rem",
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg, #a855f7, #c084fc, #a855f7)",
            borderRadius: "4px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        
        <p
          style={{
            marginTop: "2rem",
            fontSize: "0.85rem",
            color: "#6b6b8f",
            letterSpacing: "0.5px",
          }}
        >
          deployed with <span style={{ color: "#c084fc" }}>▲ Vercel</span>
        </p>
      </div>
    </main>
  );
}