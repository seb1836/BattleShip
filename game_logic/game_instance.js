import {fire} from './ship_methods.js'

const checkGameStatus =(players) => {
  return false
}

const takeTurn = (opposingPlayer,guessFunction) => {
let coordinates = guessFunction();
fire(opposingPlayer, coordinates);
let gameOver = checkGameStatus();

return gameOver
}
module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn