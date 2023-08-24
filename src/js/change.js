const home = document.querySelector(".home");
const univ = document.querySelector(".univ");
const explo = document.querySelector(".explo");

const homeBg = document.querySelector("img.home-bg");
const univBg = document.querySelector("img.univ-bg");
const exploBg = document.querySelector("img.explo-bg");



export default function(){

    home.addEventListener('click',()=>{
    homeBg.classList.remove("hidden");
    univBg.classList.add("hidden");
    exploBg.classList.add("hidden");
    })
    univ.addEventListener('click',()=>{
        homeBg.classList.add("hidden");
        univBg.classList.remove("hidden");
        exploBg.classList.add("hidden");
    })
    explo.addEventListener('click',()=>{
        homeBg.classList.add("hidden");
        univBg.classList.add("hidden");
        exploBg.classList.remove("hidden");
    })

}