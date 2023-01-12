//1.1
const character={name: 'Jack Sparrow', age: 10};
character.age=25;
//1.2
const firstName='Jon',lastName='Snow',age=24; 
//console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`);
//1.3
const toy1={name: 'Buss myYear', price: 19};
const toy2={name: 'Rallo mcKing', price: 29};
//console.log(toy1.price+toy2.price)
//1.4
/* let globalBasePrice=10000;
const car1={name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2={name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice=25000;
car1.finalPrice=globalBasePrice+car1.basePrice
car2.finalPrice=globalBasePrice+car2.basePrice
 */
class Cars{
    constructor(name,basePrice,finalPrice){
        this.name=name
        this.basePrice=basePrice
        this.finalPrice=finalPrice}
    baseGlobalPrice(base){
        return this.finalPrice=this.basePrice+base}}
const car1=new Cars('BMW m&m',50000,60000),car2=new Cars('Chevrolet Corbina',70000,80000)
car1.baseGlobalPrice(25000)
car2.baseGlobalPrice(25000)
console.log(car1,car2)

/*     class Character {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
      
        attack() {
          return `${this.name} está atacando!`;
        }
      
        defense() {
          return `${this.name} está defendiéndose!`;
        }
      }
      
      const Daredevil = new Character("Daredevil", 40);
      console.log(Daredevil);
      console.log(Daredevil.attack());
      
      const Spiderman = new Character("Spiderman", 25);
      console.log(Spiderman);
      console.log(Spiderman.defense()); */