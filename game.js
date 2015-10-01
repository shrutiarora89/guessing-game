var count = 0;

// The Three Questions
var question1 = prompt('Do you learn during the lab time?');

//////////////////////////////////////////////////////////////////////////////////////
if(question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y'){
	alert('Great!');
	count=count+1;
}
else if(question1.toUpperCase() === 'NO' || question1.toUpperCase() === 'N'){
	alert('No, That\'s not the right answer');
}
else {
	alert('Plz provide a relevant response.');
}

// Taking the Answer and Logging it with a meaning message
console.log('This is what you answered for Question1 ' + question1.toUpperCase());
//////////////////////////////////////////////////////////////////////////////////////
var question2 = prompt('Is it raining today?');

if(question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y'){
	alert('Lucky you');
	count=count+1;
}
else if(question2.toUpperCase() === 'NO' || question2.toUpperCase() === 'N'){
	alert('No, That\'s not the right answer');
}
else {
	alert('Please Provide a relevant response.');
}

console.log('This is what you answered for Question2 ' + question2.toUpperCase());

//////////////////////////////////////////////////////////////////////////////////////

var question3 = prompt('Are you excited to learn more coding?');

if(question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y'){
	alert('Lucky you');
	count=count+1;
}
else if(question3.toUpperCase() === 'NO' || question3.toUpperCase() === 'N'){
	alert('No, That\'s not the right answer');
}
else {
	alert('Please Provide a relevant response.');
}
//////////////////////////////////////////////////////////////////////////////////////

//Count the Correct answers
alert('Hi!! You have got,' + count +' right answers!!Thanks for Playing.');




