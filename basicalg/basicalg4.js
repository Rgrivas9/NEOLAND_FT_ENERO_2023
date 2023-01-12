//1.1
const avengers=["HULK", "SPIDERMAN", "BLACK PANTHER"];
const showFirst=(list) =>{console.log(list[0])}

//1.2
const changeFirst=(list,name)=>{list[0]=name}

//1.3
const showAll=(list)=>{for (p of list){console.log(p)}}

//1.4
const rickAndMortyCharacters=["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty","Summer")
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1])

//1.5
const rickAndMortyCharacters2=["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2[0],rickAndMortyCharacters2[rickAndMortyCharacters2.length-1])

//1.6
rickAndMortyCharacters2.splice(1,1)
console.log(rickAndMortyCharacters2)

