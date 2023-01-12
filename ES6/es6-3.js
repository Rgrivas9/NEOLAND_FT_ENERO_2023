//3.1
const pointsList = [32, 54, 21, 64, 75, 43]
const pointsListCopy=[...pointsList]
console.log(pointsListCopy)

//3.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy={...toy}
console.log(toyCopy)

//3.3
const pointsList1 = [32, 54, 21, 64, 75, 43],pointsLis2 = [54,87,99,65,32];
const pointList3=[...pointsList1,...pointsLis2]
console.log(pointList3)

//3.4
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'},
      toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const toy1Updated={...toy1,...toyUpdate};
console.log(toy1Updated)

//3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const colorsCopyW2=[colors[0],...colors.slice(2)]
console.log(colorsCopyW2)