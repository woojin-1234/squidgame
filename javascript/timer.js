const timer = document.querySelector("h2.timer");

function clock(){
  const date = new Date();
  timer.innerHTML=`${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}:00 기준`;
}

clock();
setInterval(clock, 1000);
