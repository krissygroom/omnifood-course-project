// ********* Global variables *********
// Select year class in copyright in footer
const yearEl = document.querySelector('.year');

// Select nav menu button in mobile
const btnMobileNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

// Set current year
yearEl.textContent = new Date().getFullYear();


// ********* Functions and Events *********

// Make mobile navigation work
btnMobileNav.addEventListener('click', function() {
    if (headerEl.classList.contains("nav-open")) {
        headerEl.classList.remove("nav-open");
    } else {
        headerEl.classList.add("nav-open");
    };
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