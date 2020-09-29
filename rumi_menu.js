"use strict";
//   //3.a create an element and append it to DOM
var divh3 = document.getElementById("divh3");
var heading3 = document.createElement("h3");
var heading3text = document.createTextNode("Rumi Restaurant Welcomes You!");
heading3.append(heading3text);
divh3.append(heading3);



window.addEventListener("load", function() {
    //7 Date object and selecting orderForm using forms collections
      var orderForm = this.document.forms.orderForm;
     orderForm.elements.orderDate.value = new Date().toDateString()+" "+ new Date().toLocaleTimeString();
    
      calOrder();
    
      orderForm.elements.menu.onchange = calOrder;
      
      orderForm.elements.qty.onchange = calOrder;
    
      var tips = document.querySelectorAll('input[id^="tip_"]');
      for(var i=0; i<tips.length; i++) {
        tips[i].onclick = calOrder;
      }
    
    
    });
    function calOrder() {
      var orderForm = document.forms.orderForm;
      var menuIndex = orderForm.elements.menu.selectedIndex;//select index 0,1,2...
      var quantityIndex = orderForm.elements.qty.selectedIndex;
    
      var menuValues = orderForm.elements.menu.options[menuIndex].value;//gets the price from menu
      var quantity = orderForm.elements.qty.options[quantityIndex].value;//get 1,2,3...10
    
      //initial cost
      var initialCost = menuValues * quantity;
      orderForm.elements.initialCost.value = usCurrency(initialCost); 
    
      //checkbox for tips
      var tip = orderForm.elements.tip;
      var tCost;
      for(var i=0; i<tip.length; i++){
        if(tip[i].checked === true){
          tCost = tip[i].value * initialCost;
         
        }
      }
      orderForm.elements.tipCost.value = roundUP(tCost, 2);
      //subtotal
      orderForm.elements.subtotal.value = roundUP(initialCost + tCost,2);
      //tax 
      var salesTax = 0.05 * (initialCost + tCost);
      orderForm.elements.salesTax.value = roundUP(salesTax,2); 
      //total
      var totalCost = salesTax + initialCost + tCost;
      orderForm.elements.totalCost.value = usCurrency(totalCost); 
    
      //store the order page details
      orderForm.elements.menuName.value = orderForm.elements.menu.options[menuIndex].text;
      orderForm.elements.tipName.value = document.querySelector('input[id^="tip_"]:checked').nextSibling.nodeValue;
    
    }
    function roundUP(val, decimals) {
       return val.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
       });
    }
    
    function usCurrency(val) {
       //toLocaleString()
       return val.toLocaleString('en-US', { style: "currency", currency: "USD" });
    }
  
//references: W3School and pressure cook demo from class