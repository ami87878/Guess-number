 'use strict';
 







//  const secretNumber=Math.round(20*Math.random());// my own way
//  (secretNumber===0)? secretNumber===20 : secretNumber===secretNumber;
//  if(secretNumber>=1&&secretNumber=<20){

// secretNumber===secretNumber;


//  }
//console.log(secretNumber);

let number=Math.trunc(Math.random()*20)+1;


let score=20;
let highScore=0;







 document.querySelector('.check').addEventListener('click',function(){

 const guess=Number(document.querySelector(`.guess`).value);


 //when no input 
 if(!guess){

document.querySelector(`.message`).textContent=`you didn't enter number `;


 }

 //when player wins 
 else if(guess===number){

    document.querySelector(`.message`).textContent=`your guess is correct `;

   //document.body.style.background='green';// pishnahad khodam
   document.querySelector(`body`).style.background='#60b347';
   document.querySelector(`.number`).style.width='30rem';
   document.querySelector(`.number`).textContent=number;

   if(score>highScore){

highScore=score;

document.querySelector(`.highscore`).textContent=highScore;

   }



 }

 //when  input too high 
 else if(guess>number){

   if(score>1){


      document.querySelector(`.message`).textContent=`too high `;

      score--;
      
      document.querySelector(`.score`).textContent=score;
     // document.querySelector(`body`).style.background='#FC4242';
   


   }

   else{

      document.querySelector(`.message`).textContent=`you lost the game `;
      document.querySelector(`.score`).textContent=0;


   }
 



 }

  //when  input too low 
 else if(guess<number){

   if(score>1){
      
      
            document.querySelector(`.message`).textContent=`too low `;
      
            score--;
            
            document.querySelector(`.score`).textContent=score;
         
            //document.querySelector(`body`).style.background='#FC4242';
      
         }
      
         else{
            document.querySelector(`body`).style.backgroundColor='#FC4242';
      
            document.querySelector(`.message`).textContent=`you lost the game `;
      
        
            
            document.querySelector(`.score`).textContent=0;
            
      
      
         }

 }
 




 });

 document.querySelector('.again').addEventListener(`click`,function(){

   score=20;


document.querySelector('.number').textContent='?';
document.querySelector('.score').textContent=20;
document.querySelector('.guess').value='';

document.querySelector('.message').textContent='Start guessing...';

document.querySelector(`body`).style.backgroundColor='#222';
document.querySelector(`.number`).style.width='15rem';

number=Math.trunc(Math.random()*20)+1;




  })