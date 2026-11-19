(function () {
  const ROWS = [1, 2, 3];               // bentuk piramid: 1 - 2 - 3
  const pyramid = document.getElementById("pyramid");
  const modal = document.getElementById("modal");
  let current = 0;

  document.getElementById("judul").textContent = TEAM.judul;
  document.getElementById("subjudul").textContent = TEAM.subjudul;
  document.title = TEAM.judul + " — Portfolio";

  /* Foto cadangan (inisial) bila file foto tidak ada */
  function fallback(nama, i) {
    const hue = [8, 28, 200, 160, 270, 340][i % 6];
    const ini = nama.split(" ").map(s => s[0]).slice(0, 2).join("");
    const svg =
      `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
         <rect width='400' height='400' fill='hsl(${hue},45%,28%)'/>
         <text x='50%' y='54%' fill='white' font-family='sans-serif' font-size='150'
               font-weight='700' text-anchor='middle' dominant-baseline='middle'>${ini}</text>
       </svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }
  function setImg(img, m, i) {
    img.onerror = () => { img.onerror = null; img.src = fallback(m.nama, i); };
    img.src = m.foto;
    img.alt = "Foto " + m.nama;
  }

  /* Bangun piramid */
  let idx = 0;
  const total = MEMBERS.length;
  ROWS.forEach((count, r) => {
    const row = document.createElement("div");
    row.className = "row";
    for (let c = 0; c < count && idx < total; c++, idx++) {
      const i = idx, m = MEMBERS[i];
      const cell = document.createElement("button");
      cell.className = "cell";
      cell.type = "button";
      cell.setAttribute("aria-label", `${m.nama}, ${m.peran}`);
      // animasi masuk: dari baris bawah naik ke puncak
      const order = (ROWS.length - 1 - r) * 3 + c;
      cell.style.setProperty("--d", order * 140 + "ms");

      const img = document.createElement("img");
      setImg(img, m, i);
      const cap = document.createElement("span");
      cap.className = "cell__cap";
      cap.innerHTML = `<b>${m.nama}</b><small>${m.peran}</small>`;
      cell.append(img, cap);
      cell.addEventListener("click", () => openModal(i));
      row.appendChild(cell);
    }
    pyramid.appendChild(row);
  });

  /* Efek miring mengikuti kursor (hover) */
  pyramid.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("pointermove", e => {
      const b = cell.getBoundingClientRect();
      const x = (e.clientX - b.left) / b.width - 0.5;
      const y = (e.clientY - b.top) / b.height - 0.5;
      cell.style.setProperty("--rx", (-y * 10).toFixed(1) + "deg");
      cell.style.setProperty("--ry", (x * 10).toFixed(1) + "deg");
    });
    cell.addEventListener("pointerleave", () => {
      cell.style.setProperty("--rx", "0deg");
      cell.style.setProperty("--ry", "0deg");
    });
  });

  /* Modal */
  function fill(i) {
    const m = MEMBERS[i];
    setImg(document.getElementById("m-foto"), m, i);
    document.getElementById("m-nama").textContent = m.nama;
    document.getElementById("m-peran").textContent = m.peran;
    document.getElementById("m-deskripsi").textContent = m.deskripsi;
    document.getElementById("m-kontak").textContent = m.kontak;
    document.getElementById("m-skill").innerHTML =
      m.skill.map(s => `<li>${s}</li>`).join("");
    const card = modal.querySelector(".modal__card");
    card.classList.remove("swap"); void card.offsetWidth; card.classList.add("swap");
  }
  function openModal(i) {
    current = i; fill(i);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.getElementById("next").focus();
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
  function go(step) {
    current = (current + step + MEMBERS.length) % MEMBERS.length;
    fill(current);
  }

  modal.addEventListener("click", e => { if (e.target.hasAttribute("data-close")) closeModal(); });
  document.getElementById("next").addEventListener("click", () => go(1));
  document.getElementById("prev").addEventListener("click", () => go(-1));
  document.addEventListener("keydown", e => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  });
})();
