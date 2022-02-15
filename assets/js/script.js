const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text")
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664ff",
    colorText: "#b5b5b5"
}

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty("--bg", "#333333")
    )
}

checkbox.addEventListener("chance", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

