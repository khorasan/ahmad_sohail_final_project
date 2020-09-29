"use strict";
/*
Name: Ahmad Monir
filename: payment.js
*/
window.addEventListener("load", function () {
    //get vaule pairs from Url
    var formData = location.search.slice(1);

    formData = formData.replace(/\+/g, " ");


    formData = decodeURIComponent(formData);

    //split the query string with field- values pairs with regular expression
    var formFields = formData.split(/[&=]/g);
    //create a character calss that matching all formData text string


    // store them in an array 
    document.forms.order.elements.orderDate.value = formFields[1];
    document.forms.order.elements.menuName.value = formFields[5];
    document.forms.order.elements.qty.value = formFields[7];
    document.forms.order.elements.initialCost.value = formFields[9];
    document.forms.order.elements.tipName.value = formFields[13];
    document.forms.order.elements.tipCost.value = formFields[15];
    document.forms.order.elements.subtotal.value = formFields[17];
    document.forms.order.elements.salesTax.value = formFields[19];
    document.forms.order.elements.totalCost.value = formFields[21];
});
window.addEventListener("load", function () {
    document.getElementById("subButton").onclick = runSubbtn;
    document.getElementById("cardName").oninput = validateName;
    document.getElementById("cardNumber").oninput = validateNumber;
    document.getElementById("expMonth").onchange = validateMonth;
    document.getElementById("expYear").onchange = validateYear;
    document.getElementById("cvc").oninput = validateCVC;
});
function runSubbtn() {
    validateName();
    validateCredit();
    validateNumber();
    validateYear();
    validateMonth();
    validateCVC();
}
//Name field
function validateName() {
    var cardName = document.getElementById("cardName");

    if (cardName.validity.valueMissing) {

        cardName.setCustomValidity("Enter the name on the card");
    }
    else {
        cardName.setCustomValidity("");
    }
}
function validateCredit() {
    var creditCard = document.forms.payment.elements.credit[0];

    if (creditCard.validity.valueMissing) {
        creditCard.setCustomValidity("Select your credit card");
    }
    else {
        creditCard.setCustomValidity("");
    }
}
function validateNumber() {
    var cardNumber = document.getElementById("cardNumber");
    if (cardNumber.validity.valueMissing) {
        cardNumber.setCustomValidity("Enter your card number");
    }
    else if (cardNumber.validity.patternMismatch) {
        cardNumber.setCustomValidity("Please enter a valid card number");
    }
    else {
        cardNumber.setCustomValidity("");
    }
}
function validateYear() {
    var cardYear = document.getElementById("expYear");
 
    if (cardYear.selectedIndex === 0) {
       cardYear.setCustomValidity("Please select the expiration year");
    }
    else {
       cardYear.setCustomValidity("");
    }
 }
 function validateMonth() {
    var cardMonth = document.getElementById("expMonth");
 
    if (cardMonth.selectedIndex === 0) {
       cardMonth.setCustomValidity("Please select the expiration month");
    }
    else {
       cardMonth.setCustomValidity("");
    }
 }
 function validateCVC() {
    var cardCVC = document.getElementById("cvc");
    //attribute selector 
    var creditCard = document.querySelector('input[name="credit"]:checked').value;  //value = amex, discover, master, visa
 
    if (cardCVC.validity.valueMissing) {
       cardCVC.setCustomValidity("Please enter the CVC number");
    }
    //amex - 4 digits
    else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {
 
       cardCVC.setCustomValidity("Please enter a 4-digit number");
    }
    //the rest - 3 digits
    else if ((creditCard !== "amex") && (/^\d{3}$/.test(cardCVC.value) === false)) {
       cardCVC.setCustomValidity("Please enter a 3-digit number");
    }
    else {
       cardCVC.setCustomValidity("");
    }
 
 }