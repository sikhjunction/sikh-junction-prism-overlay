// Sikh Junction PRISM overlay announcements

const announcements = [
  { text: "LIKE",      icon: "♥" },
  { text: "SHARE",     icon: "↗" },
  { text: "COMMENT", icon: "✦" }
];

const visibleFor = 2800;
const hiddenFor = 900;

const card = document.getElementById("announcementCard");
const text = document.getElementById("announcementText");
const icon = document.getElementById("announcementIcon");

let index = 0;

function showAnnouncement() {
  const item = announcements[index];

  text.textContent = item.text;
  icon.textContent = item.icon;

  card.classList.remove("hide", "show");
  void card.offsetWidth;
  card.classList.add("show");

  window.setTimeout(() => {
    card.classList.remove("show");
    card.classList.add("hide");

    window.setTimeout(() => {
      index = (index + 1) % announcements.length;
      showAnnouncement();
    }, hiddenFor);
  }, visibleFor);
}

const params = new URLSearchParams(window.location.search);
if (params.get("preview") === "1") {
  document.body.classList.add("preview");
}

window.addEventListener("load", () => {
  window.setTimeout(showAnnouncement, 900);
});
