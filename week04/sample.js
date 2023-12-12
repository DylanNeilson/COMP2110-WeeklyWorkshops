let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');

function change_colour(id, color){
    let first = document.getElementById(id);
    first.style = 'background-color: ' + color;
}

button1.onclick = function() {
    //alert("Button 1 pressed");
    console.log("Button 1 pressed");
    change_colour('button2', 'red');
    change_colour('button4', 'red');
}

button2.onclick = function() {
    //alert("Button 2 pressed");
    console.log("Button 2 pressed");
    change_colour('button1', 'yellow');
    change_colour('button3', 'yellow');
}

button3.onclick = function() {
    //alert("Button 3 pressed");
    console.log("Button 3 pressed");
    change_colour('button2', 'yellow');
    change_colour('button4', 'red');
}

button4.onclick = function() {
    //alert("Button 4 pressed");
    console.log("Button 4 pressed");
    change_colour('button3', 'red');
    change_colour('button1', 'red');
}