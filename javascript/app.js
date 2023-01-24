
function name () {

  let name = prompt("Hello! What is your name?");
  alert("Welcome Back! " + name);
 
}

function volunteer() {
  let volunteer = prompt("Would you like volunteer at your local pet shelter? yes/no");

  if ( volunteer==="yes" ) {
    alert("Please contact your local pet shelter to let them know!");
  }

  else if ( volunteer==="no" ) {
    alert("Please consider volunteering at a later time! We would love your company!");
  }
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
    alert("Great! We have 30 females waiting to be adopted");
}

  else {
    alert("Oops! Please try again!");
}
}
