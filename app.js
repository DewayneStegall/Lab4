function hello() {
    let name = prompt("Welcome to my website, what is your name?");
    document.write("It is cool to meet you "+ name);
    }   
function bikes() {
    let favorite = prompt("What 3 Bikes do you like the Most?);
    document.write("Your choice is: " + favorite);
        if ( favorite === "R1") {
            document.write("That's a great choice!");   
            }
        else if (favorite === "CBR") {
            document.write("Not bad, but you could pick better.");
            }
        else if (favorite === "BMW") {
            document.write("Perfect");
            } else { 
        document.write("The 3 staples of any industry");
            }
        }
function color() {   
        let number = 1;
        console.log(number++)

        alert("What are your 2 fav colors?")
        for( let i = 1 ; i <= 2; i++ ) {
            let color = prompt("Your favorite colors #" + i);
            document.write(color)
        }
    }
function name() {     
        let nameCorrect = false;
        let BikeCorrect = false;
        let Bike;

        while( ! nameCorrect ) {
          let name = prompt("What Bike is the Best?");
          if ( name.toLowerCase() === "R1" ) { 
              nameCorrect = true;
              document.write(Brand) 
            }
        }
        
        do {
          CCs = prompt('How Many CC's is a R1');
          if ( parseInt(CC's) === 100 ) { ccscorrect = true; }
          } while ( ccsCorrect != true )
          document.write(CCs)
        
        }
function rating() {
    let output='';
    let rating = prompt("How good are these bikes?")

    for (let i = 0; i < rating; i++) {
    }

    document.write(output);
    
    

}
