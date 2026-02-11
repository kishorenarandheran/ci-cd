function play(user){
  const options=['stone','paper','scissors'];
  const cpu=options[Math.floor(Math.random()*3)];
  let result="";

  if(user===cpu) result="Draw ";
  else if(
    (user==="stone" && cpu==="scissors") ||
    (user==="paper" && cpu==="stone") ||
    (user==="scissors" && cpu==="paper")
  ) result="You Win ";
  else result="Computer Wins ";

  document.getElementById("result").innerText=`CPU chose ${cpu}. ${result}`;
}
