//1.1
const avengers=["HULK", "SPIDERMAN", "BLACK PANTHER"];
const valor=avengers[0];
console.log(valor);

//1.2
avengers[0]="IRONMAN"

//1.3
for (p of avengers){
    console.log(p)};

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