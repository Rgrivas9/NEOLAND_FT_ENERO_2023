//4.1
const users = [{id: 1, name: 'Abel'},
	           {id:2, name: 'Julia'},
	           {id:3, name: 'Pedro'},
	           {id:4, name: 'Amanda'}];
const names=users.map(user => user.name);
console.log(names)
//4.2
const namesA=users.map(user => user.name[0]=='a' || user.name[0]=='A' ? user='Anacleto' : user.name)
console.log(namesA)

//4.3
const cities=[{isVisited:true, name: 'Tokyo'}, 
	          {isVisited:false, name: 'Madagascar'},
	          {isVisited:true, name: 'Amsterdam'}, 
	          {isVisited:false, name: 'Seul'}];
const visitedCities=cities.map(citie => citie.isVisited==true ? citie=citie.name.concat(' Visitado') : citie=citie.name)
console.log(visitedCities)