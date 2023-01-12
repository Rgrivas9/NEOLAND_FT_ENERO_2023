const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",90,
    "Anakin",6,
    "Obi-Wan",];
  
const findIndexOf=(list,word)=>{for(w of list){
    if (typeof(word)=='string' && typeof(w)!='number'){if (w.toLowerCase()==word.toLowerCase()){return list.indexOf(w)}}
    if (typeof(word)!='string'){if (w==word){return list.indexOf(w)}}}
    return false}
  
const removeItem=(list,word)=>{
    if (findIndexOf(list,word)){list.splice(findIndexOf(list,word),1)}
    return list}
console.log(removeItem(mainCharacters,90))