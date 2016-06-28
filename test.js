'use strong';

const getLastLeapYear = require('last-leap-year');
const requireBowerFiles = require('require-bower-files');
const requireFromString = require('require-from-string');
const {rollup} = require('rollup');
const rollupNodeResolve = require('rollup-plugin-node-resolve');
const test = require('tape');

global.window = {};
requireBowerFiles({self: true});

const lastLeapYear = getLastLeapYear();

function runTest(description, countDaysInMonth) {
  test(description, t => {
    t.equal(countDaysInMonth.name, 'countDaysInMonth', 'should have a function name.');

    t.strictEqual(
      countDaysInMonth(lastLeapYear, 1),
      29,
      'should return number of days in the month.'
    );

    t.throws(
      () => countDaysInMonth(),
      /^TypeError.*undefined is not a number\. Expected a number of full year, for example `2016`\./,
      'should throw a type error when it takes no arguments.'
    );

    t.throws(
      () => countDaysInMonth(2000),
      /^TypeError.*undefined is not a number\. Expected a zero-based number of month \(0-11\)\./,
      'should throw a type error when it takes only one argument.'
    );

    t.throws(
      () => countDaysInMonth('foo', 11),
      /^TypeError.*foo is not a number\. Expected a number of full year, for example `2016`\./,
      'should throw a type error when the first argument is not a number.'
    );

    t.throws(
      () => countDaysInMonth(-1, 0),
      /^RangeError.*-1 is a number, but not a natural number\. Expected a number of full year, for example `2016`\./,
      'should throw a range error when the first argument is not a natural number.'
    );

    t.throws(
      () => countDaysInMonth(999999, 6),
      /^RangeError.*999999 is too large for JavaScript year\. Expected a valid number of full year\./,
      'should throw a range error when the first argument is a too large number.'
    );

    t.throws(
      () => countDaysInMonth(2010, false),
      /^TypeError.*false is not a number\. Expected a zero-based number of month \(0-11\)\./,
      'should throw a type error when the second argument is not a number.'
    );

    t.throws(
      () => countDaysInMonth(0, 3.9),
      /^RangeError.*3.9 is a number, but not a natural number\. Expected a zero-based number of month \(0-11\)\./,
      'should throw a range error when the second argument is not a natural number.'
    );

    t.throws(
      () => countDaysInMonth(0, 12),
      /^RangeError.*12 is larger than 11\. Expected a zero-based number of month \(0-11\)\./,
      'should throw a range error when the second argument is larger than 11.'
    );

    t.end();
  });
}

rollup({
  entry: require('./package.json')['jsnext:main'],
  plugins: rollupNodeResolve({jsnext: true})
}).then(bundle => {
  runTest('require(\'count-days-in-month\')', require('.'));
  runTest('window.countDaysInMonth', global.window.countDaysInMonth);
  runTest('Module exports', requireFromString(bundle.generate({format: 'cjs'}).code));
});
