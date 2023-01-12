const list = [
    { name: "Mc Aitana", gender: "pop", order: 3 },
    { name: "Tote Queen", gender: "rap", order: 2 },
    { name: "Good Bunny", gender: "reggeaton", order: 4 },
    { name: "El sueño de Neo", gender: "pop", order: 1 },];
const order=(list,i=0,lis=[])=>{for (n of list){i++;for (thing of list){if (thing.order==i){lis.push(thing)}}}return lis}
console.log(order(list))