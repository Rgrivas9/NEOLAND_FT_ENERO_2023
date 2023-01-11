function findArrayIndex(array, text,i=-1) {
    if (typeof(text)=='number'){text=text.toString()}
    for (e of array){i++;if (isNaN(e)==false){array[i]=array[i].toString()}}
    i=-1
    for (e of array){i++;array[i]=array[i].toLowerCase()}
    const index = array.indexOf(text.toLowerCase())
    if (index!=-1){return index}
    else {return false}}