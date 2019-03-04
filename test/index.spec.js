import chai from 'chai';
import Impresi from '../lib/impresi';

chai.expect();

const expect = chai.expect;

it('should throw an Error when no ID is specified for board', function () {
  expect(() => {new Impresi('board')}).to.throw(Error, 'No HTML element with the ID: board');
});

