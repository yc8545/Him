const items = document.querySelectorAll(".days-list li");

items.forEach(item => {
  const target = new Date(item.dataset.date).getTime();
  const timer = item.querySelector(".timer");

  setInterval(() => {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      timer.innerText = "Unlocked 💖";
      item.classList.add("unlocked");
      document.querySelector(".photos").classList.remove("locked");
document.querySelector(".photos").classList.add("unlocked");

      item.onclick = () => {
        window.location.href = item.dataset.link;
      };
    } else {
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      timer.innerText = `${d}d ${h}h ${m}m ${s}s`;
    }
  }, 1000);
});
