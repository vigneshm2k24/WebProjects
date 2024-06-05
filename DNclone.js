var sidemenubtn=document.querySelector(".navbarmenu")
var sidemenu=document.querySelector(".sidenavbarsection")
var navbarx=document.querySelector(".navbarx")
// var navbar=document.querySelector(".navbar")

sidemenubtn.addEventListener("click",function(){
    sidemenu.style.display="block"
    sidemenubtn.style.display="none"
    navbarx.style.display="block"
    // navbar.style.box-shadow="none"
})

navbarx.addEventListener("click",function(){
    sidemenu.style.display="none"
    sidemenubtn.style.display="block"
    navbarx.style.display="none"
})

var navbar1=document.querySelector(".navbar1")
var cdsubmenu=document.querySelector(".cdsubmenu")

navbar1.addEventListener("mouseover",function(){
    cdsubmenu.style.display="block"
})
navbar1.addEventListener("mouseout",function(){
    cdsubmenu.style.display="none"
})

var cdsubmenu1=document.querySelector(".cdsubmenu1")
var snavbar1=document.querySelector(".snavbar1")
snavbar1.addEventListener("mouseover",function(){
    cdsubmenu1.style.display="block"
})
snavbar1.addEventListener("mouseout",function(){
    cdsubmenu1.style.display="none"
})

//.......................................................DARK & LIGHT THEME...............................................................
const toggle=document.getElementById("toggleDark")
const body=document.querySelector("body")
var profileimg=document.querySelector('profileimg')
var span=document.getElementById('span')
// var navbar2=document.getElementById('navbar')

toggle.addEventListener('click',function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        body.style.background='white';
        body.style.color='black';
        span.style.color='rgb(255, 85, 0)';
        body.style.transition='1s';
    }else{
        body.style.background='black';
        body.style.color='white';
        span.style.color='#F4CE14';
        body.style.transition='1s';
        // navbar1.style.color='white';
        // navbar2.style.color='white'
    }
})

var typed = new Typed(".auto-type",{
    strings:["Python Programmer .", "Front-End Developer .", "UI Designer . . ."],
    typeSpeed:100,
    backSpeed:50,
    loop: true
})

// const matchresult=window.matchMedia("")

// var navbar2=document.querySelector(".navbar2")
// if (navbar2=="676px"){
//     sidemenubtn.style.display="none"
// }
var navbar02=document.querySelector(".navbar02")
if (navbar02.style.display="block"){
    sidemenu.style.display="none";
}
    
