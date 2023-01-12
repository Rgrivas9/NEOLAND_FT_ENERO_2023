const animals = [
    "Rintaiantín",
    "Coasamao",
    "Gaato acon A A a baotas",
    "Asno",];

const aCounter=(list,acc=0)=>{for (word of list){for (char of word.toLowerCase()){if (char=='a'){acc++}}}return acc}

console.log(aCounter(animals))