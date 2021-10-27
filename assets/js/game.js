//Game States
//"WIN"-Player robot has defeated all enemy -robots
//*Fight all enemy-robots
//*Defeat each enemy-robot
//"LOSE"-Player robots's health is zero or less

// Initial prompt
var playerName=window.prompt("What is your robots's name?");
//Adding robot gladiators info
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once 
console.log(playerName, playerAttack, playerHealth);

//Robot Combatants

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


//creating function named "fight" start
window.alert('Welcome to Robot Gladiators!');

var fight = function(enemyName) {
    //repeat and execute as long as enemy-robot is alive
while(playerHealth >0 && enemyHealth > 0) {
    //Ask player if they'd like to fight or run
    var promptFight=window.prompt('Would you like to Fight or Skip this battle? Enter "fight" or "skip" to choose.');
    //if player choses to skip
if (promptFight ==="skip" || promptFight==="SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you's like to quit?");
    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money form playerMoney for skipping
        playerMoney=playerMoney - 10;
        console.log("playerMoney",playerMoney);
        break;
    }
    else {
        window.alert("You need to choose a valid option. Try Again!");
    }
}
    //Subract the vlaue of 'playerAttack from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth=enemyHealth - playerAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " +enemyName+ ". " + enemyName+ " now has "+ enemyHealth + " health remaining. ");
    //check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //Subract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the vlaue in the 'playerHealth' valiable
    playerHealth=playerHealth-enemyAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked " +playerName+ ". " + playerName+ " now has "+ playerHealth + " health remaining. ");
    //check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
        break;
    }
    else {
        window.alert(playerName + " still has " +playerHealth + " health left.");
    }

}

};

for (var i=0; i <enemyNames.length; i++) {
    var pickedEnemyName=enemyNames[i];
    enemyHealth=50;
    fight(pickedEnemyName);
}
//fight();
