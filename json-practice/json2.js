//char.json==https://rickandmortyapi.com/api/character
const data=require("./char.json");
const chars=data.results

//Función que pida lista, atributo/s, parámetro/s, Qué atributos
const listCharNames=(list)=>{return list.map(character=>character.name)}
const attLabels=(list,lis=[])=>{{for (att in list[0]){lis.push(att)}}return lis}
const findObjects=(charList,lis,list,att,oList=[])=>{for (char of charList){lis.push(list.filter(chars=>(chars[att].toLowerCase()).includes(char.toLowerCase())))}
    for (sl of lis){oList.push(sl[0])};return oList};
const removeAtt=(whatAtt,totalAtt)=>{for (att of whatAtt){for (tAt of totalAtt){if (att==tAt){totalAtt.splice(totalAtt.indexOf(tAt),1)}}}return totalAtt}
const removeAttFrom=(list,list2)=>{for (obj of list){for (att of list2){delete obj[att]}}return list}


//FALTA TENER EN CUENTA NUMEROS Y MAYUSCULAS Y MINUSCULAS
const findAnyAndAnything=(list=0,att=0,charList=0,whatAtt=0,lis=[],flis=[])=>{
    
    if (list==0){return "Introduce: [1] Para ver las instruciones. [2] Para ver más opciones."};
    if (list==1){return "Introducir 3 parámetros obligatorios: Array con objetos, atributo a buscar, valor o valores(en forma de array) del atributo a buscar. 1 parámetro opcional: Array de atributos del objeto a mostrar(Nada para todos)"};
    if (list==2){return "Introduce (array,1) para ver una lista con el nombre de los objetos. (array,2) para ver la lista de atributos. (array,3) para ver la longitud."};
    if (att==1){return listCharNames(list)};
    if (att==2){return attLabels(list)};
    if (att==3){return list.length};
    if (typeof(charList)=='string'){charList=[charList]};
    if (whatAtt==0){return findObjects(charList,lis,list,att)}; 
    if (typeof(whatAtt)=='string'){whatAtt=[whatAtt]};
    if (whatAtt!=0){return removeAttFrom(findObjects(charList,lis,list,att),removeAtt(whatAtt,attLabels(list)))}}
    
console.log(findAnyAndAnything(chars,'name',['beth','jerry'],['name','id']))