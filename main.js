//Create variables that take the date data from the user input
//then asign those dates to the code we got from the internet
//Put the entire code into a function 
//Create a button that causes the functions to run
//Display the result in the page


const getValueInput = () =>{
  let inputValue1 = document.getElementById("addDate").value; 
  let inputValue2 = document.getElementById("renewalDate").value; 
  console.log(inputValue1);
  console.log(inputValue2);
  return (inputValue1, inputValue2);
}

// let date_1 = new Date('10/25/2021');
// let date_2 = new Date();

// const days = (date_1, date_2) =>{
//     let difference = date_1.getTime() - date_2.getTime();
//     let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
//     return TotalDays;
// }
// console.log(days(date_1, date_2) +" days to world cup");
