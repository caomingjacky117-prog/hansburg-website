(function () {
  var header = document.querySelector("[data-header]");
  var button = document.getElementById("menu-button");
  var menu = document.getElementById("mobile-menu");

  function setOpen(open) {
    if (!menu || !button) return;
    menu.classList.toggle("hidden", !open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (button && menu) {
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
      if (header && !header.contains(event.target)) setOpen(false);
    });
  }

  var legacy = {
    "#about": "about.html",
    "#products": "products.html",
    "#strengths": "capabilities.html",
    "#contact": "contact.html",
    "#eco-bamboo": "products.html#eco-bamboo",
    "#mens-boxers": "products.html#mens",
    "#loungewear": "products.html#loungewear",
    "#womens": "products.html#leggings",
    "#kids": "products.html#kids",
    "#packaging": "products.html#packaging",
  };

  var path = window.location.pathname;
  var onHome = /\/(?:index\.html)?$/.test(path);
  if (onHome && legacy[window.location.hash]) {
    window.location.replace(legacy[window.location.hash]);
  }

  var programs = {
    "eco-bamboo": "Eco bamboo underwear",
    mens: "Men's boxers and invisible briefs",
    "womens-basics": "Women's briefs, wireless bras, and seamless basics",
    loungewear: "Loungewear and pajamas",
    leggings: "Leggings and bras",
    kids: "Kids underwear",
    packaging: "Hang tags and packaging",
  };

  var form = document.getElementById("contact-form");
  if (!form) return;

  var params = new URLSearchParams(window.location.search);
  var program = document.getElementById("program");
  var market = document.getElementById("market");
  var buyer = document.getElementById("buyer");
  var status = document.getElementById("form-status");

  function selectIfValid(select, value) {
    if (!select || !value) return false;
    var found = false;
    Array.prototype.forEach.call(select.options, function (option) {
      if (option.value === value) found = true;
    });
    if (found) select.value = value;
    return found;
  }

  var filledProgram = selectIfValid(program, params.get("program"));
  var filledMarket = selectIfValid(market, params.get("market"));
  var filledBuyer = selectIfValid(buyer, params.get("buyer"));
  var filled = filledProgram || filledMarket || filledBuyer;

  if (filled && status) {
    status.textContent =
      "Some fields were filled from the page you came from. Change anything that does not fit.";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);

    function val(name) {
      return String(data.get(name) || "").trim();
    }

    var name = val("name");
    var company = val("company");
    var email = val("email");
    var marketValue = val("market");
    var programValue = val("program");
    var buyerValue = val("buyer");
    var message = val("message");
    var programLabel = programs[programValue] || "General enquiry";
    var subject =
      "Hansburg enquiry — " + name + (company ? ", " + company : "");
    var body = [
      "Name: " + name,
      "Company: " + (company || "—"),
      "Email: " + email,
      "Market: " + (marketValue || "—"),
      "Program: " + programLabel,
      "Buyer: " + (buyerValue || "—"),
      "",
      message,
    ].join("\n");

    window.location.href =
      "mailto:carrie@hansburg.com.cn?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    if (status) {
      status.textContent =
        "Your email app should open with this message addressed to Carrie. If it does not, write directly to carrie@hansburg.com.cn.";
    }
  });
})();
