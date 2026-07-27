"use strict";

const { formatTime, padTwoDigits } = require("../src/script.js");

const createLocalDate = (hours, minutes, seconds) =>
  new Date(2024, 0, 1, hours, minutes, seconds);

const tests = [
  {
    name: "Test 1: 12-Hour Conversion",
    expected: "02:00:00 PM",
    actual: () => formatTime(createLocalDate(14, 0, 0)),
  },
  {
    name: "Test 2: Midnight Boundary",
    expected: "12:00:00 AM",
    actual: () => formatTime(createLocalDate(0, 0, 0)),
  },
  {
    name: "Test 3: Padding Check",
    expected: "05",
    actual: () => padTwoDigits(5),
  },
];

let hasFailure = false;

for (const test of tests) {
  try {
    const actual = test.actual();

    if (actual !== test.expected) {
      throw new Error(`expected "${test.expected}", received "${actual}"`);
    }

    console.log(`PASS - ${test.name}`);
  } catch (error) {
    hasFailure = true;
    console.error(`FAIL - ${test.name}: ${error.message}`);
  }
}

if (hasFailure) {
  process.exitCode = 1;
}
