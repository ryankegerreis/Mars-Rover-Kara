// Rover Object Goes Here
// ======================
var rover = {
  direction:"S",
  x:0,
  y:0,
}
// ======================
function turnLeft(rover){
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

function turnRight(rover){ 
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

function moveForward(rover) {
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

moveForward(rover);
console.log("The Rover's direction is now: " + rover.direction);
console.log("The Rover is now at position: " + rover.x + "," + rover.y);