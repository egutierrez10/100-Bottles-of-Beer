var numberOfBottles = 100;

while(numberOfBottles > 0){
    var bottleWord = checkBottleWord(numberOfBottles);
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    bottleWord = checkBottleWord(numberOfBottles);
    if(numberOfBottles === 0)
        console.log("No more bottles of beer on the wall.\n");
    else
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.\n");
}

function checkBottleWord(n){
    var bottleWord = "bottles";
    if(n === 1){
        bottleWord = "bottle";
    }
    return bottleWord;
}