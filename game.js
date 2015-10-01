
// The Three Questions
var question1 = prompt('Do you learn during the lab time?');

//////////////////////////////////////////////////////////////////////////////////////
var count = 0;

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





