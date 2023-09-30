//options-1:Directly set on the HTML element
{/* <button onclick="console.log(7)">Click Me</button> */}
//option-2:
console.log('This is separated JS file')
function makeRed() {
    document.body.style.background='red';
}

//option-3:
const makeBlueButton=document.getElementById("make-blue");
makeBlueButton.onclick=makeBlue;

function makeBlue() {
    document.body.style.background='blue';
}

/* Option-3:another onclick */
const purpleButton=document.getElementById('make-purple')
purpleButton.onclick=function makePurple(){
  document.body.style.background='purple';
}

/* option-4: onclick */ 
const pinkBtn=document.getElementById('make-pink');
pinkBtn.addEventListener('click',makePink);
function makePink(){
  document.body.style.backgroundColor='pink';
}

/* option-4:another onclick */
const greenBtn=document.getElementById('make-green');
greenBtn.addEventListener('click',function makeGreen(){
  document.body.style.backgroundColor='green';
})

/* option-4: final onclick (important we will use it) */
document.getElementById('make-goldenRod').addEventListener('click',function (){
    document.body.style.backgroundColor='goldenrod';
  })