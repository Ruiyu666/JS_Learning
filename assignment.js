let country = 'Canada';
let population = '40';
let language = 'English'
let island = false;

if (language == 'English'&& population < 50 && !island)
{console.log(`You should live in ${country} :)`); 
} else { 
  console.log (`${country} does not meet your criteria:(`); }




  //
let languages = 'english';

  switch (languages) 
  {
    case 'Chinese': 
    case 'Mandarin':
    console.log(`Most nember of native speakers!`);
    break;

    case 'spanish':
    console.log(`2nd place in number of native speakers`);
    break;

    case 'english':
    console.log(`3rd!`);
    break;

    case 'hindi':
    console.log(`number 4`);
    break;

    case 'arabic':
    console.log (`5th most sopken language!`);
    break;


  default:
    console.log(`Great language too :D`)

  }


  //
  let country1 = 'Canada';
  let population1 = '130';
  
  if (population1 > 33) {
    console.log(`${country1}'s population is above average`);
  } else {
    console.log(`${country1}'s population is below average`);
  }