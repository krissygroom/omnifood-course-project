// ********* Global variables *********
// Select year class in copyright in footer
const yearEl = document.querySelector('.year');

// Select nav menu button in mobile
const btnMobileNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

// Select all links on the page
const allLinks = document.querySelectorAll('a:link');

// ********* Functionality *********

// Set current year
yearEl.textContent = new Date().getFullYear();

// Make mobile navigation work
btnMobileNav.addEventListener('click', function() {
    if (headerEl.classList.contains("nav-open")) {
        headerEl.classList.remove("nav-open");
    } else {
        headerEl.classList.add("nav-open");
    };
});

// Smooth Scrolling Animation for Safari/MS Edge
allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        const href = link.getAttribute('href');

        // Only prevent default if is not external link
        if (href.startsWith("#")) e.preventDefault();

        //  Scroll back to top
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

        // Scroll to other parts of page
        if (href !== "#" && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"});
        };
    });
});


// Fix flexbox gap property missing in some Safari versions
function checkFlexGap() {
    const flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    const isSupported = flex.scrollHeight == 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) {
        document.body.classList.add("no-flexbox-gap");
    }
}

checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js