import { expect } from 'chai';
import { fizz, buzz, fizzBuzz } from '../src/fizzbuzz';


describe('FizzBuzz', () => {
  
  describe('Smoke tests', () => {

    it('should exist the lib fizzbuzz', () => {
      expect(fizz).to.exist;
    });

    it('should exist the lib fizzbuzz', () => {
      expect(buzz).to.exist;
    });

    it('should exist the lib fizzbuzz', () => {
      expect(fizzBuzz).to.exist;
    });
  });

  describe('Number dived by 3', () => {
    expect(fizz(3)).to.equal('Fizz');
  });
  
  describe('Number dived by 5', () => {
    expect(buzz(5)).to.equal('Buzz');
  });

  describe('Number dived by 3 and 5', () => {
    expect(fizzBuzz(15)).to.equal('Fizz Buzz');
  });
});
