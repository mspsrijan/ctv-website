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

// Basepath for Github subdirectory
const basePath = "/ctv-website";

// Basepath for localhost
// const basePath = "";

document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.replace(basePath, "").split("/");

  // If the URL doesn't have a language code, redirect to the default language
  if (!path[1] || path[1].length !== 2) {
    window.location.pathname = `${basePath}/en${window.location.pathname.replace(
      basePath,
      ""
    )}`;
  }
});

function switchLanguage(lang) {
  const path = window.location.pathname.replace(basePath, "").split("/");
  path[1] = lang;
  window.location.pathname = `${basePath}${path.join("/")}`;
}

// Update all internal links to include the current language
document.addEventListener("click", function (event) {
  if (
    event.target.tagName === "A" &&
    event.target.getAttribute("href").startsWith("/")
  ) {
    event.preventDefault(); // Prevent the default link behavior
    const path = window.location.pathname.replace(basePath, "").split("/");
    const currentLang = path[1];
    const href = event.target.getAttribute("href");

    // If the link is relative, add the current language to the href
    if (href.split("/").length === 2) {
      event.target.setAttribute("href", `${basePath}/${currentLang}${href}`);
    }

    // Navigate to the updated link
    window.location.href = event.target.getAttribute("href");
  }
});

// Highlight the active link in the navigation menu
function highlightActiveLink() {
  const path = window.location.pathname.replace(basePath, "").split("/");
  const currentLang = path[1] || "en"; // Default to 'en' if no language code is found

  const links = document.querySelectorAll(".language-selector a");

  links.forEach((link) => {
    let lang;

    // Check if the link uses the onclick function for language switching
    if (link.hasAttribute("onclick")) {
      const onclickValue = link.getAttribute("onclick");
      lang = onclickValue.match(/switchLanguage\('(\w+)'\)/)?.[1];
    } else {
      // Extract the language code from the href attribute
      lang = link.getAttribute("href").slice(-2);
    }

    console.log("lang:", lang); // Debug: Check the extracted language code

    // Add or remove the active class based on the current language
    if (lang === currentLang) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Highlight the active link in the navigation menu
  const currentPage = path[2] || "index.html"; // Assuming index.html is the default home page
  const menuLinks = document.querySelectorAll(".menu-items a");

  menuLinks.forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", highlightActiveLink);
