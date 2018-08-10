var guessNum = document.getElementById('guess');
var submitNum = document.getElementById('submit');
var feedback = document.querySelector('.feedback');
var originText = feedback.innerHTML;
var random = Number(parseInt(Math.random()*100) + 1);

var addNum = document.getElementById('add');
var subtractNum = document.getElementById('subtract');

guessNum.onkeydown = function(event) {
  let code = event.keyCode;
  if (code === 13) {
    submitNum.click()
  } else if (code === 38){
    addNum.click()
  } else if (code === 40){
    subtractNum.click()
  }
}

// add and subtract button
addNum.addEventListener('click',function(){editNum('add')})
subtractNum.addEventListener('click',function(){editNum('subtract')})

function editNum(action){
  let num = Number(guessNum.value);
  if (action=='add'){
    guessNum.value = num + 1;
  } else if (action=='subtract'){
    guessNum.value = num - 1;
  }
  guessNum.focus();
}

//submit guessing number
submitNum.onclick = function(){
  let num = Number(guessNum.value);
  feedback.classList.add('warning');
  if ( num == '' ){
    feedback.innerHTML = "You haven't input any number!";
  } else if ( isNaN(num) ){
    feedback.innerHTML = "It's not a number!"
  } else if ( num > 100 || num < 1 ){
    feedback.innerHTML = "Your number must between 1 and 100."
  } else if(!Number.isInteger(num)){
    feedback.innerHTML = "Please enter an INTERGER"
  } else {
    compare();
    countTimes();
  }
  guessNum.focus();
};

//compare with random number
function compare(){
  feedback.classList.remove('warning');
  let num = Number(guessNum.value);
  let sd = 10;
  if ( num > random ) {
    if( Math.abs(num-random) <= sd ){
      feedback.innerHTML = "Too high, But very close!"
    } else {
      feedback.innerHTML = "Too high!"
    }
  } else if ( num < random ) {
    if( Math.abs(num-random) <= sd ){
      feedback.innerHTML = "Too low, But very close!"
    } else {
      feedback.innerHTML = "Too low!"
    }
  } else if ( num === random ) {
    feedback.innerHTML = "Bingo!!!";
    feedback.classList.add('bingo');
    again();
  };
}

//times counter
function countTimes(suatus){
  let counter = document.querySelector('.counter');
  let span = counter.getElementsByTagName('span')[0];
  let times = Number(span.innerHTML);
  times += 1;
  span.innerHTML = times;
  if (suatus=='toZero'){
    span.innerHTML = 0
  }
}

//guess again: after "bingo"
function again(){
  submitNum.style.display = 'none';
  let btn = document.createElement('button');
  btn.setAttribute('class', 'submit');
  btn.innerHTML = 'guess again';
  submitNum.insertAdjacentElement('afterend',btn);
  btn.onclick = function(){
    random = Number(parseInt(Math.random()*100) + 1);
    btn.remove();
    guessNum.value = '';
    countTimes('toZero');
    submitNum.style.display = 'inline-block';
    feedback.innerHTML = originText;
    feedback.classList.remove('bingo');
    guessNum.focus();
  }
}