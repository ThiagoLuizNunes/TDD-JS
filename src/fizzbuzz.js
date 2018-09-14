const fizz = (num) => {
  if (num % 3 === 0) {
    return 'Fizz';
  }
};

const buzz = (num) => {
  if (num % 5 === 0) {
    return 'Buzz';
  }
};

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'Fizz Buzz';
  }
};

export { fizz, buzz, fizzBuzz };
