const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },];

const splitMovies=(list,short=[],medium=[],large=[])=>{for (m of list){
    if (m.durationInMinutes<100){short.push(m)}
    if (m.durationInMinutes>=200){large.push(m)}
    if (m.durationInMinutes>=100 && m.durationInMinutes<200){medium.push(m)}
    if (m.durationInMinutes<0){console.log(`${movie.name} tiene la duración negativa => ${movie.durationInMinutes}. Arréglalo`)}}
    console.log('short')
    console.log(short)
    console.log('medium')
    console.log(medium)
    console.log('large')
    console.log(large)}
splitMovies(movies)