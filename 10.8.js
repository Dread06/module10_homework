let myMap = new Map();
myMap.set('карандаши', 15);
myMap.set('шариковые ручки', "8 упаковок");
myMap.set('тетрадки в клеточку', 38);
myMap.set('ластики', 18);

for (let item of myMap.keys()) {
    console.log(`Товар: ${item} в количестве: ${myMap.get(item)}`)
}
