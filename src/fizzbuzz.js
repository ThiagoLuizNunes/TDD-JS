const fizz = (num) => {
  return num % 3 === 0 ? 'Fizz' : 'undefined';
};

const buzz = (num) => {
  return num % 5 === 0 ? 'Buzz' : 'undefined';
}; 

const fizzBuzz = (num) => {
  return num % 3 === 0 && num % 5 === 0 ? 'Fizz Buzz' : 'undefined';
}; 

export { fizz, buzz, fizzBuzz };
