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



//*************************************/
// Sticky navigation after scrolling below hero section

// using IntersectionObserver class to observe scrolling past hero
const sectionHeroElement = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
    function(entries) {
        // only one threshold value so we select that here
        const ent = entries[0];
        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }
        else {
            document.body.classList.remove("sticky");
        };
}, 
{
    // first observe the root in the viewport 
    root: null,
    // event (sticky nav) will happen when 0% of hero section is in viewport
    // (if threshold: 1 - event will happen as soon as all of hero section is
    // in view)
    threshold: 0,
    // rootMargin to avoid overlapping the featured in section
    rootMargin: '-80px',

});
obs.observe(sectionHeroElement);

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