function Validcreditcard(inputtxt) {
  // remove any spaces and hyphens
  const cleanedNumber = inputtxt.value.replace(/\s|-/g, '');
  
  
  var cardno = /^(?:5[1-5][0-9]{14})$/;
  if(inputtxt.value.match(cardno))
       {
        return true;
       }
       else
       {
        console.log("Not a valid Mastercard number!");
        return false;
       }

}

let testCard = {
  value: "5489542225671214"
}

console.log(Validcreditcard(testCard));

