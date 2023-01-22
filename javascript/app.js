let name = prompt("What is your name?");
alert("Welcome Back! " + name);

let AmountOfDogs = prompt("How many dogs would you like to adopt?");
alert("Wow! Thanks for adopting " + AmountOfDogs + " dogs!");

let DogSex = prompt("Would you like a male or female dog?");
if (DogSex==="male") {
    alert("Great! 20 male dogs waiting to be adopted");
}

else if (DogSex==="female") {
    alert("Great! We have 30 females waiting to be adopted")
}

else {
    alert("Oops! Please try again!")
}

