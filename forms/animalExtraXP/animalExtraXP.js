//a.array which have all the animal
let animal = ["dog", "cat", "horse", "mouse", "pig", "cow", "ferret", "lizard", "frog"]


for (i=0;i<2;i++){
  let newAnimal = prompt("Enter a new animal")
  newAnimal = newAnimal.toLowerCase()
  animal.push(newAnimal)
  alert(`The last animal is ${animal[animal.length-1]}`)
}

//two check if two times run successful
console.log(animal)