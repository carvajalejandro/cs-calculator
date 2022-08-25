


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
  let final= addCost.toFixed(2)
  document.getElementById("onScreenCost").textContent = `$${final} `;
  document.getElementById("onScreenCost").style.fontSize = "50px";
  document.getElementById("taxReminder").textContent = 'Remember this does not Potential Tax!';
  document.getElementById("taxReminder").style.fontSize = "50px";
}
