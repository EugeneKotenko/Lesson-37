const { removeElement } = require("./src/index.js");

describe("Function testing removeElement", () => {
  let array;

  beforeEach(() => {
    array = [1, 2, 3, 4, 5, 6, 7];
  });

  it("the existing element is removed from the array", () => {
    removeElement(array, 5);
    expect(array).not.toContain(5);
  });

  it("attempting to delete a nonexistent element does not modify the array", () => {
    const originalArray = [...array];
    removeElement(array, 8);
    expect(array).toEqual(originalArray);
  });

  it("for a repeating element, all occurrences are removed", () => {
    removeElement(array, 3);
    expect(array).not.toContain(3);
    expect(array).toHaveLength(6);
  });
});
