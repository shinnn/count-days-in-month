/*!
 * count-days-in-month | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/count-days-in-month
*/
(function() {
  'use strict';

  var EXPECTED_YEAR_ARG = ' Expected a number of full year, for example `2016`.';
  var EXPECTED_MONTH_ARG = ' Expected a zero-based number of month (0-11).';

  window.countDaysInMonth = function countDaysInMonth(fullYear, zeroBasedMonth) {
    if (typeof fullYear !== 'number') {
      throw new TypeError(String(fullYear) + ' is not a number.' + EXPECTED_YEAR_ARG);
    }

    if (!window.isNaturalNumber(fullYear, {includeZero: true})) {
      throw new RangeError(String(fullYear) + ' is a number, but not a natural number.' + EXPECTED_YEAR_ARG);
    }

    if (typeof zeroBasedMonth !== 'number') {
      throw new TypeError(String(zeroBasedMonth) + ' is not a number.' + EXPECTED_MONTH_ARG);
    }

    if (!window.isNaturalNumber(zeroBasedMonth, {includeZero: true})) {
      throw new RangeError(String(zeroBasedMonth) + ' is a number, but not a natural number.' + EXPECTED_MONTH_ARG);
    }

    if (zeroBasedMonth > 11) {
      throw new RangeError(String(zeroBasedMonth) + ' is larger than 11.' + EXPECTED_MONTH_ARG);
    }

    var date = new Date();
    date.setFullYear(fullYear, zeroBasedMonth + 1, 0);

    if (isNaN(date.getTime())) {
      throw new RangeError(
        String(fullYear) +
        ' is too large for JavaScript year. Expected a valid number of full year.'
      );
    }

    return date.getDate();
  };
})();
