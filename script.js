// for home page

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

window.addEventListener('load', () => {
    // Add the 'visible' class after the page is loaded
    document.querySelector('.nav-bar').classList.add('visible');
    document.querySelector('.CW').classList.add('visible');
    document.querySelector('.welcome p').classList.add('visible');
    document.querySelector('#home').classList.add('visible');
    document.querySelector('.welcome').classList.add('visible');
});

document.addEventListener('DOMContentLoaded', function() {
    const logoTrack = document.getElementById('logoTrack');
    
// Array of logo image paths
    const logos = [
        'images/cpp_logo.png',
        'images/go_logo.png',
        'images/java_logo.png',
        'images/js_logo.png',
        'images/node_logo.png',
        'images/python_logo.png',
        'images/ruby_logo.png',
        'images/rust_logo.png'
    ];
    // Loop through logos and append them to the logoTrack container
    logos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo;
        img.alt = `Logo ${logo}`;
        logoTrack.appendChild(img);
    });

    // Duplicate logos dynamically to create a seamless loop
    logos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo;
        img.alt = `Logo ${logo}`;
        logoTrack.appendChild(img);
    });

    // Add logos to the track 5 times
    addLogos(5);
});

// for instructions page

// Wait for the DOM to load
window.addEventListener('load', () => {

    // Animate the heading
    const heading = document.querySelector('h1');
    heading.classList.add('animate');

    // Animate the paragraph
    const paragraph = document.querySelector('.instr p');
    setTimeout(() => {
        paragraph.classList.add('animate');
    }, 500); // Delay for smooth timing

    // Animate the line (hr)
    const line = document.querySelector('hr');
    setTimeout(() => {
        line.classList.add('animate');
    }, 900); 

    // Animate the instruction box
    const box = document.querySelector('.instr-list');
    setTimeout(() => {
        box.classList.add('animate');
    }, 1500); // Final delay for good timing
});

// for battle rounds page

// Trigger the animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.br');
    elements.forEach(element => {
        // Add the 'animate' class to start the transition
        element.classList.add('animate');
    });
});


// Wait for the DOM to fully load
window.addEventListener('load', () => {
    // Trigger animations for each grid box with a delay
    const gridItems = document.querySelectorAll('.itb');
    gridItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate');
        }, index * 200); // Stagger the animations with a delay of 200ms
    });

    // Trigger the final showdown box to slide in after all grid items are visible
    const showdownBox = document.querySelector('.final-showdown');
    setTimeout(() => {
        showdownBox.classList.add('visible');
    }, gridItems.length * 200 + 500); // Add delay for final showdown to appear after grid items
});

// box animation for final showdown
window.onload = function() {
    const showdown = document.querySelector('.final-showdown');
    setTimeout(() => {
        showdown.classList.add('visible'); // Make the Showdown event visible after a delay
    }, 2000); // Adjust the timing as needed
};


