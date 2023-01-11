const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];
//Con esto casi me da un parraque, ya lo pasaré a funciones. 
//He supuesto que conozco la profundidad y que existen las claves favourite sound al principio y volume al final
let i=-1,vol=0
const lis=[]
for (obj of users) {i++;lis.push(obj.name)
    for (cat in obj){                                                   //index == name,favoritessounds         users[users.indexOf(obj)]
        if (cat=='favoritesSounds'){                                    //cat   == favoritesSound               users[users.indexOf(obj)][cat]
            for (t in (users[users.indexOf(obj)][cat])){                //t     == waves,wind,firecamp          users[users.indexOf(obj)][cat][t]
                for (nivel in (users[users.indexOf(obj)][cat][t])){     //nivel == format, volume               users[users.indexOf(obj)][cat][t][nivel]
                    if (nivel=='volume'){                              
                        lis.push(users[users.indexOf(obj)][cat][t][nivel])}}}}}}
const lfinal=[]
lis.push('a')
let c=0,x=0
for (obj of lis){
    if (isNaN(obj)){
        lfinal.push(c/x,obj)
        c=0;x=0}
    else {c+=obj;x+=1}}
lfinal.splice(0,1);lfinal.splice(lfinal.length-1,1)
console.log(lfinal)