//char.json==https://rickandmortyapi.com/api/character
const data=require("./char.json");
const chars=data.results
const findThings=(list,char)=>{
    return list.filter(chars=>(chars.name.toLowerCase()).includes(char.toLowerCase()))}

const findAny=(list,charList=[],lis=[])=>{
    if (typeof(charList)=='string'){charList=[charList]}
    for (char of charList){lis.push(list.filter(chars=>(chars.name.toLowerCase()).includes(char.toLowerCase())))}
return(lis)}
console.log(findAny(chars,['Rick Sanchez','beth smith']))