const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'},
            {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];
for (let des of placesToTravel){
    if (des.id==11 || des.id==40){
        placesToTravel.splice(placesToTravel.indexOf(des),1)}};
console.log(placesToTravel)
