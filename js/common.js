document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".hamburger-label");
  const navigation = document.querySelector(".header-nav");

  if (header && menuButton && navigation) {
    const closeMenu = () => {
      header.classList.remove("nav-open");
      menuButton.setAttribute("aria-expanded", "false");
    };

    menuButton.addEventListener("click", () => {
      const willOpen = !header.classList.contains("nav-open");
      header.classList.toggle("nav-open", willOpen);
      menuButton.setAttribute("aria-expanded", String(willOpen));
    });

    navigation.addEventListener("click", event => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("click", event => {
      if (!header.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
      }
    });
  }

  const currentFile = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".header-nav a").forEach(link => {
    const linkFile = new URL(link.href, location.href).pathname.split("/").pop() || "index.html";
    if (linkFile === currentFile) link.setAttribute("aria-current", "page");
  });
});
