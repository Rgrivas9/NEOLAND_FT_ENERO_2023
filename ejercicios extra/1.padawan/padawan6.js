const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },];
    
const splitThings=(list,bad=[],good=[])=>{for (thing of list){
      if (thing.sellCount>20){good.push(thing)}
      if (thing.sellCount<=20){bad.push(thing)}}return [good,bad]}
const goodProducts = splitThings(products)[0];
const badProducts = splitThings(products)[1];