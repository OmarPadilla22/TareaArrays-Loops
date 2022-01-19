/*
Exercise #1
Part 1
There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

Part 2
Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

Part 3
It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?
*/

var fila = ["Sofia", "David", "Juan"];

console.log(fila);

fila.push("Sara", "Augustin");
fila.splice(0,1);
console.log(fila);

fila.splice(0,1);
fila.unshift("Renata");
fila.push("Elena");
console.log(fila);


/*
Exercise #2
Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *
*/

var a = ["*","**", "***", "****", "*****"];
for (var i= 0; i< a.length; i++){
    console.log(a[i]);
}


/*
Exercise #3
Write while loops to do the following:

– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive.
- Print all the odd numbers between 1 - 100.
- Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]
- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190
*/

/*---------------Punto 1----------------------------------
var x = parseInt(prompt("Dame un numero del 5 al 10 "));

while (x-= .5){
    console.log(x);
}------------------------------------------------------------*/


/*---------------Punto 2----------------------------------
var y = 100;

while (y-= 1){
    console.log(y);
}
------------------------------------------------------------*/


/*---------------Punto 3----------------------------------
var d = parseInt(prompt("Dame un numero del 5 al 10"));

while(d>0){
    d--;
    alert("[" + (d+1) + "]");
}
------------------------------------------------------------*/


/*---------------Punto 4------------------------------------
var h =  parseInt(prompt("Dame un numero"));
var sum = 0;
var t = 0;

while(t<h){
t++;
sum += t;
}
alert("Tu numero es " + h + " y su suma es = " + sum);
-----------------------------------------------------------*/
