var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});

const ANIMATEDCLASSNAME = "animated";
const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
    let addAnimation = false;
    // Elements that contain the "FLASH" class, add a listener to remove
    // animation-class when the animation ends
    if (element.classList[1] == "FLASH") {
        element.addEventListener("animationend", e => {
            element.classList.remove(ANIMATEDCLASSNAME);
        });
        addAnimation = true;
    }

    // If The span element for this element does not exist in the array, add it.
    if (!ELEMENTS_SPAN[index])
        ELEMENTS_SPAN[index] = element.querySelector("span");

    element.addEventListener("mouseover", e => {
        ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
        ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

        // Add an animation-class to animate via CSS.
        if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
    });

    element.addEventListener("mouseout", e => {
        ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
        ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
    });
});
