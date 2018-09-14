import { expect } from 'chai';
import { myObject } from '../src/main';

let obj;

describe('Main', () => {
  before(() => {
    obj = myObject;
  });

  describe('Component Object', () => {
    context('Check Object properties', () => {
      it('should check if is object', () => {
        expect(obj).to.be.an('object');
      });
      it('should check if there is name property', () => {
        expect(obj).to.be.a.property('name');
      });
      it('should check if there is age property', () => {
        expect(obj).to.be.a.property('age');
      });
      it('should check if there is height property', () => {
        expect(obj).to.be.a.property('height');
      });
      it('should check if there is mother property', () => {
        expect(obj).to.be.property('mother');
      });
      it('should check if there is father property', () => {
        expect(obj).to.be.a.property('father');
      });
    });

    context('Check Object content', () => {
      it('should to say hello aj from eua', () => {
        // throw new Error('just a error');
      });
    });
  });

  describe('Method A', () => {

  });
});
