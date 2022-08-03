//Declaring a variable
//Keyword identiifier/variableName = value

var firstName = 'Joel';
let lastName = 'Amenuvor';
let age = 27;
let isMarried = false;
let chilledDrink = ['Bright', 'Simon', 'Patrick'];
let other ={
    favouriteColor: 'Black',
    favouriteSport: 'Soccer',
    favouriteFruit: 'Apple'
}
const fullName = firstName + ' ' + lastName; //concatenation
const myName = `My name is ${firstName} ${lastName}` //string interpolation
console.log(fullName);
console.log(myName);

//STRINGS
let sentence = 'This is a sentence about random things. '
console.log(sentence.length);
console.log(sentence.split('a'));
console.log(sentence.replace('random', 'scattered'));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith('T'));
console.log(sentence.endsWith('spot'));
console.log(sentence.includes('a'));


//ARRAY
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
console.log(days.length)
days.push('Friday');
console.log(days);
console.log(days.pop());
days.unshift('Sunday');
console.log(days);
console.log(days.shift());
console.log(days.indexOf('Wednesday'));
console.log(days[1]);
days[0]= 'Sunday';
console.log(days);


//OBJECT
let person ={
    firstname:'Joel',
    lastname:'Amenuvor',
    age:27

}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
