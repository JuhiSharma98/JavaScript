const marvel_heros = ["thos", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
//console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Juhi")) //to check if such aerray is present or not
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hites"})) //interesting: gives empty array as it's not defined

