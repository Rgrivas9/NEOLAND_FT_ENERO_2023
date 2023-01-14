const duplicates = [
    'sushi',
    'pizza',
    'pizza',
    'pizza',
    'pizza',
    'pizza',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
/*   function removeDuplicates(param) {
    let i=-1
    for (word of param){
        i++
        param[i]=word.toUpperCase()}
    param.sort()
    i=-1
    for (let word of param){
        i++
        if (param[i]==(param[i+1])){param.splice(i,1)}}
    return param} */
const removeDuplicates=(list,i=-1,lis=[])=>{for (word of list.sort()){i++;if (word!=list[i+1]){lis.push(word)}}return lis}
console.log(removeDuplicates(duplicates))