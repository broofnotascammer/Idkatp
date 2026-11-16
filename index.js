import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const osData = [
  {
    name: "Linux Mint 22.3 (Xfce)",
    category: "recommended",
    speed: { badge: "good", label: "Very Fast", text: "~850 MB idle RAM. Minimal HDD thrashing." },
    support: { badge: "good", label: "Active (2029)", text: "Full built-in Wi-Fi, audio, and touchpad drivers." },
    security: { badge: "good", label: "High", text: "Official kernel & browser patches until April 2029." },
    visuals: { badge: "good", label: "Clean & Crisp", text: "Classic taskbar layout; lightweight and customizable." }
  },
  {
    name: "Tiny10 (23H2)",
    category: "windows",
    speed: { badge: "good", label: "Fast", text: "~0.9–1.2 GB idle RAM. Fastest Windows option on HDD." },
    support: { badge: "bad", label: "Unsupported", text: "Unofficial community build; full Win10 driver compatibility." },
    security: { badge: "bad", label: "Low", text: "No ongoing security patches; native services stripped." },
    visuals: { badge: "warn", label: "Basic", text: "Standard Windows 10 UI with visual effects disabled." }
  },
  {
    name: "Official Windows 10 (22H2)",
    category: "windows",
    speed: { badge: "warn", label: "Moderate / Slow", text: "~1.5–1.8 GB idle RAM. Background indexing spikes HDD." },
    support: { badge: "warn", label: "Ended (Oct 2025)", text: "Official Lenovo drivers available, but OS is EOL." },
    security: { badge: "bad", label: "Low", text: "No longer receives free Microsoft security updates." },
    visuals: { badge: "good", label: "Familiar", text: "Full Windows 10 interface with smooth animations." }
  },
  {
    name: "Tiny11",
    category: "windows",
    speed: { badge: "bad", label: "Slowest", text: "~1.4–1.9 GB idle RAM. Heavy Win11 disk I/O causes lag." },
    support: { badge: "bad", label: "Unsupported", text: "Unofficial build; needs generic or compatibility drivers." },
    security: { badge: "warn", label: "Low / Moderate", text: "Modified system files and paused updates." },
    visuals: { badge: "good", label: "Modern", text: "Windows 11 centered taskbar and rounded corners." }
  }
];

function App() {
  const [filter, setFilter] = useState("all");

  const filteredData = osData.filter((os) => {
    if (filter === "all") return true;
    return os.category === filter;
  });

  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        body { background-color: #0f172a; color: #f8fafc; }
        .badge { display: inline-block; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 700; margin-bottom: 0.4rem; text-transform: uppercase; }
        .badge.good { background: rgba(34, 197, 94, 0.2); color: #22c55e; }
        .badge.warn { background: rgba(234, 179, 8, 0.2); color: #eab308; }
        .badge.bad  { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
      `}</style>

      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Lenovo G50 OS Comparison</h1>
          <p style={styles.subtitle}>Tailored for 4GB RAM + Mechanical Hard Drive (HDD)</p>
        </header>

        <div style={styles.controls}>
          {[
            { id: "all", label: "Show All OS" },
            { id: "recommended", label: "Best Overall (Mint)" },
            { id: "windows", label: "Windows Options Only" }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              style={{
                ...styles.button,
                ...(filter === btn.id ? styles.activeButton : {})
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Operating System</th>
                <th style={styles.th}>Speed &amp; RAM</th>
                <th style={styles.th}>Support</th>
                <th style={styles.th}>Security</th>
                <th style={styles.th}>Visuals</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((os) => (
                <tr
                  key={os.name}
                  style={os.category === "recommended" ? styles.highlightRow : {}}
                >
                  <td style={styles.td}>
                    <strong>{os.name}</strong>
                  </td>
                  <td style={styles.td}>
                    <span className={`badge ${os.speed.badge}`}>{os.speed.label}</span>
                    <span style={styles.detail}>{os.speed.text}</span>
                  </td>
                  <td style={styles.td}>
                    <span className={`badge ${os.support.badge}`}>{os.support.label}</span>
                    <span style={styles.detail}>{os.support.text}</span>
                  </td>
                  <td style={styles.td}>
                    <span className={`badge ${os.security.badge}`}>{os.security.label}</span>
                    <span style={styles.detail}>{os.security.text}</span>
                  </td>
                  <td style={styles.td}>
                    <span className={`badge ${os.visuals.badge}`}>{os.visuals.label}</span>
                    <span style={styles.detail}>{os.visuals.text}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: "2rem 1rem", minHeight: "100vh", backgroundColor: "#0f172a", color: "#f8fafc" },
  container: { maxWidth: "1100px", margin: "0 auto" },
  header: { textAlign: "center", marginBottom: "2rem" },
  title: { fontSize: "1.8rem", marginBottom: "0.5rem", color: "#38bdf8" },
  subtitle: { color: "#94a3b8", fontSize: "0.95rem" },
  controls: { display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginBottom: "1.5rem" },
  button: {
    background: "#1e293b",
    color: "#f8fafc",
    border: "1px solid #334155",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "0.85rem"
  },
  activeButton: {
    background: "#38bdf8",
    color: "#0f172a",
    fontWeight: "600",
    borderColor: "#38bdf8"
  },
  tableWrapper: {
    overflowX: "auto",
    background: "#1e293b",
    borderRadius: "10px",
    border: "1px solid #334155",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
  },
  table: { width: "100%", borderCollapse: "collapse", minWidth: "750px" },
  th: {
    padding: "1rem",
    textAlign: "left",
    borderBottom: "1px solid #334155",
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    color: "#38bdf8",
    fontWeight: "600",
    fontSize: "0.95rem"
  },
  td: { padding: "1rem", textAlign: "left", borderBottom: "1px solid #334155", verticalAlign: "top" },
  highlightRow: { backgroundColor: "rgba(56, 189, 248, 0.08)" },
  detail: { display: "block", fontSize: "0.88rem", color: "#94a3b8" }
};

let container = document.getElementById("root");
if (!container) {
  container = document.createElement("div");
  container.id = "root";
  document.body.appendChild(container);
}

createRoot(container).render(<App />);
  
