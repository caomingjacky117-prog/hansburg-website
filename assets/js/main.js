(function () {
  const header = document.querySelector("[data-header]");
  const button = document.getElementById("menu-button");
  const menu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll("[data-nav]");

  function setOpen(open) {
    menu.classList.toggle("hidden", !open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  button.addEventListener("click", function () {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });

  document.addEventListener("click", function (event) {
    if (!header.contains(event.target)) setOpen(false);
  });

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject =
      "Hansburg enquiry — " + name + (company ? ", " + company : "");
    const body = [
      "Name: " + name,
      "Company: " + (company || "—"),
      "Email: " + email,
      "",
      message,
    ].join("\n");
    window.location.href =
      "mailto:carrie@hansburg.com.cn" +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    status.textContent =
      "Your email app should open with this message addressed to Carrie. If it does not, write directly to carrie@hansburg.com.cn.";
  });

  const sections = Array.prototype.map
    .call(document.querySelectorAll("[data-section]"), function (section) {
      return section;
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach(function (link) {
            const current = link.getAttribute("href") === "#" + id;
            if (current) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
