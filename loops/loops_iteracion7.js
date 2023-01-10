const toys = [
    {id: 5, name: 'Buzz MyYear'},{id: 11, name: 'Action Woman'},{id: 23, name: 'Barbie Man'},{id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}];
for (let t of toys){
    console.log(t.name.includes('gato'))
    if (t.name.includes('gato')){
        console.log(3)
        toys.splice(toys.indexOf(t),1)
    }
    }
console.log(toys)