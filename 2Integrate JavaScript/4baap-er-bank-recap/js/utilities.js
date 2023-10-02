//for input
function getInputFieldValueById(inputTk) {
  const inputField = document.getElementById(inputTk);
  const inputFieldValueString = inputField.value;
  const input = parseFloat(inputFieldValueString);
  inputField.value = "";
  return input;
}
//for output
function getOutputValueById(outputTk) {
  const outputValue = document.getElementById(outputTk);
  const outputValueString = outputValue.innerText;
  const output = parseFloat(outputValueString);
  return output;
}
/* const previousDepositTotal=getOutputValueById('deposit-total')
  const newDepositTotal=previousDepositTotal+newDepositAmount;
  const previousBalanceTotal=getOutputValueById('balance-total');
  const newBalanceTotal=previousBalanceTotal+newDepositAmount;
  */
function setTextOutputValueByID(elementId, newValue) {
  const textOutput = document.getElementById(elementId);
  textOutput.innerText = newValue;
}
/* setTextOutputValueByID('deposit-total',newDepositTotal);
setTextOutputValueByID('balance-total',newBalanceTotal); */