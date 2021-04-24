// countDown timer from 10 to 1, then print Blast Off!!
function countDown() {
    var count = 10;
    // countDown starts at 10
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1
    // 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);
    //8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);
    //7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);
    //6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);
    //5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);
    //4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);
    //3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);
    //2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);
    //1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);
    //Blast Off!!!
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!!!";
        count = count - 1;
    }, 10000);
}
//Parameters and variables for Crap game.
function playCraps() {
    //Creates variables of die1,die2, and sum.
    var die1;
    var die2;
    var sum;
    //Creates random number generator for die1, and die2. Sets numbers between 1-6 and rounded up.
    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    //Sets equation to determine sum of Craps round.
    sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sumRes").innerHTML = sum;
    //"If/then statements" determining lose, win, or play again outcome.
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsReults").innerHTML = "Craps! You Lose!!";
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsReults").innerHTML = "Doubles, You WIN!!";
    } else {
        document.getElementById("crapsReults").innerHTML = "Push, Please roll again.";
    }
}


