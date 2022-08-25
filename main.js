//Create variables that take the date data from the user input
//then asign those dates to the code we got from the internet
//Put the entire code into a function 
//Create a button that causes the functions to run
//Display the result in the page


const getValueInput = () =>{
claculation();
}

function claculation(){
  let addDate = document.getElementById("addDate").value; 
  let renewalDate = document.getElementById("renewalDate").value; 
  let annualPrice = document.getElementById("annualPrice").value; 
  let date_1 = new Date(`${addDate}`);
  let date_2 = new Date(`${renewalDate}`);
  let difference = date_2.getTime() - date_1.getTime();
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24)); 
  let dayilyCost= annualPrice/356;
  let addCost= totalDays * dayilyCost;
  document.getElementById("addCost").textContent = `$${addCost}`;

}