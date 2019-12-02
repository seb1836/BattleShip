import {expect} from 'chai'

describe('GAME INSTANCE FUNCTIONS', function () {
  describe('checkGameStatus', function () {
    let checkGameStatus = require('../game_logic/game_instance.js').checkGameStatus;
    it('should tell me when the game is over', function () {
      let players = [
        {
					ships: [
						{
							locations: [[0, 0]],
							damage: [[0, 0]]
						}
					]
        }
      ];
      let actual = checkGameStatus(players);
      expect(actual).to.be.false;
    });
  });

  describe("takeTurn",function(){
let takeTurn = require('../game_logic/game_instance.js').takeTurn
let guess , player

beforeEach(function(){
guess = function(){return [0,0];};
player = {
    ships:[
        {
            locations: [[0,0]],
            damage:[]
        }
    ]
}
})

it("should return false if game end" , function(){
let actual =takeTurn(player,guess);
expect(actual).to.be.false;
})

  })

  const saveGame =(callback) => {
      setTimeout(()=>{
        callback()
      },1000)
  }

  describe ('saveGame', function (){

    it("should update save status",function (done){
let status = "game not saved..."
        saveGame(function(){
status = "game saved";
expect(status).to.equal("game saved")
done()
        })
        
    })
  })
});