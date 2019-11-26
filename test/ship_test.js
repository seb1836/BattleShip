import { expect } from 'chai'

describe('checkForShip', () => {
  const checkForShip = require('../game_logic/ship_methods').checkForShip

  it('should correctly report no ship at given players coordinate', function() {
    const player = {
      ships: [
        {
          locations: [[0, 0]]
        }
      ]
    }
    expect(checkForShip(player, [9, 9])).to.be.false
  })

  it('should correctly report a ship located at the given  coordinates', function() {
    var player = {
      ships: [
        {
          locations: [[0, 0]]
        }
      ]
    }
    expect(checkForShip(player, [0, 0])).to.be.true
  })

  it('should handle ships located at more than one coordinates', function() {
    const player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1]
          ]
        }
      ]
    }
    expect(checkForShip(player, [9, 9])).to.be.false
    expect(checkForShip(player, [0, 1])).to.be.true
    expect(checkForShip(player, [0, 0])).to.be.true
  })
  it('should handle checking multiple ships', function() {
    const player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1]
          ]
        },
        {
          locations: [
            [1, 0],
            [1, 1]
          ]
        },
        {
          locations: [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3]
          ]
        }
      ]
    }
    expect(checkForShip(player, [9, 9])).to.be.false
    expect(checkForShip(player, [0, 1])).to.be.true
    expect(checkForShip(player, [1, 1])).to.be.true
    expect(checkForShip(player, [2, 3])).to.be.true
    expect(checkForShip(player, [1, 1])).to.be.true
    expect(checkForShip(player, [0, 0])).to.be.true
  })
})

describe('damageShip', function() {
  const damageShip = require('../game_logic/ship_methods').damageShip
  it('should register damage to a given ship at a given location', function() {
    const ship = {
      locations: [[0, 0]],
      damage: []
    }
    damageShip(ship, [0, 0])
    expect(ship.damage).to.not.be.empty
    expect(ship.damage[0]).to.deep.equal([0, 0])
  })
})

describe('fire', function() {
  const fire = require('../game_logic/ship_methods').fire
  const checkForShip = require('../game_logic/ship_methods').checkForShip
  const damageShip = require('../game_logic/ship_methods').damageShip

  const player = {
    ships: [
      {
        locations: [
          [0, 0],
          [0, 1]
        ],
        damage: []
      }
    ]
  }

  it("should register no damage to a ship if no ships is at the shoot's coordinates", function() {
    expect(fire([8, 1], player)).to.be.false
  })

  it('should register damage if a ship is at same coordinate as the shoot', function() {
    const player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1]
          ],
          damage: []
        }
      ]
    }

    fire([0, 0], player)
    expect(player.ships[0].damage).to.equal([0, 0])
  })
})
