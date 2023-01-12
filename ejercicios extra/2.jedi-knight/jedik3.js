const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Pedro",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Cristina",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },];
const extractSound=(list,lis=[])=>{for(thing of list){for(sound in thing.favoritesSounds){lis.push(sound)}}return lis.sort()}
const splitSounds=(list,lis=[],i=0)=>{for(sound of list){i++;if(sound!=list[i]){lis.push(sound)}}return [lis,list]}
const countSounds=(list,lis=[],i=-1)=>{
    for(sound of list[0]){lis.push(list[1].filter(thing => thing==sound))}
    for(soundlist of lis){i++;lis[i]=[lis[i][0],lis[i].length]}
    return lis}

const wichSoundAreFavourite=(list)=>{return countSounds(splitSounds(extractSound(list)))}
console.log(wichSoundAreFavourite(users))