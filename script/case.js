// Price of one Case
const singleCasePrice = 59;
// // function to update the case number 
// function updateCaseNumber(isIncrease){
//     // get the number from the case no. input field
//     const caseNumberField = document.getElementById('case-number-field');
//     const previousCaseNumber = parseInt(caseNumberField.value);
//     // increase or decrease the case no. acording to the button pressed
//     let newCaseNumber;
//     if(isIncrease){
//         newCaseNumber = previousCaseNumber + 1;
//     }
//     else{
//         newCaseNumber = previousCaseNumber - 1;
//     }
//     caseNumberField.value = newCaseNumber;
//     // return the new case no.
//     return newCaseNumber;
// }
// // function to update the total price of case
// function updateCasePrice(caseTotalPrice){
//     document.getElementById('case-total').innerText = caseTotalPrice;
// }
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// events occur when + button is clicked
document.getElementById('btn-case-plus').addEventListener('click', function(){
    // updateCasePrice(updateCaseNumber(true)*singleCasePrice);
    updateItemPrice(updateItemNumber(true, 'case-number-field'), singleCasePrice,'case-total');
    setSubtotal();
    setFinaltotal()
})
// events occur when - button is clicked
document.getElementById('btn-case-minus').addEventListener('click', function(){
    // updateCasePrice(updateCaseNumber(false)*singleCasePrice);
    updateItemPrice(updateItemNumber(false, 'case-number-field'), singleCasePrice,'case-total');
    setSubtotal();
    setFinaltotal()
})