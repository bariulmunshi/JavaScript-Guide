 document.getElementById('submit-deposit').addEventListener('click',function(){
  //for input 
  const  depositField= document.getElementById('deposit-input');
  const newDepositAmountString =depositField.value;
  const newDepositAmount=parseFloat(newDepositAmountString);
  depositField.value=''; //clear the deposit field

  //for output
  const depositTotalElement=document.getElementById('deposit-total');
  const previousDepositTotalString=depositTotalElement.innerText;
  const previousDepositTotal=parseFloat(previousDepositTotalString);
  const currentDepositTotal=previousDepositTotal+newDepositAmount;
  depositTotalElement.innerText= currentDepositTotal;
   
  //output of balance total
  const balanceTotalElement=document.getElementById('total-balance');
  const previousBalanceTotalString=balanceTotalElement.innerText;
  const previousBalanceTotal=parseFloat(previousBalanceTotalString); 
  const currentBalanceTotal=previousBalanceTotal+newDepositAmount;
  balanceTotalElement.innerText=currentBalanceTotal;
}) 
/* document.getElementById("submit-deposit").addEventListener("click",function(){
  //for input field
  const depositField=document.getElementById("deposit-input");
  const newDepositAmountString=depositField.value;
  const newDepositAmount=parseFloat(newDepositAmountString);
  depositField.value='';

  //for Output field
  const depositOutputField=document.getElementById("deposit-total");
  const previousDepositTotalFieldString=depositOutputField.innerText;
  const previousDepositTotal=parseFloat(previousDepositTotalFieldString);
  const currentDepositTotal=newDepositAmount+previousDepositTotal;
  depositOutputField.innerHTML=currentDepositTotal;
  
  //for output field total
  const totalBalance=document.getElementById("total-balance");

  

  
}) */
