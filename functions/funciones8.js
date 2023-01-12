const counterWords = [
    'repeat',
    'repeat',
    'enjoy',
    'enjoy',
    'sleep',
    'code',
    'code',
    'code',
    'code',
    'upgrade',
    'upgrade',
    'upgrade',];
/*  Este funciona pero es demasiado complicado
function repeatCounter(param){
  let i=-1
  const lis=[],rlis=[],flis=[]
  param.sort()
  for (word of param){
    i++
    param[i]=word.toLowerCase()
    if (param[i]==param[i+1])
    lis.push(param[i])}
  i=-1
  let x=0
  for (rword of lis){
    i++
    if (lis[i]!=lis[i+1]){
      rlis.push(lis[i],i+2)}}
  i=-1
  for (ronce of rlis){
    i++
    if (i==0){
      flis.push(rlis[i],rlis[i+1])}
    if (isNaN(rlis[i]) && i!=0){
      flis.push(rlis[i],(rlis[i+1]-rlis[i-1]+1))}}  
  return flis} 
  Este funciona pero es demasiado complicado*/ 

const splitWords=(list,lis=[],i=0)=>{for(word of list){i++;if(word!=list[i]){lis.push(word)}}return [lis,list]}
const countWords=(list,lis=[],i=-1)=>{
    for(word of list[0]){lis.push(list[1].filter(thing => thing==word))}
    for(wordlist of lis){i++;lis[i]=[lis[i][0],lis[i].length]}
    return lis}
  
const wichWordRepeat=(list)=>{return countWords(splitWords(list))}
  
console.log(wichWordRepeat(counterWords))