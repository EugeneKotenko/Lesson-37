function pow(num, degree) {
    if (typeof num !== 'number' || typeof degree !== 'number') {
      throw new Error('Both base and exponent must be numbers');
    }
  
    if (!Number.isFinite(num) || !Number.isFinite(degree)) {
      throw new Error('Both base and exponent must be finite numbers');
    }
  
    if (!Number.isInteger(degree)) {
      throw new Error('Exponent must be an integer');
    }
  
    if (degree === 0) {
      return 1;
    }
  
    if (degree > 0) {
      let result = 1;
      for (let i = 0; i < degree; i++) {
        result *= num;
      }
      return result;
    }
  
    if (degree < 0) {
      let result = 1;
      for (let i = 0; i < -degree; i++) {
        result /= num;
      }
      return result;
    }
  }
  
console.log(pow(3,3))

module.exports = { pow };
