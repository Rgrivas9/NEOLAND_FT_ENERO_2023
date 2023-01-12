const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },];
const sumSells=(list,c=0)=>{for (product of list){c+=product.sellCount}return c/list.length}
console.log(sumSells(products))