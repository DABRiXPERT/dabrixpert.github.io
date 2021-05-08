// DONATION
var currentDate = new Date().toISOString();
var times = 0;
var donate = document.getElementById("donate");//button clicked
var donated_money = document.getElementById("donated_money")//record display
var date = document.getElementById("date");//time currently
console.log(currentDate)
donate.onclick = function ()
{
    times++
    currentDate = new Date().toISOString()
    donated_money.innerHTML = times
    date.innerHTML = currentDate
    console.log(times)
    console.log(currentDate)
}