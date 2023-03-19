// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
  return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = (drivers) => {
  const length = drivers.length;
  return [drivers[length - 2], drivers[length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (number1) => {
  if (number1) return (number2) => number1 * number2;
  return (number2) => number2 * number2;
};

const fareDoubler = (number) => {
  const func = createFareMultiplier(number);

  return func(2);
};

const fareTripler = (number) => {
  const func = createFareMultiplier(number);

  return func(3);
};

const selectDifferentDrivers = (drivers, callback) => callback(drivers);
