// Off-canvas menu

document.getElementById("open-menu").addEventListener("click", function () {
  document.getElementById("off-canvas-menu").style.top = "0";
  document.getElementById("menu-overlay").style.display = "block";
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("off-canvas-menu").style.top = "-325px";
  document.getElementById("menu-overlay").style.display = "none";
});

document.getElementById("menu-overlay").addEventListener("click", function () {
  document.getElementById("off-canvas-menu").style.top = "-325px";
  document.getElementById("menu-overlay").style.display = "none";
});

// Language switcher
document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.split("/");

  // If the URL doesn't have a language code, redirect to the default language
  if (!path[2] || path[2].length !== 2) {
    window.location.pathname = `/en${window.location.pathname}`;
  }
});

function switchLanguage(lang) {
  const path = window.location.pathname.split("/");
  path[2] = lang;
  window.location.pathname = path.join("/");
}

// Update all internal links to include the current language
document.addEventListener("click", function (event) {
  if (
    event.target.tagName === "A" &&
    event.target.getAttribute("href").startsWith("/")
  ) {
    event.preventDefault(); // Prevent the default link behavior
    const path = window.location.pathname.split("/");
    const currentLang = path[1];
    const href = event.target.getAttribute("href");

    // If the link is relative, add the current language to the href
    if (href.split("/").length === 2) {
      event.target.setAttribute("href", `/${currentLang}${href}`);
    }

    // Navigate to the updated link
    window.location.href = event.target.getAttribute("href");
  }
});
