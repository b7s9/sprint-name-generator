let { faker, fakerEN } = require("@faker-js/faker");
let { sports } = require("./sports-list");

let adjectiveArray = [
  faker.color.human(),
  //   faker.hacker.ingverb(),
  faker.hacker.adjective(),
  faker.commerce.productAdjective(),
  faker.commerce.productMaterial(),
  faker.music.genre(),
];

let adjective =
  adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];

let nounArray = [
  faker.company.buzzNoun(),
  fakerEN.location.city(),
  //   faker.science.unit().name,
  faker.internet.emoji({ types: ["food", "nature", "activity"] }),
  faker.animal.type(),
  //   faker.animal.bird(),
  faker.animal.bear(),
  faker.animal.cat(),
  faker.commerce.department(),
  faker.commerce.product(),
  sports.randomSport(),
];

let noun = nounArray[Math.floor(Math.random() * nounArray.length)];

let sprintName = adjective + " " + noun;

console.log(sprintName);
console.log(adjectiveArray);
console.log(nounArray);
