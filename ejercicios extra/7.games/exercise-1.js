const cards = [
  {
    id: 1,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
];
const getRandomInt=(max)=>{return Math.floor((Math.random() * max))}
const getRandomRange=(max,range=[])=>{
    while (range.length<max){
        r=getRandomInt(max)
        if (range.indexOf(r)===-1){range.push(r)}}
    return range}
const getRandomArray=(list,rList=[])=>{
  for (n of getRandomRange(list.length)){
      rList.push(list[n])}
  return rList}
let cardArray = getRandomArray(cards)
const randomize=()=>{cardArray = getRandomArray(cards);row1.innerHTML="";row2.innerHTML="";row3.innerHTML="";printInDocument(cardArray)}

//
const row1 = document.querySelector("#row1");
const row2 = document.querySelector("#row2");
const row3 = document.querySelector("#row3");
const score = document.querySelector("#s");
const sound = document.querySelector("#sound")

const printInDocument = (list, i = 0) => {
  for (const item of list) {
    i++;
    if (i <= list.length / 3) {
      row1.innerHTML += `<img src=${item.img} id=${item.id} alt="Planet image"/>`;
    }
    if (i > list.length / 3 && i <= (list.length / 3) * 2) {
      row2.innerHTML += `<img src=${item.img} id=${item.id} alt="Planet image"/>`;
    }
    if (i > (list.length / 3) * 2) {
      row3.innerHTML += `<img src=${item.img} id=${item.id} alt="PLanet image"/>`;
    }
  }
};
printInDocument(cardArray);
const lis = [];
const idLis = [];
let s = 0,a = 0;
const twoPlanets = (id) => {
  lis.push(cardArray.filter((planet) => planet.id == id));
  idLis.push(id);
  getImage(id);
  checkPlanets();
};
const checkPlanets = () => {
    if (lis.length==2){
    if (lis[0][0].id==lis[1][0].id){lis.splice(1,1);idLis.splice(1,1)}}
    if (lis.length==2){
        if (lis[0][0].name==lis[1][0].name){
          s++;scored();
          tickPlanets(idLis);
          lis.splice(0,2);idLis.splice(0,2);winner()}
        if (lis.length!=0){
            if (lis[0][0].name!=lis[1][0].name){a++;scored();wrongPlanets(idLis);lis.splice(0,2);idLis.splice(0,2)}}
    }
};
const scored=()=>{score.innerHTML =`
<h3>Score:<span data-function="scored">${s}</span></h3><h2 style="float: right">${counter}</h2>
<h3>Attempts:<span data-function="attempted">${a}</span></h3>
<button id="reset" onclick="reset()">reset </button>`}


const reset=()=>{s=0;a=0;lis.splice(0,2);idLis.splice(0,2);row1.innerHTML="";row2.innerHTML="";row3.innerHTML="";
    score.innerHTML =`
<h3>Score:<span data-function="scored">0</span></h3><h2 style="float: right">60</h2>
<h3>Attempts:<span data-function="attempted">0</span></h3>
<button id="start" onclick="start(cardArray)">start </button><button id="random" onclick="randomize()">random </button>`;
printInDocument(cardArray)
clearInterval(intervalID);counter=60}

const start=(list, i = 0)=> {row1.innerHTML="";row2.innerHTML="";row3.innerHTML="";
    for (const item of list) {
      i++
      if (i <= list.length / 3) {
        row1.innerHTML += `<img src="planets.png" id=${item.id} alt="Planet image" onClick="twoPlanets(this.id)"/>`;
      }
      if (i > list.length / 3 && i <= (list.length / 3) * 2) {
        row2.innerHTML += `<img src="planets.png" id=${item.id} alt="Planet image" onClick="twoPlanets(this.id)"/>`;
      }
      if (i > (list.length / 3) * 2) {
        row3.innerHTML += `<img src="planets.png" id=${item.id} alt="PLanet image" onClick="twoPlanets(this.id)"/>`;
      }
    }
    score.innerHTML =`
    <h3>Score:<span data-function="scored">${s}</span></h3><h2 style="float: right">${counter}</h2>
    <h3>Attempts:<span data-function="attempted">${a}</span></h3>
    <button id="reset" onclick="reset()">reset </button>`;
    timeOut()};

const getImage=(id)=>{
    const image = cardArray.find(image => image.id==id)
    document.getElementById(id).src=`${image.img}`}

const tickPlanets=(list)=>{
    document.getElementById(list[0]).src="tick.png"
    document.getElementById(list[1]).src="tick.png"
    document.getElementById(list[0]).onclick=false
    document.getElementById(list[1]).onclick=false
}
const wrongPlanets=(list)=>{
    document.getElementById(list[0]).src="planets.png"
    document.getElementById(list[1]).src="planets.png"
}
const winner=()=>{
    if (s==6){    score.innerHTML =`
    <h1> Congratulations! You win! <h1>
    <h3> Score: ${s} Failed: ${a}<h3>
    <button id="reset" onclick="reset()">Try again</button>`;clearInterval(intervalID);counter=60}}
const music = new Audio('kungfury.mp3')
const unmute=()=>{music.play();
  music.loop=true
  sound.innerHTML='<button onclick="mute()">mute</button>'}

const mute=()=>{music.pause()
  sound.innerHTML='<button onclick="unmute()">sound</button>'}

var intervalID
let counter=60
const timeOut=()=>{intervalID=setInterval(count,1000)}
const count = () => {if (counter>0){counter--;
  score.innerHTML =`
  <h3>Score:<span data-function="scored">${s}</span></h3><h2 style="float: right">${counter}</h2>
  <h3>Attempts:<span data-function="attempted">${a}</span></h3>
  <button id="reset" onclick="reset()">reset </button>`};if (counter==0){noTime()}}
const noTime = (i=-1) => {score.innerHTML =`<h1 style = "text-align:center"> Failed! Time ran out! <h1>
  <h3 style = "text-align:center">Score: ${s}<h3>
  <button id="reset" onclick="reset()">Try again</button>`;clearInterval(intervalID);counter=60;
  document.getElementById(1).onclick=false
  document.getElementById(2).onclick=false
  document.getElementById(3).onclick=false
  document.getElementById(4).onclick=false
  document.getElementById(5).onclick=false
  document.getElementById(6).onclick=false
  document.getElementById(7).onclick=false
  document.getElementById(8).onclick=false
  document.getElementById(9).onclick=false
  document.getElementById(10).onclick=false
  document.getElementById(11).onclick=false
  document.getElementById(12).onclick=false
}
