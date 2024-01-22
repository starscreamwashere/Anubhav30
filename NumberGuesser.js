const prompt=require('prompt-sync')()
let ans=Math.floor(Math.random()*100)
//let input=prompt("enter a number between 1 to 100")
//input=Number.parseInt(input)
let guess=0;
let score;
let input;
do{
input=prompt("enter a number between 1 to 100")
input=Number.parseInt(input)
if(input == ans){
    guess++;
    score=100-guess;
    console.log("Number of guesses is ",guess)
    console.log("Score is ",score)
    break;
}
else{
    if(input<ans){
    guess++
    console.log("Correct answer is greater than ",input)}
    else{
    guess++
    console.log("Correct answer is lesser than ",input)}
    }
}while(input!=ans)






