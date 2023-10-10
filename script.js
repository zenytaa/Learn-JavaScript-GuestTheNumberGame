var ask = true;
while (ask) {
  // input player
  var player = prompt("Insert number between 1-10");

  // input computer
  var comp = Math.floor(Math.random() * 10);
  comp = comp + 1;
  console.log(comp);

  // rules
  var result = "";
  var chance = 3;

  for (var i = 1; i < 3; i++) {
    if (player == comp) {
      result = "Youre Right! Congrats!!";
      alert(result);
    } else if (player < comp) {
      result = "Too low!";
      player = prompt(result);
    } else if (player > comp) {
      result = "Too high";
      player = prompt(result);
    } else if (player > 10) {
      result = "Youre putting the wrong number";
    }
  }
  if (player != comp) {
    result = "Youre wrong!";
    alert(result);
  }
  ask = confirm("Wanna play again?");
}

alert("Thank your for playing with me!");
