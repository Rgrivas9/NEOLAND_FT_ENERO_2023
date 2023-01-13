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
/* 
5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
</body>
</html>

5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
  <button data-function="toShowFilterStreamers">Filter</button>
</body>
</html> */