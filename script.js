/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
========================================
calculateBill()       //this will calculate the per person bill
increasePeople()      //will increase people and update the dom
decreasePeople()      //will decrease people and update the dom

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later )
// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  const firstBill =  Number(billInput.value) ;

  const tipPercantage =  Number(tipInput.value);

  const totalBill = firstBill + (firstBill * (tipPercantage/100));


  const totalPerPerson = Number((totalBill/numberOfPeople).toFixed(2));

  // updating the per person bill in the dom
  perPersonTotalDiv.innerText = `$${totalPerPerson}`;

}

const increasePeople = () => {

   numberOfPeople += 1 ;

   // updating the dom with new number of people
    numberOfPeopleDiv.innerText = numberOfPeople ;

    // create total per person bill with new number of people

     calculateBill();

    
}

const decreasePeople = () =>{
  // people count should not be less than 1

   if(numberOfPeople<=1)
   return ;

   numberOfPeople -= 1 ;

   numberOfPeopleDiv.innerText = numberOfPeople ;

   calculateBill();
}