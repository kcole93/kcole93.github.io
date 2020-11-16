// Get the hour
var today = new Date();
var hour = today.getHours();

// Here you can change your name
var name = 'Kevin';

// Here you can change your greetings
var gree1 = `Go to sleep, ${name}!`;
var gree2 = `☕ Good morning, ${name}`;
var gree3 = `Good afternoon, ${name}`;
var gree4 = `Good evening, ${name}`;


// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
    document.getElementById('greetings').innerText = gree1;
} else if (hour >= 6 && hour < 12) {
    document.getElementById('greetings').innerText = gree2;
} else if (hour >= 12 && hour < 17) {
    document.getElementById('greetings').innerText = gree3;
} else  {
    document.getElementById('greetings').innerText = gree4;
}
