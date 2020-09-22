/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 21;

if (votingAge > 18){
    console.log(true);
}else{
    false;
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let num1 = 5;
const num2 = 7; 

if(num1 > num2){
    num1++;
}else{
    num1--;
}




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let year = "1999";
year = Number(year);




//Task d: Write a function to multiply a*b 
function multiply(a,b){
    return a*b
}

const multiply = (a,b) => (a * b); //arrow function

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
function ageInDogYears(age){
    return age*7;
}

const ageInDogYears = (age) => (age*7); //arrow function


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeeder(weight, age){
    if(age > 1){
        if(weight <= 5){
            return (weight*.05);
        }else if(weight <= 10){
            return (weight*.04);
        }else if(weight <= 15){
            return (weight*.03);
        }else{
            return (weight*.02);
        }
    }else{
        if(age >= (1/6) && age < (1/3)){
            return (weight*.1);
        }else if(age >= (1/3) && age < (7/12)){
            return (weight*.05);
        }else if(age >= (7/12) && age <= 1){
            return (weight*.04);
        }else{
            return 0;//puppy under 2 months should not eat dog food
        }
    }
}




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
function rockPaperSissors(yourChoice){
    let computersChoice = Math.floor(Math.random()*10); //0 to 2 rock, 3 to 6 paper, 7 to 9 sissors
    if(computersChoice < 3){
        computersChoice = "rock";
    } else if(computersChoice < 7){
        computersChoice = "paper";
    }else{
        computersChoice = "sissors";
    }
    
    if(yourChoice === computersChoice){
        return "tie, computer also selected " + computersChoice;
    }else if(yourChoice === "rock" && computersChoice === "paper"){
        return "computer selected paper, you lost";
    }else if (yourChoice === "rock" && computersChoice === "sissors"){
        return "computer selected sissors, you won";
    }else if (yourChoice === "paper" && computersChoice === "rock"){
        return "computer selected rock, you won";
    }else if (yourChoice === "paper" && computersChoice === "sissors"){
        return "computer selected sissors, you lost";
    }else if (yourChoice === "sissors" && computersChoice === "rock"){
        return "computer selected rock, you lost";
    }else{ //(yourChoice === "sissors" && computersChoice === "paper")
        return "computer selected paper, you won";
    }
}
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function kmToMiles(km){
    return km*0.621371;
}




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function feetToCM(feet){
    return feet*30.48;
}




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





