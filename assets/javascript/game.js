let hero = "";
let oponent = "";
let round = 1
let pikachu = {
  health : 15,
  attackPower : 1,
  counterAttackPower : 6,
  hero : false,
  attack : function(attackPower, health, oponent){
    //attack power doubles after each attack
    //oponent counter attack stays the same
  }
}
let charizard = {
  health : 0,
  attackPower : 1,
  counterAttackPower : 6,
  hero : false,
}
let squirtle = {
  health : 0,
  attackPower : 1,
  counterAttackPower : 6,
  hero : false,
}
let bulbasaur = {
  health : 0,
  attackPower : 1,
  counterAttackPower : 6,
  hero : false,
}

//attack power deals double damage vs enemy that is weak to our type
//attack power does half damage vs enemy that is weak to our type
//if hero == false multiply health*round
