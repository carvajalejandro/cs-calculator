//Create variables that take the date data from the user input
//then asign those dates to the code we got from the internet
//Put the entire code into a function 
//Create a button that causes the functions to run
//Display the result in the page


const getValueInput = () =>{
claculation();

}

function claculation(){
  let inputValue1 = document.getElementById("addDate").value; 
  let inputValue2 = document.getElementById("renewalDate").value; 
  let date_1 = new Date(`${inputValue1}`);
  let date_2 = new Date(`${inputValue2}`);
  let difference = date_2.getTime() - date_1.getTime();
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24)); 
  console.log(totalDays);
  return (totalDays);
}