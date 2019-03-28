// Rover Object Goes Here
// ======================
var rover = {
  direction:"N",
  x:0,
  y:0,
}
// ======================
function turnLeft(){
  switch(rover.direction) {
      case "N":
      rover.direction="W";
      break;
    case "E":
      rover.direction="N";
      break;
    case "S":
      rover.direction="E";
      break;
    case "W":
      rover.direction="S"
      break;
    }
console.log("turnLeft was called!");
}

function turnRight(){
  switch(rover.direction) {
    case "N":
      rover.direction="E";
      break;
    case "E":
      rover.direction="S";
      break;
    case "S":
      rover.direction="W";
      break;
    case "W":
      rover.direction="N";
      break;
    }
  console.log("turnRight was called!");
}

//Movement

function moveForward() {
  switch (rover.direction) {
    case "N":
      rover.y--;
    break;
    case "S":
      rover.y++;
    break;
    case "E":
      rover.x++;
    break;
    case "W":
      rover.x--;
    break;  
  }
  console.log("moveForward was called")
}

//Input Commands

function receiveCommands(command) {
  for (var i = 0; i<command.length; i++) {
    switch(command[i]) {
      case "f":
        moveForward();
        break;
      case "r":
        turnRight();
        break;
      case "l":
        turnLeft();
        break;
    }
  }
}

receiveCommands("rffrfflfrff");
