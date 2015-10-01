var count = 0;
var userName = prompt('Hello, please enter your name: ');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');

// The Three Questions
//////////////////////////////////////////////////////////////////////////////////////

function question1func() {

    var question1 = prompt('Do you learn during the lab time?');

    if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
        one.innerHTML = ('Great ' + userName + '!');
        count = count + 1;
    } else if (question1.toUpperCase() === 'NO' || question1.toUpperCase() === 'N') {
        one.innerHTML = ('No, ' + userName + ' that\'s not the right answer');
    } else {
        one.innerHTML = ('Plz provide a relevant response.');
    }


// Taking the Answer and Logging it with a meaning message
console.log('This is what you answered for Question1 ' + question1.toUpperCase());
}

//////////////////////////////////////////////////////////////////////////////////////

function question2func() {
    var question2 = prompt('Is it raining today?');

    if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y') {
        two.innerHTML = ('Lucky you ' + userName + '!');
        count = count + 1;
    } else if (question2.toUpperCase() === 'NO' || question2.toUpperCase() === 'N') {
        two.innerHTML = ('No, ' + userName + ' That\'s not the right answer');
    } else {
        two.innerHTML = ('Please Provide a relevant response.');
    }

    console.log('This is what you answered for Question2 ' + question2.toUpperCase());
}
//////////////////////////////////////////////////////////////////////////////////////

function question3func() {
    var question3 = prompt('Are you excited to learn more coding?');

    if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
        three.innerHTML = ('Fantastic ' + userName + '!');
        count = count + 1;
    } else if (question3.toUpperCase() === 'NO' || question3.toUpperCase() === 'N') {
        three.innerHTML = ('No, ' + userName + ' that\'s not the right answer');
    } else {
        three.innerHTML = ('Please ' + userName + ', provide a relevant response.');
    }
    console.log('This is what you answered for Question3 ' + question3.toUpperCase());

}
//////////////////////////////////////////////////////////////////////////////////////
question1func();
question2func();
question3func();


//Count the Correct answers
alert('Hi ' + userName + '!! You have got ' + count + ' right answers!! Thanks for Playing.');
