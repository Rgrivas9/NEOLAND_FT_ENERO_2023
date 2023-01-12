//2.1
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
const {title,gender,year} = game
console.log(title,gender,year)

//2.2
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1,fruit2,fruit3]=fruits
console.log(fruit1,fruit2,fruit3)

const splitList=(list,flis=[])=>{for (elem of list){flis.push(list.filter(sb => sb==elem))}return flis}
console.log(splitList(fruits))

//2.3
const animalFunction = () => {return {name: 'Bengal Tiger', race: 'Tiger'}};
const {name,race} = animalFunction()
console.log(name, race)

//2.4
const car = {name1: 'Mazda 6', itv: [2015, 2011, 2020] }
const {name1,itv}=car
const [itv1,itv2,itv3]=itv
console.log(name1,itv1,itv2,itv3)