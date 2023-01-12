const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];
const ageDif=(list,n=2)=>{
    if(n==1){for (user of list){if(user.years<18){console.log(user)}}}
    if(n==0){for (user of list){if(user.years>=18){console.log(user)}}}
    else{console.log("Introduce como segundo argumento un 0 para mostrar los mayores de edad, 1 para los menores.")}}
ageDif(users,0)