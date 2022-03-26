function favBike () {
    let favBike = prompt("What is your favorite Motorcycle?");
    document.write("That's cool! "+ favBike + " deserved an Trophy!");
  }
  
  function R1() {
    let answer;
    let guesses = 0;
  
    do {
      guesses++;
      answer = prompt("Guess how many R1 Types there are?");
    } while (parseInt(answer) !== 6)
  
    if (parseInt(answer) === 6) {
      document.write("It took you " + guesses + " time(s) to guess the correct answer.")
    }
  
  }
  
  function rating() {
    let output = '';
    let rating = prompt("Scale of 1-5 how much do you love to ride Motorcycels?");
  
    for (let i = 0; i < rating; i++) {
      output += "<img src='/2000000037.jpg' />";
    }
  
    document.write(output);
  
  }

