// creates variables for the player robot 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// log player variables
console.log(playerName, playerAttack, playerHealth, playerMoney);

// creates variables for the enemy robot
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// log enemy variables
console.log(enemyNames, enemyAttack, enemyHealth);

// retrieve and log enemyNames from array 

// console.log(enemyNames.length);
// for(var i = 0; i < enemyNames.length; i++) {
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index ")
// }

// fight function 
var fight = function(enemyName) {
   // fight function statements


    // alert players they are starting a round  
    window.alert("Welcome to Robot Gladiators!");

    // prompt player to fight or skip 
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //console.log(promptFight);

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // log a resulting message to the console so we know that it worked.
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
         } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        
        // log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
        )

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } 
         else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;

      window.alert(playerName + " has decided to skip this fight. Goodbye!" + playerMoney);
      
    }
     
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
     } else {
        // invalid user entry warning 
        window.alert("You need to choose a valid option. Try again!");
      }
 };
// execute fight function

for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
// game states
// WIN: player has defeated all other robots
  // Fight all enemy robots
  // Defeat all enemy robots

// LOSE: player robot health is less than or equal to 0
