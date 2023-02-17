// function to update the item number 
function updateItemNumber(isIncrease, fieldId){
    // get the number from the item no. input field
    const itemNumberField = document.getElementById(fieldId);
    const previousItemNumber = parseInt(itemNumberField.value);
    // increase or decrease the item no. according to the button pressed
    let newItemNumber;
    if(isIncrease){
        newItemNumber = previousItemNumber + 1;
    }
    else{
        newItemNumber = previousItemNumber - 1;
    }
    itemNumberField.value = newItemNumber;
    // return the new item no.
    return newItemNumber;
}
// function to update the total price of item
function updateItemPrice(newItemNumber, singleItemPrice, fieldId){
    document.getElementById(fieldId).innerText = newItemNumber*singleItemPrice;
}

function getItemPrice(fieldId){
    const itemPrice = parseInt(document.getElementById(fieldId).innerText);
    return itemPrice;
}

function setSubtotal(){
    document.getElementById('sub-total').innerText = getItemPrice('phone-total') + getItemPrice('case-total');
}
function setFinaltotal(){
    document.getElementById('final-total').innerText = getItemPrice('phone-total') + getItemPrice('case-total');
}