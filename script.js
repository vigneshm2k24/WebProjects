var sidenavbar=document.querySelector(".sidenavbar")
var navbarmenu=document.querySelector(".navbarmenu")
var navbarx=document.querySelector(".navbarx")

navbarmenu.addEventListener("click",function(){
    sidenavbar.style.left="0"
})
navbarx.addEventListener("click",function(){
    sidenavbar.style.left="-50%"
})