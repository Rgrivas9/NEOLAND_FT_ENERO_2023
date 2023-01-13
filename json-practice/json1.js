//char.json==https://rickandmortyapi.com/api/character
const data=require("./char.json");
const chars=data.results
const findThings=(list,char)=>{
    return list.filter(chars=>(chars.name.toLowerCase()).includes(char.toLowerCase()))}

const findAny=(list,charList=0,lis=[])=>{
    if (charList==[]){return listCharNames(list)}
    if (typeof(charList)=='string'){charList=[charList]}
    for (char of charList){lis.push(list.filter(chars=>(chars.name.toLowerCase()).includes(char.toLowerCase())))}
return(lis)}

const listCharNames=(list)=>{return list.map(character=>character.name)}
console.log(findAny(chars))
console.log(findAny(chars,'rick sAnchez'))
console.log(findAny(chars,['Ants in my Eyes JohnSon','beth']))