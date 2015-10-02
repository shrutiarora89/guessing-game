
var count = 0;
var userName = prompt('Hello, please enter your name: ');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
//var four = document.getElementById('four');
var correctAnswers = document.getElementById('correctAnswers');

var questions = ['Do you learn during the lab time?', 'Is it raining today?', 'Are you excited to learn more coding?', 'What is your favorite food?'];
var answers = ['YES', 'Y', 'NO', 'N'];

// The Three Questions
//////////////////////////////////////////////////////////////////////////////////////
function question1func() {

  var question1 = prompt(questions[0]);

  if (question1.toUpperCase() === answers[0] || question1.toUpperCase() === answers[1]) {
    one.innerHTML = ('Great ' + userName + '!');
    count = count + 1;
    console.log(count);
    img1.innerHTML = '<img src="img/codefellows.png" width="200">';
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
    console.log(count);
    img2.innerHTML = '<img src="img/seattlerain.jpg" width="200">';
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
    console.log(count);
    img3.innerHTML = '<img src="img/javascript.png" width="200">';
  } else if (question3.toUpperCase() === answers[2] || question3.toUpperCase() === answers[3]) {
    three.innerHTML = ('No, ' + userName + ' that\'s not the right answer');
  } else {
    three.innerHTML = ('Please ' + userName + ', provide a relevant response.');
  }
  console.log('This is what you answered for Question3 ' + question3.toUpperCase());

}
//////////////////////////////////////////////////////////////////////////////////////

// Add a fourth question that utilizes an array of possible answers, and then use a 'for' loop
//  to check for a right answer: Here's the basic process: create a function for your fourth question 
//  (make sure to remember to call it later!) and inside of that function, declare and initialize an 
//  array of answers for that question (for instance, "Who is my favorite Seahawk?"). Use a 'for' loop
//  to iterate through that array and test whether it matches the user's guess. As before, provide

//function question4func() {
//   var foodAnswers = ['BURGER', 'RICE', 'NOODLES', 'TACOS'];

//   var question4 = prompt(questions[3]);
//     for (var i = 0; i < 4; i++) {
    
//     if (question4.toUpperCase() === foodAnswers[i]) {
//       four.innerHTML = ('This is correct ' + userName + '.');
//       count = count + 1;
//     } else {
//       four.innerHTML = ('No, ' + userName + ' that\'s not the right answer');
//     }
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////

//Here the question functions are called.
question1func();
question2func();
question3func();
// window.setTimeout(question2func, 1000);
// window.setTimeout(question3func, 1000);
// question4func();


//Count the Correct answers
correctAnswers.innerHTML = ('Hi ' + userName + '!! You have got ' + count + ' right answers!! Thanks for Playing.');
