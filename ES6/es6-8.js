const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 10},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 9.5},]
const averageScore=videogames.filter(videogame => videogame.genders.includes('RPG')).reduce((acc, exam) => acc + exam.score, 0)
                 / videogames.filter(videogame => videogame.genders.includes('RPG')).length
console.log(averageScore)