document.querySelectorAll(".revel")
.forEach(function (elems) {

    let spanParant = document.createElement("span");
    let spanChild = document.createElement("span");

    spanChild.classList.add("child");
    spanParant.classList.add("parant");

    spanChild.innerHTML = elems.innerHTML;
    spanParant.appendChild(spanChild);

    elems.innerHTML="";
    elems.appendChild(spanParant);

})
           
gsap.to(".lode",{
    rotate:360,
    duration:0.7,
    delay:1,
    repeat:-1,
    ease:"none",
})
var tl = gsap.timeline();


tl.from(".child span",{
    
    x:250,
    stagger:.2,
    duration:2.5,
    ease:Circ.easeInOut,
    opacity:0,
})
tl.to(".parant",{
    y:-66,
    // duration:2,
    delay:.5,
    // ease:Expo.easeInOut,
})

tl.to(".black",{
    display:"none",

    height:"0%",
    // display:"none",
    duration:2.5,
    delay:.5,
    ease:Expo.easeInOut

})
tl.to(".green",{
    height:"100%",
    duration:3,
    delay:-3,
    ease:Expo.easeInOut,

    // top:0,


})
// tl.to(".green",{
//     top:0,
//     height:0,
//     duration:1,
//     delay:-1,
//     // ease:Expo.easeInOut

// })

tl.to(".white",{
    height:"100%",
    duration:2,
    delay:-2.2,
    ease:Expo.easeInOut


})


