import { expect } from 'chai';
import object from '../src/main';

let obj;

describe('Main', () => {
  before(() => {
    obj = object;
  });

  describe('Component Object', () => {
    context('Check Object properties', () => {
      it('should compare object', () => {
        expect(obj).to.be.an('object');
      });
      it('should compare name attribute', () => {
        expect(obj.name).to.be.a('string');
      });
      it('should compare age attribute', () => {
        expect(obj.age).to.be.a('number');
      });
      it('should compare height attribute', () => {
        expect(obj.height).to.be.a('number');
      });
      it('should compare mother attribute', () => {
        expect(obj.mother).to.be.a('string');
      });
      it('should compare father attribute', () => {
        expect(obj.father).to.be.a('string');
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
