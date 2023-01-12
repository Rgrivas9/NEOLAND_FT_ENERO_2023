//1
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const findWithWord=(list,word)=>{for (p of list){if (p.toLowerCase().includes(word)){console.log(p)}}}
findWithWord(products,'camiseta')