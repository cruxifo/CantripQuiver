var arrows = [
  'Type 6: Eldritch Blast (Your reflection in this brightly shining arrowhead is twisted)',
  'Type 7: Fire Bolt (Okay this is definitely a giant match)',
  'Type 22: Poison Spray (The shaft of this arrow contains multiple tiny knots of wood from which emit a pale gas from time to time)',
  'Type 28: Sapping Sting (The arrow is barbed and if held your fingers tingle, as if on the edge of numbness)',
  'Type 39: Vicious Mockery (On this the arrowhead a tiny bit of rude graffiti is carved with exquisite care)',
  'Type 1: Acid Splash (The arrowhead is bloated, as if swollen, and has a faint green tinge)',
  'Type 9: Frostbite (The arrow chatters with a sound just like chattering teeth)',
  'Type 12: Infestation (Arrowhead is coated in opaque wax, but underneath something is writhing)',
  'Type 19: Mind Sliver (The arrowhead is composed of three thin cuboid columns forming an impossible shape)',
  'Type 33: Sword Burst (Three miniature arrows rotate around this arrow)',
  'Type 35: Thorn Whip (Ethereal brambles climb slowly along the shaft every few minutes, moving from the head to the shaft)',
  'Type 36: Thunderclap (Once drawn this arrow begins to thrum with a low vibration and glow faintly blue)',
  'Type 40: Word of Radiance (The arrowhead of this arrow is a spiked circle)',
  'Type 16: Magic Stone (A small stone orbits the arrowhead)',
  'Type 3: Booming Blade (This arrow is made entirely of arrowheads, and on a successful hit they swirl around the target. If the target moves, they dissolve in the shockwave.)',
  'Type 4: Chill Touch (Frost forms along the arrow once it\s out of the quiver)',
  'Type 5: Create Bonfire (Is this . . . A giant match?)',
  'Type 14: Lightning Lure (The arrowhead is made from two forked lightningbolts touching at the tip of the head)',
  'Type 24: Produce Flame (This arrow appears to be three matches, strapped together)',
  'Type 25: Ray of Frost (An icicle sits in place of the arrowhead)',
  'Type 27: Sacred Flame (The fletching of this arrow is twisted, and the arrowhead glows with a divine light (dim, 1ft radius))',
  'Type 31: Shocking Grasp (Twin barbs on the arrowhead flicker with harmless lightning)',
  'Type 37: Toll The Dead (This innocous arrow chimes when shaken)',
  'Type 10: Greenflame Blade (The arrow head is forked in two, and casts dim light in a 1ft radius)',
  'Type 18: Message (The smiley face on the arrowhead is made from a suspiciously sticky red fluid)',
  'Type 2: Blade Ward (The fletching is made of a delicate crystal, and points in the opposite direction )',
  'Type 8: Friends (This arrow is small, and has a little wax heart daubed on the head )',
  'Type 11: Gust (You can push your finger through the arrowhead as if it was dense air)',
  'Type 13: Light (When touched, the arrowhead changes colour (the colour it has when fired is the colour of the light it emits once it hits))',
  'Type 15: Mage Hand (Could be mistaken for a small glove on an arrow shaft)',
  'Type 17: Mending (This arrow is almost broken apart but will not break unless subjected to more than 10 damage in a single instant)',
  'Type 20: Minor Illusion (While in your hand, the arrowhead\'s appearance shifts constantly through a variety of roughly-arrow-shaped appearances)',
  'Type 21: Mold Earth (A small shovel adorns the head of this arrow)',
  'Type 23: Prestidigitation (The word \'prestidigitation\' is written along the shaft in Sylvan (\'hud hwyliog\' if you use Welsh for Sylvan))',
  'Type 26: Resistance (This plain arrow fills you with a sense of comfort when held)',
  'Type 29: Shape Water (A small bucket takes the place of the fletching)',
  'Type 30: Shillelagh (This arrow looks like it grew in one piece, from fletching to head)',
  'Type 32: Spare The Dying (A small vial is strapped to the arrow)',
  'Type 34: Thaumaturgy (This arrow emits a faint hum, with the rhythm of a hymn)',
  'Type 38: True Strike (The fletching of this arrow is metallic and other arrows, if loose nearby, swing so their heads point towards it)',
]


function genArrows(typerequest) {
    if (typerequest == 0) {
      var min = 0;
      var max = 40;
    }
    else if (typerequest == 1) {
      var min = 0;
      var max = 24;
    }
    else {
      var min = 24;
      var max = 40;
    }
    var alreadychosen = []
    for (var i = 0; i<3; i++) {
      var num_arrows = 1+Math.floor(Math.random()*3);
      need_new_arrow_type = true;
      while (need_new_arrow_type) {
        var arrow_type = Math.floor(Math.random()*(max-min))+min;
        need_new_arrow_type = alreadychosen.includes(arrow_type);
      }
      alreadychosen.push(arrow_type)
      document.getElementById('numArrows'+i).innerHTML = num_arrows+" Cantrip Ammunition, " + arrows[arrow_type]
}
}
