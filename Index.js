
document.addEventListener("scroll", () => {
    KeyframeEffect
    if (window.pageYOffset > 0) {
        document.querySelector("header")
            .classList.add("active")
    } else {
        document.querySelector("header")
            .classList.remove("active")
    }
})
