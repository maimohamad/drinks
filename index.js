var drinks=document.querySelectorAll(".drinks li")
var div1=document.querySelector("#div1")

var butn=document.querySelector("#butn")
var totalprice=0;


drinks.forEach(function (item) {
item.onclick=function(){
totalprice +=+(item.getAttribute("price"))
    div1.innerHTML +=item.textContent+", "

    if(div1.innerHTML!=""){
butn.style.display="block" 
butn.style.width="200px"
butn.style.backgroundColor="orange"

    }
}




})

butn.onclick=function(){
    console.log(totalprice)
    window.alert("total price="+ totalprice)
}




