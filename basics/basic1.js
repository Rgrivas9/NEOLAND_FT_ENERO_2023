const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},];
function extractcat(list,clist=[]){for (movie of movies){for (categorie of movie.categories){clist.push(categorie)}}
    return clist.sort()}
//function deleterep(list,lis=[]){
  //  let i=-1
    //console.log(list)
    //for (cat of list){
      //  i++
        //console.log(i,list[i],list[i+1],cat,list[(list.indexOf(cat))+1])}} 
        //El problema con list[(list.indexOf(cat))+1] es que obtiene el índice del primer elemento que se repite.
function deleterep(list,lis=[],i=-1){
    for (cat of list){i++
        if (i==(list.length-1)){if (cat.toUpperCase().includes(list[i-1].toUpperCase())==false){lis.push(cat)}}
        if (i!=(list.length-1)){if (cat.toUpperCase().includes(list[i+1].toUpperCase())==false){lis.push(cat)}}}
    return lis}
function noRepeat(list){return deleterep(extractcat(list))}