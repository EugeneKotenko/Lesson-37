const { expect } = require('chai');
const { removeElement } = require('./src/index.js');

describe('removeElement function', () => {
  it('should remove an existing element from the array', () => {
    const array = [1, 2, 3, 4, 5];
    removeElement(array, 3);
    expect(array).to.deep.equal([1, 2, 4, 5]);
  });

  it('should not modify the array if the element is not found', () => {
    const array = [1, 2, 3, 4, 5];
    removeElement(array, 6);
    expect(array).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should remove all occurrences of a repeating element', () => {
    const array = [1, 2, 2, 3, 4, 2, 5];
    removeElement(array, 2);
    expect(array).to.deep.equal([1, 3, 4, 5]);
  });
});
