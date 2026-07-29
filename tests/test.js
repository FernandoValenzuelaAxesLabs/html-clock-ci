"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { formatTime, padTwoDigits, startClock } = require("../src/script.js");

const createLocalDate = (hours, minutes, seconds) =>
  new Date(2024, 0, 1, hours, minutes, seconds);

const verifyImmediateToggleUpdate = () => {
  let changeHandler;
  let updateCount = 0;
  const elements = {
    "#clock-time": {
      set dateTime(value) {},
      setAttribute: () => {
        updateCount += 1;
      },
    },
    "#hours": {},
    "#minutes": {},
    "#seconds": {},
    "#period": {},
    "#clock-day": {},
    "#clock-date": {},
    "#time-format": {
      checked: false,
      addEventListener: (event, handler) => {
        if (event === "change") changeHandler = handler;
      },
    },
  };

  global.document = { querySelector: (selector) => elements[selector] };
  global.window = { setInterval: () => {} };

  try {
    startClock();
    elements["#time-format"].checked = true;
    changeHandler();
    return updateCount === 2 && elements["#period"].hidden === true;
  } finally {
    delete global.document;
    delete global.window;
  }
};

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
  {
    name: "Test 4: Default Format Remains 12-Hour",
    expected: "02:00:00 PM",
    actual: () => formatTime(createLocalDate(14, 0, 0)),
  },
  {
    name: "Test 5: 24-Hour Format",
    expected: "14:00:00",
    actual: () => formatTime(createLocalDate(14, 0, 0), true),
  },
  {
    name: "Test 6: 24-Hour Midnight Boundary",
    expected: "00:00:00",
    actual: () => formatTime(createLocalDate(0, 0, 0), true),
  },
  {
    name: "Test 7: Format Toggle Exists",
    expected: true,
    actual: () =>
      fs
        .readFileSync(path.join(__dirname, "../src/index.html"), "utf8")
        .includes('id="time-format"'),
  },
  {
    name: "Test 8: Toggle Updates Time Immediately",
    expected: true,
    actual: verifyImmediateToggleUpdate,
  },
  {
    name: "Test 9: Background Color",
    expected: true,
    actual: () =>
      /body\s*\{[^}]*background:\s*#BA1F00\s*;/i.test(
        fs.readFileSync(path.join(__dirname, "../src/style.css"), "utf8"),
      ),
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
