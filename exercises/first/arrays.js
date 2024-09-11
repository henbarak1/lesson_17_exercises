// 1. Check if a Weapon Exists
const weaponInventory1 = [
    'Sword',
    'Bow',
    'Magic Staff',
  ];
  const weaponToCheck1 = 'Sword';
  
  console.log(`the weapon ${weaponToCheck1} is in weapons:` +weaponInventory1.includes(weaponToCheck1));



  // 2. Reverse Quest Order
  const questNames2 = [
    "Dragon's Lair",
    'The Lost Artifact',
    'Rescue the Princess',
  ];

  const questNames2Reversed = questNames2.reverse();
  console.log(questNames2Reversed);


  // 3. Create a String of Monster Types
  const monsterTypes3 = ['Dragon', 'Goblin', 'Orc'];
  const monsterTypesStr = monsterTypes3.join(",")
  console.log(monsterTypesStr);

  
  // 4. Check for a Specific Monster Type
  const monsterTypes4 = ['Dragon', 'Goblin', 'Orc'];
  const monsterToCheck4 = 'Orc';
  console.log(`the monster ${monsterToCheck4} is in monster types:` +monsterTypes4.includes(monsterToCheck4));

  
  // 5. Find Index of a Specific Quest
  const questNames5 = [
    "Dragon's Lair",
    'The Lost Artifact',
    'Rescue the Princess',
  ];
  const specificQuest5 = 'Rescue the Princess';
  
  const indexOfSpecificQuest = questNames5.indexOf(specificQuest5);

  if(indexOfSpecificQuest >= 0)
  {
    console.log(specificQuest5 +" is in the array, index is: "+indexOfSpecificQuest)
  }
  else
  {
    console.log("not in the array");
  }



  // 6. Remove the Last Monster
  const monsterList6 = ['Dragon', 'Orc', 'Goblin'];
  monsterList6.pop();
  console.log(monsterList6);
  
  // 7. Insert a Monster at the Beginning
  const monsterList7 = ['Orc', 'Goblin'];
  const newMonster7 = 'Dragon';
  monsterList7.push(newMonster7);
  console.log(monsterList7);

  
  // 8. Remove First Monster and Log It
  const monsterList8 = ['Dragon', 'Orc', 'Goblin'];
  console.log(monsterList8.shift())
  
  // 9. Concatenate Two Arrays of Heroes
  const heroList1_9 = ['Archer', 'Mage'];
  const heroList2_9 = ['Warrior', 'Healer'];
  const heroListConcat = heroList1_9.concat(heroList2_9);
  console.log(heroListConcat);


  // 10. Sort Quests Alphabetically
  const questNames10 = [
    "Dragon's Lair",
    'The Lost Artifact',
    'Rescue the Princess',
  ];
  const sorted10 = questNames10.sort();
  console.log(sorted10)
  
  // 11. Create Array from Magic Spells
  const spellsString11 = 'Fireball,Heal,Ice Lance';
  const spellsArray = spellsString11.split(",");
  console.log(spellsArray);


  // 12. Slice Array to Get Upcoming Quests
  const questNames12 = [
    "Dragon's Lair",
    'The Lost Artifact',
    'Rescue the Princess',
  ];
  const n12 = 2;
  

  const arrayOfSizeN = questNames12.slice(0,n12-1);
 console.log(arrayOfSizeN);

  // 13. Empty the Monster Array
  const monsterList13 = ['Dragon', 'Orc', 'Goblin'];
 const sliced = monsterList13.slice(0,0) ;
 console.log(sliced);

  // 14. Equip a New Weapon
  const inventory14 = ['Sword', 'Shield'];
  const newWeapon14 = 'Bow';
  inventory14.push(newWeapon14);
  console.log(inventory14);

  
  // 15. Sell the Last Item
  const inventory15 = [
    'Gold',
    'Magic Potion',
    'Shield',
  ];

  console.log(  inventory15.pop());
  
  // 16. Insert a New Quest at the Beginning
  const quests16 = [
    "Dragon's Lair",
    'Rescue the Princess',
  ];
  const newQuest16 = 'Defeat the Goblin King';
  quests16.shift(newQuest16);

  // 17. List All Quests Alphabetically
  const quests17 = [
    "Dragon's Lair",
    'Rescue the Princess',
    'Defeat the Goblin King',
  ];
  quests17.sort();
  console.log(quests17)
  // 18. Check If Quest Exists
  const quests18 = [
    "Dragon's Lair",
    'Rescue the Princess',
    'Defeat the Goblin King',
  ];
  const questToCheck18 = 'Rescue the Princess';
  console.log(`the item ${questToCheck18} is in the quest:` + includes(questToCheck18))
  // 19. Sort Scores
  const scores19 = [30, 80, 60, 90];
  scores19.sort()
  scores19.reverse()
  