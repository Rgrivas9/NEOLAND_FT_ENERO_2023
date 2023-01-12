//5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const ages18=ages.filter(age => age>18)
console.log(ages18)

//5.2
const agesEven=ages.filter(age => age%2===0)
console.log(agesEven)

//5.3
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	               {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
                   {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
                   {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
const streamersLoL= streamers.filter(streamer => streamer.gameMorePlayed==='League of Legends')
console.log(streamersLoL)

//5.4
const streamersU= streamers.filter(streamer => streamer.name.includes('u') || streamer.name.includes('U'))
console.log(streamersU)

//5.5
const streamersL= streamers.filter(streamer => streamer.gameMorePlayed.includes('Legends'))
console.log(streamersL)