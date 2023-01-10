//1
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
for (p of products){
    if (p.toLowerCase().includes("camiseta")){
        console.log(p)
    }
}