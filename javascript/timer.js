const timer = document.querySelector("h2#timer");

function clock(){
  const date = new Date();
  timer.innerText=`${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()} ${date.getHours()}:00 기준`;
}
clock();
setInterval(clock, 1000);
