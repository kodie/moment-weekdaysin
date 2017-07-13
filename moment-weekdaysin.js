//! moment-weekdaysin.js
//! version : 1.0.1
//! author : Kodie Grantham
//! license : MIT
//! github.com/kodie/moment-weekdaysin

(function() {
  var moment = (typeof require !== 'undefined' && require !== null) && !require.amd ? require('moment') : this.moment;

  var days = function(start, end, weekdays, index) {
    var days = [], d = moment(start).startOf('day');
    var isIndexed = (typeof index !== 'undefined' && index !== null);

    if (typeof weekdays !== 'undefined' && weekdays !== null) {
      if (weekdays.constructor !== Array) { weekdays = [weekdays]; }

      for (var w = 0; w < weekdays.length; w++) {
        weekdays[w] = moment(start).day(weekdays[w]).day();
      }
    } else {
      weekdays = [0,1,2,3,4,5,6];
    }

    for (var i = 0; i < (moment(end).endOf('day').diff(moment(start), 'days') + 1); i++) {
      var wd = d.day();

      if (isIndexed && !days[wd]) { days[wd] = []; }

      if (weekdays.indexOf(wd) !== -1) {
        if (isIndexed) {
          days[wd].push(moment(d));
        } else {
          days.push(moment(d));
        }
      }

      d.add(1, 'day');
    }

    if (isIndexed) {
      var nDays = [];

      if (index.constructor !== Array) { index = [index]; }

      for (var a = 0; a < days.length; a++) {
        if (!days[a].length) { continue; }

        for (var n = 0; n < index.length; n++) {
          var ind = parseInt(index[n]);
          if (isNaN(ind)) { continue; }
          var ni = (ind - 1);
          if (ind < 0) { ni = (days[a].length + ind); }
          nDays.push(days[a][ni]);
        }
      }

      days = nDays;
    }

    days = days
      .sort(function(a, b){ return moment.utc(a).diff(moment.utc(b)); })
      .filter(function(o, p, a){ return (o != null && !o.isSame(a[p - 1])); });

    if (!days.length) { return false; }
    if (days.length === 1) { return days[0]; }

    return days;
  };

  moment.fn.weekdaysInBetween = function(date, weekdays, index) {
    if (!date) { date = new Date(); }
    return days(moment(this).add(1, 'day'), moment(date).subtract(1, 'day'), weekdays, index);
  };

  moment.fn.weekdaysInMonth = function(weekdays, index) {
    return days(moment(this).date(1), moment(this).endOf('month'), weekdays, index);
  };

  moment.fn.weekdaysInYear = function(weekdays, index) {
    return days(moment(this).dayOfYear(1), moment(this).endOf('year'), weekdays, index);
  };

  if ((typeof module !== 'undefined' && module !== null ? module.exports : void 0) != null) {
    module.exports = moment;
  }
}).call(this);
