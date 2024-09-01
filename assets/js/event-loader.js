document.addEventListener("DOMContentLoaded", () => {
  const events = document.querySelectorAll(".event");
  const loadMoreBtn = document.getElementById("load-more-btn");
  const hideBtn = document.getElementById("hide-btn");
  const eventsSection = document.querySelector(".ctv-events");
  let visibleCount = 6; // Initially visible events count
  const increment = 6; // Number of events to show on each "Know More" click

  // Initially hide events beyond the first 6
  events.forEach((event, index) => {
    if (index >= visibleCount) {
      event.classList.add("hidden");
    }
  });

  loadMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Calculate the new visible count
    const newVisibleCount = Math.min(visibleCount + increment, events.length);

    // Show the next set of events
    for (let i = visibleCount; i < newVisibleCount; i++) {
      events[i].classList.remove("hidden");
      events[i].classList.add("slide-down");
    }

    visibleCount = newVisibleCount;

    // Check if there are no more events to show
    if (visibleCount >= events.length) {
      loadMoreBtn.classList.add("hidden");
      hideBtn.classList.remove("hidden");
    }
  });

  hideBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Hide events beyond the first 6
    events.forEach((event, index) => {
      if (index >= 6) {
        event.classList.add("slide-up");
        setTimeout(() => {
          event.classList.add("hidden");
          event.classList.remove("slide-up");
        }, 500); // Match animation duration
      }
    });

    // Scroll to .ctv-events section
    eventsSection.scrollIntoView({ behavior: "smooth" });

    // Show the Load More button and hide the Hide button
    hideBtn.classList.add("hidden");
    loadMoreBtn.classList.remove("hidden");

    // Reset visible count to 6
    visibleCount = 6;
  });
});
