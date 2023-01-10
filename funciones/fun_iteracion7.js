const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
function finderName(param,arg) {
    let n=arg.toUpperCase(),i=-1,x=0
    for (nom of param){
        i++
        param[i]=nom.toUpperCase()
        if (n==param[i]){const x=param.indexOf(param[i])
    if (x!=0){return [true,x]}}}
    if (x==0){return false}}


  