function findArrayIndex(array, text,i=-1) {
    for (e of array){i++;array[i]=array[i].toLowerCase()}
    const index = array.indexOf(text.toLowerCase())
    if (index!=-1){return index}
    else {return false}}