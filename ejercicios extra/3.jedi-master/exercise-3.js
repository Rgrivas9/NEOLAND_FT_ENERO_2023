const list=document.querySelector('.List')
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
const printHere=()=>{
    list.innerHTML='<ul>'
    for (city of places){list.innerHTML+=`<li>${city}</li>`}
    list.innerHTML+='</ul>'
}
printHere()