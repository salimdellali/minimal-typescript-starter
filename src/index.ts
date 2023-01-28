const fullName = 'Human';
const currentYear = new Date().getFullYear();
const randomAlphaNumericString = Math.random()
  .toString(36)
  .substring(2, 8)
  .toUpperCase();

console.log(
  `Hello ${fullName}, it's ${currentYear}, your random string is ${randomAlphaNumericString}. Welcome to Minimal-Typescript-Starter`,
);
