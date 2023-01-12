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