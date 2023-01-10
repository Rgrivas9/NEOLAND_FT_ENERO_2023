const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    const lis=[];
    for (let nom of avengers){lis.push(nom.length)};
    lis.sort(function(a, b){return b-a});
    for (let nom of avengers){
        if (nom.length==lis[0]){return nom}}}