let menu = document.querySelector("nav i")
let close = document.querySelector("#full i")
let tl = gsap.timeline()

tl.to("#full",{
    right:0,
    duration:1
})
tl.from("#full h4",{
    x:150,
    stagger:0.25,
    opacity:0,
    duration:.9
})

tl.from("#full i",{
    opacity:0
})
tl.pause()
menu.addEventListener("click",()=>{
    tl.play()
})
close.addEventListener("click",()=>{
    tl.reverse()
})