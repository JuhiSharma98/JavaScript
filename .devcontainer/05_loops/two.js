//maps
//UNIQUE VALUES AND STAYS IN SAME ORDER 
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")
console.log(map);

for (const [key, value] of map)
{
    console.log(key, ':-' ,value);
}


