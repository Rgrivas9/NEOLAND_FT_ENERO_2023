const alumns=[
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}];
for (a of alumns){
    if (a.T1 && a.T2 || a.T1 && a.T3 || a.T2 && a.T3){
        a.isAproved=true}
    else {a.isAproved=false}};
console.log(alumns)