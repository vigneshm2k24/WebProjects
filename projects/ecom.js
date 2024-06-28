var popupbtn=document.getElementById("popupbtn")
var overlay1=document.querySelector(".overlay")
var popup=document.querySelector(".popup")

//popup box appear and + button clr change
popupbtn.addEventListener("click",function(){
    overlay1.style.display="block"
    popup.style.display="block"
})

popupbtn.addEventListener("mouseover",function(){
    popupbtn.style.backgroundColor="rgb(127, 63, 137)"
})
popupbtn.addEventListener("mouseout",function(){
    popupbtn.style.backgroundColor="rgb(182, 74, 199)"
})


//popup box disappear and buttons clr change
var cancelbtn=document.getElementById("cancelbtn")
var addbtn=document.getElementById("addbtn")
cancelbtn.addEventListener("click",function(){
    overlay1.style.display="none"
    popup.style.display="none"
})
addbtn.addEventListener("click",function(){
    overlay1.style.display="none"
    popup.style.display="none"
})

cancelbtn.addEventListener("mouseover",function(){
    cancelbtn.style.backgroundColor="red"
})
cancelbtn.addEventListener("mouseout",function(){
    cancelbtn.style.backgroundColor="white"
})
addbtn.addEventListener("mouseover",function(){
    addbtn.style.backgroundColor="green"
})
addbtn.addEventListener("mouseout",function(){
    addbtn.style.backgroundColor="white"
})

//add button's function
var container=document.querySelector(".container")
var book1=document.querySelector(".book1")
var booktitle1=document.getElementById("booktitle1")
var bookauthor1=document.getElementById("bookauthor1")
var disc1=document.getElementById("disc1")

var delbtn1=document.getElementById("delbtn1")
delbtn1.addEventListener("mouseover",function(){
    delbtn1.style.backgroundColor="red"
    delbtn1.style.color="white"
})
delbtn1.addEventListener("mouseout",function(){
    delbtn1.style.backgroundColor="rgb(200, 200, 200)"
    delbtn1.style.color="black"
})
function delfunc(event){
    event.target.parentElement.remove()
}

addbtn.addEventListener("click",function(){
    var div=document.createElement("div")
    div.setAttribute("class","book1")
    div.innerHTML=`<h2 style="padding-top: 15px; padding-bottom: 10px;">${booktitle1.value}</h2>
    <h4 style="padding-bottom: 6px;">${bookauthor1.value}</h4>
    <p>${disc1.value}</p>
    <button class="delbtn" id="delbtn1" onclick="delfunc(event)">Delete</button>`
    container.append(div)
})