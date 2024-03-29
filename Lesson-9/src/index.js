"use strict"

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === item) {
            array.splice(i, 1);
        }
    }
}

removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

module.exports = { removeElement };