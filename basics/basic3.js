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
    for (cat in obj){                                                   
        if (cat=='favoritesSounds'){                                    
            for (t in (users[users.indexOf(obj)][cat])){                
                lis.push(t.toLowerCase())}}}}
for (sound of lis.sort()){i++;if (sound!=lis[i]){ulis.push(sound);nlis.push(i)}}
i=-1
for (e of ulis){i++
    {if (i!=0){list.push(e,nlis[i]-nlis[i-1])}
    else {list.push(e,nlis[i])}}}