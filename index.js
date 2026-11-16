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

const tableBody = document.getElementById("tableBody");
const buttons = document.querySelectorAll("#filterButtons button");

function renderTable(filter) {
  tableBody.innerHTML = "";
  const filtered = osData.filter((os) => filter === "all" || os.category === filter);

  filtered.forEach((os) => {
    const row = document.createElement("tr");
    if (os.category === "recommended") row.classList.add("highlight");

    row.innerHTML = `
      <td><strong>${os.name}</strong></td>
      <td><span class="badge ${os.speed.badge}">${os.speed.label}</span><span class="detail">${os.speed.text}</span></td>
      <td><span class="badge ${os.support.badge}">${os.support.label}</span><span class="detail">${os.support.text}</span></td>
      <td><span class="badge ${os.security.badge}">${os.security.label}</span><span class="detail">${os.security.text}</span></td>
      <td><span class="badge ${os.visuals.badge}">${os.visuals.label}</span><span class="detail">${os.visuals.text}</span></td>
    `;
    tableBody.appendChild(row);
  });
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderTable(btn.dataset.filter);
  });
});

renderTable("all");
