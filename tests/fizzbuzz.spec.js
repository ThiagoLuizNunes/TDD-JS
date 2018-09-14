import { expect } from 'chai';
import fizzBuzz from '../src/fizzbuzz';

describe('FizzBuzz', () => {

  describe('Smoke test', () => {

    it('should exist the lib fizzbuzz', () => {
      expect(fizzBuzz).to.exist;
    });
  });

  describe('FizzBuzz Cases', () => {

    it('should return `Fizz` when multiple of 3', () => {
      expect(fizzBuzz(3)).to.equal('Fizz');
      expect(fizzBuzz(6)).to.equal('Fizz');
    });

    it('should return `Buzz` when multiple of 5', () => {
      expect(fizzBuzz(5)).to.equal('Buzz');
      expect(fizzBuzz(10)).to.equal('Buzz');
    });

    it('should return `FizzBuzz` when multiple of 3 and 5', () => {
      expect(fizzBuzz(15)).to.equal('FizzBuzz');
      expect(fizzBuzz(30)).to.equal('FizzBuzz');
    });
  });
});
