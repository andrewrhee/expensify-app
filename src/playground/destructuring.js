import { privateEncrypt } from "crypto";

//
// Object Destructuring
//

const person = {
  age: 35,
  location: {
    city: 'Los Angeles',
    temp: 92
  }
}
const { name: firstName = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self Published' } = book.publisher;
console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [street, city1, state = 'New York', zip] = address;
console.log(`You are in ${city1} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$3.50', '$3.75'];
const [coffee, , mediumPrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`)