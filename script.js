let number =  Math.floor(Math.random()*100) + 1;
console.log(`Number = ${number}`);
let gussbtn = document.querySelector("#gEnter");
let input = document.querySelector("#guessValue");
let result = document.querySelector("#result");
let rbtn = document.querySelector("#rbtn");
let count = document.querySelector("#count");

let attempt =  0;
let guss = 0;
let check = 1;

gussbtn.addEventListener("click" , function(){
  guss = input.value;
  input.value = "";
  if(check){
      if(guss == number){
        result.innerHTML = `You successfully guessed the Number in <b>${attempt} Attempts</b> <br> Click the reset Button play again.`;
        check = 0;
      }
      else if(guss >number && guss>=0 && guss != ""){
        result.innerHTML = `Number is <b>smaller</b> than your gussed number.`;
        attempt++;

      }
      else if(guss <number && guss>=0 && guss != ""){
        result.innerHTML = `Number is <b>Bigger</b> then your gussed number.`;
        attempt++;
      }
      else{
            result.innerHTML = `<b>Invalid Number</b><br>Enter the Valid Number `;

      }
      count.innerText = `${attempt}`;
}

});


rbtn.addEventListener("click" , function(){
  check = 1;
  guss = 0;
  attempt = 0;
  result.innerHTML = `Guess a number between <b>1 and 100</b>`;
  count.innerText = `${attempt}`; 
  number =  Math.floor(Math.random()*100) + 1;
  console.log(`Number = ${number}`);

})




