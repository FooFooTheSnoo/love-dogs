
function name () {
  let name = prompt("What is your name?");
  alert("Welcome Back! " + name);
 
}

// Function to be applied later
function amountOfCats() {
    let amountOfCats = prompt("How many cats would you like to adopt?");
    alert("Wow! Thank you for adopting " + amountOfCats + " cats!");
}

function amountOfDogs() {
  let amountOfDogs = prompt("How many dogs would you like to adopt?");
  alert("Wow! Thanks for adopting " + amountOfDogs + " dogs!");
}

function dogSex() {
  let dogSex = prompt("Would you like a male or female dog?");
  if (dogSex==="male") {
    alert("Great! 20 male dogs waiting to be adopted");
}

else if ( dogSex === "female" ) {
    alert("Great! We have 30 females waiting to be adopted")
}

else {
    alert("Oops! Please try again!")
}
}
