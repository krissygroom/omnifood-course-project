// Global variables
const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();


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