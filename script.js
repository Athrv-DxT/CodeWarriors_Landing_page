document.addEventListener("DOMContentLoaded", () => {
    const themeBox = document.querySelector(".theme_details");

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    themeBox.classList.add("slide-in"); // Slides in the theme box
                } else {
                    themeBox.classList.remove("slide-in"); // Removes the box when out of view
                }
            });
        },
        {
            threshold: 0.4, // Trigger when 40% of the section is visible
        }
    );

    // Observe the #theme section
    observer.observe(document.querySelector("#theme"));
});
