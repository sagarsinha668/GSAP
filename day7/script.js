window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        gsap.to("#marque", {
            // transform: `translateX(-100%)`,
            x:"-100%",
            repeat: -1,
            duration: 20,
            ease: "none"
        })
        gsap.to("#marque img", {
            rotate:180
        })
    } else {
        gsap.to("#marque", {
            x:"100%",
            // transform: `translateX(100%)`,
            repeat: -1,
            duration: 20,
            ease: "none"
        })
        gsap.to("#marque img", {
            rotate:0
        })
    }
})