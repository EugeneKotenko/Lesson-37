function pow(num, degree) {
  if (typeof num !== "number" || isNaN(num)) {
    throw new Error("Incorrect base");
  }

  if (!Number.isInteger(degree)) {
    throw new Error("Incorrect degree");
  }

  if (degree === 0) {
    return 1;
  } else if (degree < 0) {
    return 1 / pow(num, -degree);
  } else {
    return num * pow(num, degree - 1);
  }
}

try {
  console.log(pow(2, 2));
} catch (error) {
  console.error(error.message);
}

module.exports = { pow };
