const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const toFilterStreamers=(text)=>{console.log(streamers.filter(streamer => (streamer.name.toLowerCase()).includes(text.toLowerCase())))}
toFilterStreamers(getElementById('a'))