const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",90,
    "Anakin",6,
    "Obi-Wan",];
  
  const findIndexOf=(list,word,m=0)=>{for(w of list){
    if (typeof(word)=='string' && typeof(w)!='number'){if (w.toLowerCase()==word.toLowerCase()){return list.indexOf(w)}}
    if (typeof(word)!='string'){if (w==word){return list.indexOf(w)}}}
    return false}
  
  console.log(findIndexOf(mainCharacters,'Obi-Wan'))