//Iteración #3: Mix Fors**

//Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
// Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

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
]
let i=0
const lis=[],ulis=[],flis=[],list=[],nlis=[]
for (obj of users) {
    for (cat in obj){                                                   //index == name,favoritessounds         users[users.indexOf(obj)]
        if (cat=='favoritesSounds'){                                    //cat   == favoritesSound               users[users.indexOf(obj)][cat]
            for (t in (users[users.indexOf(obj)][cat])){                //t     == waves,wind,firecamp          users[users.indexOf(obj)][cat][t]
                lis.push(t)}}}}
for (sound of lis.sort()){i++;if (sound!=lis[i]){ulis.push(sound);nlis.push(i)}}
i=-1
for (e of ulis){i++
    {if (i!=0){list.push(e,nlis[i]-nlis[i-1])}
    else {list.push(e,nlis[i])}}}