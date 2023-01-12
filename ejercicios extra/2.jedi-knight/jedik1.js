const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },];
const extractCat=(list,lis=[])=>{for (movie of list){for (cat of movie.categories){lis.push(cat)}}return lis}
const showCat=(list,lis=[],i=0)=>{for (cat of list.sort()){i++;if (cat!=list[i]){lis.push(cat)}}return lis}
console.log(showCat(extractCat(movies)))