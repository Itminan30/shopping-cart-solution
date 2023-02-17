// Price of one Phone
const singlePhonePrice = 1219;
// // function to update the phone number 
// function updatePhoneNumber(isIncrease){
//     // get the number from the phone no. input field
//     const phoneNumberField = document.getElementById('phone-number-field');
//     const previousPhoneNumber = parseInt(phoneNumberField.value);
//     // increase or decrease the phone no. according to the button pressed
//     let newPhoneNumber;
//     if(isIncrease){
//         newPhoneNumber = previousPhoneNumber + 1;
//     }
//     else{
//         newPhoneNumber = previousPhoneNumber - 1;
//     }
//     phoneNumberField.value = newPhoneNumber;
//     // return the new phone no.
//     return newPhoneNumber;
// }
// // function to update the total price of phone
// function updatePhonePrice(phoneTotalPrice){
//     document.getElementById('phone-total').innerText = phoneTotalPrice;
// }
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// events occur when + button is clicked
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    // updatePhonePrice(updatePhoneNumber(true)*singlePhonePrice);
    updateItemPrice(updateItemNumber(true, 'phone-number-field'), singlePhonePrice,'phone-total');
    setSubtotal();
    setFinaltotal()
})
// events occur when - button is clicked
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    // updatePhonePrice(updatePhoneNumber(false)*singlePhonePrice);
    updateItemPrice(updateItemNumber(false, 'phone-number-field'), singlePhonePrice,'phone-total');
    setSubtotal();
    setFinaltotal()
})