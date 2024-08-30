document.getElementById("open-menu").addEventListener("click", function () {
  document.getElementById("off-canvas-menu").style.top = "0";
  document.getElementById("menu-overlay").style.display = "block";
});

document.getElementById("close-menu").addEventListener("click", function () {
  document.getElementById("off-canvas-menu").style.top = "-300px";
  document.getElementById("menu-overlay").style.display = "none";
});

document.getElementById("menu-overlay").addEventListener("click", function () {
  document.getElementById("off-canvas-menu").style.top = "-300px";
  document.getElementById("menu-overlay").style.display = "none";
});
