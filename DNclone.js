var sidemenubtn=document.querySelector(".navbarmenu")
var sidemenu=document.querySelector(".sidenavbarsection")
var navbarx=document.querySelector(".navbarx")
// var navbar=document.querySelector(".navbar")
var section=document.querySelector("section")
var navbar02=document.querySelector(".navbar-02")


sidemenubtn.addEventListener("click",function(){
    sidemenu.style.display="block"
    sidemenubtn.style.display="none"
    navbarx.style.display="block"
    navbar02.style.display="none"
    // navbar.style.box-shadow="none"
})

navbarx.addEventListener("click",function(){
    sidemenu.style.display="none"
    sidemenubtn.style.display="block"
    navbarx.style.display="none"
    navbar02.style.display="block"
})

section.addEventListener("click",function(){
    sidemenu.style.display="none"
    sidemenubtn.style.display="block"
    navbarx.style.display="none"
})

navbarx.addEventListener("click",function(){
    sidemenu.style.left="0";
})

sidemenu.addEventListener("click",function(){
    sidemenu.style.display="none"
    sidemenubtn.style.display="block"
    navbarx.style.display="none"
    // navbar.style.box-shadow="none"
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
var img=document.querySelector('.profileimg')
var navbar_2=document.querySelector('.navbar-2')
var navbar=document.querySelector(".navbar")

toggle.addEventListener('click',function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        body.style.background='white';
        body.style.color='black';
        span.style.color='rgb(255, 85, 0)';
        body.style.transition='1s'; 
        navbar_2.style["boxShadow"] = 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px';
        img.style["boxShadow"] = 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset';
    }else{
        body.style.background='black';
        body.style.color='white';
        span.style.color='#F4CE14';
        body.style.transition='1s';
        navbar_2.style["boxShadow"] = 'rgba(255, 255, 255, 0.09) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 32px 16px';
        // navbar.style["boxShadow"] = 'rgba(255, 255, 255, 0.09) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 32px 16px';
        // navbar.style.color='white';
        // navbar.style.background ='black';
        img.style["boxShadow"] = 'rgba(205, 205, 162, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(245, 218, 191, 0.35) 0px -2px 6px 0px inset';
        // navbar1.style.color='white';  box-shadow: 0px 3px 15px rgba(113, 115, 119, 0.5); 
        // navbar2.style.color='white'
    }
})

var typed = new Typed(".auto-type",{
    strings:["UI / UX Designer", "Front-End Developer .","Python Programmer .","Freelancer . . ."],
    typeSpeed:100,
    backSpeed:50,
    loop: true
})

// const matchresult=window.matchMedia("")

// var navbar2=document.querySelector(".navbar2")
// if (navbar2=="676px"){
//     sidemenubtn.style.display="none"
// }

//.......................................................skill percentage animation...................................................
var navbar02=document.querySelector(".navbar02")
if (navbar02.style.display="block"){
    sidemenu.style.display="none";
}
    
let number1= document.getElementById("number1");
let number2= document.getElementById("number2");
let number3= document.getElementById("number3");
let number4= document.getElementById("number4");
let number5= document.getElementById("number5");

let counter1= 0;
let counter2= 0;
let counter3= 0;
let counter4= 0;
let counter5= 0;
setInterval(()=>{
    if(counter1 == 45){
        clearInterval();
    }
    else{
        counter1 += 1;
        number1.innerHTML = counter1 + "%";
    }
}, 31)

setInterval(()=>{
    
    if(counter2 == 75){
        clearInterval();
    }
    else{
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
}, 20)

setInterval(()=>{
    
    if(counter3 == 55){
        clearInterval();
    }
    else{
        counter3 += 1;
        number3.innerHTML = counter3 + "%";
    }
}, 28)

setInterval(()=>{
    
    if(counter4 == 30){
        clearInterval();
    }
    else{
        counter4 += 1;
        number4.innerHTML = counter4 + "%";
    }
}, 50)

setInterval(()=>{
    
    if(counter5 == 35){
        clearInterval();
    }
    else{
        counter5 += 1;
        number5.innerHTML = counter5 + "%";
    }
}, 45)

// const observerskill = new IntersectionObserver((entries) =>{
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting){
//             entry.target.classList.add('show');
//         }
//         else{
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const skillElements = document.querySelectorAll('.anim1');
// skillElements.forEach((el) => observerskill.observe(el));


//...............................scroll animatin.........................//

/* ....................................main page................... */

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



const observer1 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('rightshow');
        }
        else{
            entry.target.classList.remove('rightshow');
        }
    });
});

const rightElements = document.querySelectorAll('.right');
rightElements.forEach((el) => observer1.observe(el));



const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('leftshow');
        }
        else{
            entry.target.classList.remove('leftshow');
        }
    });
});

const leftElements = document.querySelectorAll('.left');
leftElements.forEach((el) => observer2.observe(el));



const observer3 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('upshow');
        }
        else{
            entry.target.classList.remove('upshow');
        }
    });
});

const upElements = document.querySelectorAll('.up');
upElements.forEach((el) => observer3.observe(el));


const observer4 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('downshow');
        }
        else{
            entry.target.classList.remove('downshow');
        }
    });
});

const downElements = document.querySelectorAll('.down');
downElements.forEach((el) => observer4.observe(el));



let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    if(pos>100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click",() => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient 
    (#165cff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;