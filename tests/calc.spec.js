import { expect } from 'chai';
import { Calc } from '../src/main';

let calc;

describe('Calculator', () => {
  before(() => {
    calc = new Calc();
  });

  describe('Smoke tests', () => {

    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });
    
    it('should exist method sum', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist method sub', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist method div', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });

    it('should exist method mult', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(calc.sum(2, 2)).to.equal(4);
    });
  });
  
  describe('Sub', () => {
    it('should return 2 when sum(2,2)', () => {
      expect(calc.sub(2, 2)).to.equal(0);
    });
  });
  
  describe('Mult', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(calc.mult(2, 2)).to.equal(4);
    });
  });
  
  describe('Div', () => {
    it('should return 1 when sum(2,2)', () => {
      expect(calc.div(2, 2)).to.equal(1);
    });
  });
});
