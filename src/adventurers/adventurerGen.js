export default adventurerGen = () => {

  function randomNum(max) {
    console.log(max)
    return Math.floor(Math.random() * max);
  };

  const names = ["Rourke", "Faolan", "Cromwell", "Finlay", "Allister", "Corbin", "Orville", "Marissa", "Dewey", "Landon", "Malyn", "Simon", "Gideon", "Griffen", "Tyndareus", "Wise", "Amaris", "Flynn", "Westby", "Brock", "Lenard", "Cailin", "Corben", "Iggy", "Christie", "Kira", "Ruaidhri", "Faris", "Alphonso", "Aled", "Taylor", "Shelly", "Declan", "Andrew", "Darrel", "Scottie", "Freyr", "Tavon", "Mayer", "Erwin", "Gresham", "Brandon", "Tatsuya", "Madison", "Keiran", "Bentley", "Hart", "Nik", "Milo", "Cearnach", "Rover", "Raine", "Trymian", "Oswin", "Birkey", "Ripley", "Norwell", "Mander", "Hartley", "Riston"];

  function randomName(names) {
    let randomNumber = randomNum(names.length - 1);
    return names[randomNumber];
  }

  const classes = {
    knight: { name: 'knight', skill: 'combat', resourceUsed: 'trophies' },
    rogue: { name: 'rogue', skill: 'dungeoneer', resourceUsed: 'trophies' },
    mage: { name: 'mage', skill: 'magic', resourceUsed: 'trophies' },
    ranger: { name: 'ranger', skill: 'exploration', resourceUsed: 'trophies' },
    priest: { name: 'priest', skill: 'recovery', resourceUsed: 'trophies' }
  };

  let adventurer = {
    name: randomName(names),
    class: classes.rogue,
    goldCost: 100,
    resourceCost: 2,
    level: 20
  };

  return adventurer;
}