# count-days-in-month

[![NPM version](https://img.shields.io/npm/v/count-days-in-month.svg)](https://www.npmjs.com/package/count-days-in-month)
[![Bower version](https://img.shields.io/bower/v/count-days-in-month.svg)](https://github.com/shinnn/count-days-in-month/releases)
[![Build Status](https://travis-ci.org/shinnn/count-days-in-month.svg?branch=master)](https://travis-ci.org/shinnn/count-days-in-month)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/count-days-in-month.svg)](https://coveralls.io/r/shinnn/count-days-in-month)
[![Dependency Status](https://david-dm.org/shinnn/count-days-in-month.svg)](https://david-dm.org/shinnn/count-days-in-month)
[![devDependency Status](https://david-dm.org/shinnn/count-days-in-month/dev-status.svg)](https://david-dm.org/shinnn/count-days-in-month#info=devDependencies)

Get the number of days in a given month

```javascript
countDaysInMonth(2016, 11); //=> 31
countDaysInMonth(2016, 8); //=> 30
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install count-days-in-month
```

#### [bower](https://bower.io/)

```
bower install count-days-in-month
```

## API

### countDaysInMonth(*fullYear*, *zerBasedMonth*)

*fullYear*: `Number` of [full year](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear), for example `2016`  
*zeroBasedMonth*: `Number` of month, zero based (`0`, `1`, ... `11`)   
Return: `Number` of days

It returns a number of days in the month, considering the year is whether  a leap year or not.

```javascript
countDaysInMonth(2015, 1); //=> 28
countDaysInMonth(2016, 1); //=> 29
```

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
