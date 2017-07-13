# moment-weekdaysin [![npm version](https://badge.fury.io/js/moment-weekdaysin.svg)](https://badge.fury.io/js/moment-weekdaysin) [![Build Status](https://travis-ci.org/kodie/moment-weekdaysin.svg?branch=master)](https://travis-ci.org/kodie/moment-weekdaysin)

A [Moment.js](https://github.com/moment/moment) plugin for getting the weekdays of a month, year, or inbetween two dates.

## Requirements
* [moment.js](https://github.com/moment/moment) v2.1.0 or higher

## Installation
### Node.js
```
npm install --save moment-weekdaysin
```

```javascript
var moment = require('moment-weekdaysin');
moment().weekdaysInMonth('Monday');
```

### Browser
```html
<script src="moment.js"></script>
<script src="moment-weekdaysin.js"></script>
<script>
  moment().weekdaysInYear('Friday');
</script>
```

### Bower
```
bower install --save moment-weekdaysin
```

## Examples

### weekdaysInBetween(date, weekdays, index)
```javascript
// All weekends in the summer of 2010
var summerWeekends = moment('2010-06-20').weekdaysInBetween('2010-09-23', [0, 5, 6]);

// Mondays remaining this year
var remainingMondays = moment().weekdaysInBetween(moment().endOf('year'), 'Monday');

// Last Wednesday
var lastWednesday = moment().dayOfYear(1).weekdaysInBetween(null, 3, -1);

// Second to last Friday before Christmas
var paydayBeforeChristmas = moment().weekdaysInBetween(moment().month('December').date(25), 'Friday', -2);
```

### weekdaysInMonth(weekdays, index)
```javascript
// Holidays this year
var memorialDay = moment().month('May').weekdaysInMonth('Monday', -1);
var laborDay = moment().month('September').weekdaysInMonth('Monday', 1);
var thanksgivingDay = moment().month('November').weekdaysInMonth('Thursday', 4);

// Wednesdays in May of 1995
var mayWednesdays = moment('1999-05-01').weekdaysInMonth(3);
```

### weekdaysInYear(weekdays, index)
```javascript
// Last two weekends of the year
var lastWeekendsOfYear = moment().weekdaysInYear([0, 5, 6], [-1, -2]);

// Thursdays this year
var thursdaysThisYear = moment().weekdaysInYear('Thursday');

// The 10th and 4th to last Sundays and Wednesdays this year
var complicatedExample = moment().weekdaysInYear(['Sunday', 3], [10, -4]);
```

#### Parameters
* **date** (`weekdaysInBetween` only) - The end date for `weekdaysInBetween`. Can be any ISO date string that moment accepts or a moment object. Defaults to today.
* **weekdays** - The weekdays to fetch. Can be any value that [moment().day()](https://momentjs.com/docs/#/get-set/day/) accepts or an array of those values. Defaults to all.
* **index** - The index of the days to fetch. 1-indexed based. Can be a negative number. `1` will get the first instance, `-1` will get the last. Can be a single value or an array of values. Defaults to all.

All parameters are optional.

## Things To Note
All three functions will:
* Return a sorted array of moment objects if there are multiple found.
* Return a single moment object if there is only one found.
* Return false if none are found.
* Never return duplicate moment objects.

That means something like this may be necessary:
```javascript
var t = moment().weekdaysInBetween(moment().endOf('year'), 'Monday');

if (t) {
  if (t.length) {
    // Returned multiple
  } else {
    // Returned one
  }
} else {
  // Returned none
}
```

However if `weekdays` and `index` parameters are both set to single values, you will never get multiple values returned.

## License
MIT. See the License file for more info.
