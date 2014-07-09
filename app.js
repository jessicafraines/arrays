var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

console.log(chalk.blue('this is blue text'));
console.log(chalk.blue.bgRed.bold('Hello world!'));


var evens = [2,4,6,8];
console.log(evens);
console.log(evens[1]);
console.log(chalk.red(evens[1]));


/*print out even numbers in blue and odd numbers in red. 
 * divide by 2 to find evens and odds*/

//the 10 below says to stop at 10
for(var i = 0;i<10; i++){
  if (i%2 === 0){
  //even
  console.log(chalk.red(i));
  }else{
    //odd
  console.log(chalk.cyan(i));
}
}
//to print out evens only THIS IS HOW YOU LOOP AN ARRAY

//for(var j = 0;j<= evens.length - 1; j++){
//or you could do
//for(var j = 0; <evens.length; j++)
for(var j = 0;j<= evens.length - 1; j++){
  console.log(  evens[j]  );}


var numbers=[];
var response = prompt('Enter a number or (q)uit: ');
while(response != 'q'){  //so since a number is not equal to q, this is true and moves on
  response =parseInt(response);
  numbers.push(response);
  response = prompt('Enter a number or (q)uit: ');
}
//this gets the sum of the numbers that they have entered from the loop above
var sum = 0 //this is what you want to start adding numbers to
for(var k = 0; k < numbers.length; k++){  //this says k=0; if k(0) < the amt of #s in the array then jump to line below
  sum = sum+numbers[k];  //once you do this it loops back up to the next # in the array and adds 1(k++)
}
  console.log(numbers);
  console.log('The sum of the numbers ', sum + '.');

