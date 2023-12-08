/*let js='amazing';
console.log(40+8+23-10);

console.log("Jonas");
console.log("23");

let firstName="Lin";
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/


/*const firstName = 'Ruiyu'
const job = 'Programmer';
const birthyear = 1997;
const year = 2023;

const Ruiyu = "I'm " + firstName +', a ' + (year - birthyear) + ' years old '+ job + '!';
console.log (Ruiyu);

const RuiyuNew = `I'm ${firstName}, a ${year - birthyear} years old ${job}!`;
console.log(RuiyuNew);

console.log (`Just `)
console.log ('string with \n\ mutiple \n\ line');
console.log (`string 
multiple 
line`)
console.log (`string 
new
line`); */

// If else statemnet! Section 18 :)
/*const age = 12;

if (age >= 18) {
  console.log ( 'You can take the driver license test!🚘');
} else {
  const yearsLeft = 18 - age;
  console.log (`You are too young, wait for another ${yearsLeft} years :)`);
}
*/

// 5 falsy vaules: 0, '', undefined, null and NaN.

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 10;
if (money) {
  console.log('Do not spend it all');
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('Height is defined :)');
} else {
  console.log('Height is not defined :(');
} */


/*const age = '18';
if (age === 18) console.log ('You just became an adult (strict)');

if (age == 18) console.log ('You just became an adult (loose)');

// == has really werid rules, try not to use this and use === (the strict one instead)

const favorite = Number (prompt( `What is your favorite number?`));
console.log(favorite); 

if (favorite === 23) {
  console.log('COOL 23 is a great number!');
} 

else if (favorite === 7) {
  console.log('7 is also a good number!');
} 

else if (favorite === 97) {
  console.log('These are all good numbers, goodd try!');
} 

else {
  console.log('The number is not 23 or 7 or 97 etc ... retry it again....');
}

if (favorite !== 23) console.log(`why not 23?`);
*/

/* const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if(hasDriversLicense&&hasGoodVision) {
//   console.log('Sarah should drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false;
console.log(hasDriversLicense&&hasGoodVision&&isTired);

if(hasDriversLicense&&hasGoodVision&& !isTired) {
  console.log('Sarah should drive!');
} else {
  console.log('Someone else should drive...');
} */

/*const day = 'monday';

switch (day) {
  case 'monday':
    console.log('beef rice');
    console.log('veggie soup');
    break;
  case 'tuesday':
    console.log('chicken rice');
    break;
  case 'wednesday':
    console.log('Chicken curry');
    break;
  case 'thusday':
    console.log('kimchi fried rice');
    break;
  case 'friday':
    console.log('Mc Donalds');
  break;
  default:
    console.log('Not sth on the menu');
}
*/

const day ='friday';
// switch statement 
switch (day) {

case 'monday':
  console.log('Plan course structure');
  console.log('Go to code meetup');
  break;
case 'tuesday':
  console.log ('Prepare theory videos');
  break;
case 'wednesday':
case 'thusday':
  console.log('Write code examples');
break;
case 'friday':
  console.log('Record videos');
  break;
case 'saturday':
case 'sunday':
  console.log('Enjoy the weekend!');
  break;
default:
  console.log('Not a vaild day');
}
 
//if else statement
if (day=== 'monday') {
  console.log('PLan course structure');
  console.log('Go to code meetup');
} else if (day=== 'tuesday') {
  console.log('Prepare theory videos');
} else if (day=== 'wednesday'|| day==='thusday') {
  console.log('Write code examples');
} else if (day=== 'friday') {
  console.log('Record videos');
} else if (day=== 'saturday'|| day==='sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Not a vaild day');
}