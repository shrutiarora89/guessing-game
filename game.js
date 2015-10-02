
var count = 0;
var userName = prompt('Hello, please enter your name: ');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var correctAnswers = document.getElementById('correctAnswers');

var questions = ['Do you learn during the lab time?', 'Is it raining today?', 'Are you excited to learn more coding?'];
var answers = ['YES', 'Y', 'NO', 'N'];

// The Three Questions
//////////////////////////////////////////////////////////////////////////////////////
function question1func() {

    var question1 = prompt(questions[0]);

    if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[1]) {
        one.innerHTML = ('Great ' + userName + '!');
        count = count + 1;
    } else if (question1.toUpperCase() === answers[2] || question1.toUpperCase() === answers[3]) {
        one.innerHTML = ('No, ' + userName + ' that\'s not the right answer');
    } else {
        one.innerHTML = ('Plz provide a relevant response.');
    }

    // Taking the Answer and Logging it with a meaning message
    console.log('This is what you answered for Question1 ' + question1.toUpperCase());
}
//////////////////////////////////////////////////////////////////////////////////////

function question2func() {
    var question2 = prompt(questions[1]);

    if (question2.toUpperCase() === answers[0] || question2.toUpperCase() === answers[1]) {
        two.innerHTML = ('Lucky you ' + userName + '!');
        count = count + 1;
    } else if (question2.toUpperCase() === answers[2] || question2.toUpperCase() === answers[3]) {
        two.innerHTML = ('No, ' + userName + ' That\'s not the right answer');
    } else {
        two.innerHTML = ('Please Provide a relevant response.');
    }

    console.log('This is what you answered for Question2 ' + question2.toUpperCase());
}
//////////////////////////////////////////////////////////////////////////////////////

function question3func() {
    var question3 = prompt(questions[2]);

    if (question3.toUpperCase() === answers[0] || question3.toUpperCase() === answers[1]) {
        three.innerHTML = ('Fantastic ' + userName + '!');
        count = count + 1;
    } else if (question3.toUpperCase() === answers[2] || question3.toUpperCase() === answers[3]) {
        three.innerHTML = ('No, ' + userName + ' that\'s not the right answer');
    } else {
        three.innerHTML = ('Please ' + userName + ', provide a relevant response.');
    }
    console.log('This is what you answered for Question3 ' + question3.toUpperCase());

}
//////////////////////////////////////////////////////////////////////////////////////
//Here the question functions are called.
question1func();
question2func();
question3func();


//Count the Correct answers
correctAnswers.innerHTML = ('Hi ' + userName + '!! You have got ' + count + ' right answers!! Thanks for Playing.');
