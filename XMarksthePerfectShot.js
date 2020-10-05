const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function(moves) {
  let position = [0,0];
  for(let direction of moves) {
    switch(direction){
    case 'north':
      position[1] += 1;
      break;
    case 'west':
      position[0] -= 1;
      break;
    case 'east':
      position[0] += 1;
      break;
    case 'south':
      position[1] -= 1;
      break;
    }
  } 
  return position;
};