const checkForShip = (player, coordinates) =>{
 let shipPresent, ship;

 for ( let i = 0 ; i<player.ships.length;i++){
     ship = player.ships[i];

     shipPresent = ship.locations.filter(function (actualCoordinate){
       return (actualCoordinate[0]=== coordinates[0]) && (actualCoordinate[1]=== coordinates[1])  
     })[0];

     if (shipPresent){
         return true
     }
 }
 return false
}

const damageShip =(ship,coordinates) =>{
ship.damage.push(coordinates)

}

const fire =(coordinates,player)=>{

  if(checkForShip(player,coordinates)=== false){
    return false
  }else {
    damageShip()
  }
}



module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;