//1
const characters = [
    { name: 'John', level: 2  },
    { name: 'Jane', level: 5  },
    { name: 'Doe', level: 2 },
  ];
  

 
  function groupCharactersByLevel(characters1)
  {
    const ret = {};
    let newKey="";

    for(let character = 0 ; character < characters1.length; character++)
    {
        ret[characters1[character]["level"]] = [];
    }
    for(let character = 0 ; character < characters1.length; character++)
    {
    for(key in ret)
    {
        if(characters1[character]["level"] == key)
        {
            // console.log(characters1[character])
            ret[key].push(characters1[character]);
        }
        
    }
    }

        return ret;
  }

  console.log((groupCharactersByLevel(characters)));
  //2

  function findHighestLevelCharacter(characters2)
  {
    let ret;
    let maxLevel=0;

    for(let character = 0 ; character < characters2.length; character++)
    {
        if(characters2[character]["level"]>maxLevel)
        {
            maxLevel = characters2[character]["level"];
            ret = characters[character];
        }
            
    }
    
        return ret;
  }
  console.log(findHighestLevelCharacter(characters));

//3
  function calculateAverageCharacterLevel(characters3)
  {
    let avg = 0 ;
    for(let character = 0 ; character < characters3.length; character++)
        {
            avg+=(characters3[character]["level"])
        }
      
  
        avg/=characters3.length;
        avg = parseInt(avg);
        return avg;
    }
console.log(calculateAverageCharacterLevel(characters));

//4
  function filterCharactersByLevelRange(characters4,minLevel,maxLevel)
  {
    const ret =[];
    for(let character = 0 ; character < characters4.length; character++)
    {
        if(characters4[character]["level"] >= minLevel && characters4[character]["level"] <= maxLevel )
        {
            ret.push(characters4[character]);
        }
        
    }
    

        return ret;
    }
console.log(filterCharactersByLevelRange(characters,1,3))

//5

function countCharactersPerLevel(characters5)
{
    
        const ret = {};
        let newKey="";
    
        for(let character = 0 ; character < characters5.length; character++)
        {
            ret[characters5[character]["level"]] = 0;
        }
        for(let character = 0 ; character < characters5.length; character++)
        {
        for(key in ret)
        {
            if(characters5[character]["level"] == key)
            {
                // console.log(characters1[character])
                ret[key]++;
            }
            
        }
    }
    return ret;

        
}
console.log(countCharactersPerLevel(characters));

//6
const characters6 = [
    { name: 'John', level: 2 ,skills:["fire","ice","lightning"] },
    { name: 'Jane', level: 5  ,skills:["fire","ice","rocks"]},
    { name: 'Doe', level: 2 ,skills:["fire","ice","lightning","rocks"]},
  ];
  
function findCharacterWithMostSkills(characters6)
{
    let ret;
    let maxSkills=0;

    for(let character = 0 ; character < characters6.length; character++)
    {
        if(characters6[character]["skills"].length>maxSkills)
        {
            maxSkills = characters6[character]["skills"].length;
            ret = characters6[character];
        }
            
    }
    
        return ret;
}
console.log(findCharacterWithMostSkills(characters6));

//7

function countTotalNumberOfSkills (characters7)
{
    const allSkills= new Set();

    for(let character = 0 ; character < characters7.length; character++)
    {
        for(skill in characters7[character]["skills"])
        {
           //console.log(characters7[character]["skills"][skill]);
           allSkills.add(characters7[character]["skills"][skill]);
        }
            
    }
    
        return allSkills.size;
        //8 return allSkills

}

console.log(countTotalNumberOfSkills(characters6));


//8
//in a comment insode 7, same implementation




//9

function findCharactersWithSkill(characters9,wantedSkill)
{
    const ret =[];
    for(let character = 0 ; character < characters9.length; character++)
    {
        if(  (characters9[character]["skills"]).includes(wantedSkill) )
        {
            ret.push(characters9[character]);
        }
        
    }
    

        return ret;
}
console.log(findCharactersWithSkill(characters6,'ice'));