const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    const lis=[];
    for (let nom of avengers){lis.push(nom.length)};
    lis.sort(function(a, b){return b-a});
    for (let nom of avengers){
        if (nom.length==lis[0]){return nom}}}
//version2
function findLongestWord1(param){
    return findLongest(param,strtolength(param))}
function strtolength(list,lis=[]){
    for (let nom of avengers){lis.push(nom.length)}
    return lis};
function findLongest(list1,list2){
    list2.sort(function(a, b){return b-a})
    for (let nom of list1){
        if (nom.length==list2[0]){return nom}}}