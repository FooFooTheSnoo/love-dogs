
function name () {

  let name = prompt("Hello! What is your name?");
  alert("Welcome Back! " + name);
 
}

function volunteer() {
  let volunteer = prompt("Would you like volunteer at your local pet shelter? yes/no");

  if ( volunteer==="yes" ) {
    alert("Click the button on the home page!");
  }

  else if ( volunteer==="no" ) {
    alert("If you change your mind, you can click the button on the home page that says 'Volunteer' ");
  }
}

function yesVolunteer() {
confirm("Thank you for your time deposit of 8 hours!")
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
