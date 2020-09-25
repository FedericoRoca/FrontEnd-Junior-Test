/*The "increase ()" function updates the progress bar, the number of donors and the remaining amount
 *The "tell Friends" function creates an alert when the button is pressed
 *The eventlistener is used to send donations when enter is pressed (besides when the button is pressed)   
*/

var width=0;
var remainingMoney=10000;
var donorsAmount=0;
var amountEntered=0;

function increase()
{
    //progress bar 
    var modBarra=document.getElementById('modBarra');
    //notice of completed donations
    var finalText=document.getElementById('finalText');
    //amount entered to add to the progress bar
    amountEntered=parseInt(document.getElementById('amountEntered').value);
    //amount to percentage
    var amountPorcentege=(amountEntered*100)/10000;
    //remaining money(text)
    var remainingMoneyText=document.getElementById('remainingMoneyText');
    //donors amount(text)
    var donorsText=document.getElementById('donorsText');
    //increases each time the function is called and if the value is different from 0
    if(amountEntered!=0 && isNaN(amountEntered)==false){
        donorsAmount++;
        //update the donors text
        donorsText.innerHTML=donorsAmount;
    }
    if(isNaN(amountEntered)==false)
    {
        if(remainingMoney<=0)
        {   //update the text when the expected money to be raised is exceeded
            finalText.innerHTML='Thanks! But we already have enough donations';
           remainingMoneyText.innerHTML=`$0`;
        }
        else
        {
           //Update the progress bar
            width+=amountPorcentege;
            modBarra.style.width=width+'%';

            //Update the Remaining Money
            remainingMoney-=amountEntered;

           //update of remaining money
           if(remainingMoney<=0)
           {
              remainingMoneyText.innerHTML=`$0`;          
           }
           else
           {
              remainingMoneyText.innerHTML=`$${remainingMoney}`;
           }
        }   
    }
}

//when "Enter" is pressed the donated money is added
window.addEventListener("keyup",function(event) 
    {
    // Number 13 is the "Enter" key on the keyboard
         if (event.keyCode === 13) 
         {
              increase()
         }
    });

//alert button Tell friends
function tellFriends()
{
    alert("Thanks for share this information");
}
