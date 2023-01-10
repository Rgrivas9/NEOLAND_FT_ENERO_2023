const toys = [{id: 5, name: 'Buzz MyYear'},{id: 11, name: 'Action Woman'},{id: 23, name: 'Barbie Man'},
            {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}];
const new_list=[]
for (let toy of toys){
    if (toy.name.includes('gato')==false){
        new_list.push(toy)}};
toys.splice(0,toys.length)
for (e of new_list){toys.push(e)}
console.log(toys)

//Esto no me funciona no sé por qué.
const toys1 = [{id: 5, name: 'Buzz MyYear'},{id: 11, name: 'Action Woman'},{id: 23, name: 'Barbie Man'},
            {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}];
for (let toy of toys1){
    if (toy.name.includes('gato')){
        toys1.splice(toys1.indexOf(toy),1)}};
console.log(toys1)