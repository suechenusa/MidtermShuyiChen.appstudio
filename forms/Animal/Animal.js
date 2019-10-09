//a.array which have all the animal
let animal = ["dog", "cat", "horse", "mouse", "pig", "cow", "ferret", "lizard", "frog"]

//b.create a variable to get the animal from user
let newAnimal = prompt("Enter a new animal")
//c.make the newAinimal become lower case
newAnimal = newAnimal.toLowerCase()
//b.put the newAnimal into the arrya
animal.push(newAnimal)
//check what inside the array
console.log(animal)

//d.output the last animal in the array
alert(`The last animal is ${animal[animal.length-1]}`)