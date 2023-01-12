const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",];
const swap=(list,p1,p2)=>{const x=list.indexOf(p1);y=list.indexOf(p2);list[x]=p2;list[y]=p1;return list}

console.log(swap(fantasticFour,'La antorcha humana','La cosa'))