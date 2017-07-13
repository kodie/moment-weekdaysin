import test from 'ava';
import moment from '.';


/* weekdaysInBetween */

test('weekdaysInBetween_1', function(t){
  var w = moment('2008-05-10').weekdaysInBetween();
  t.is(w.constructor, Array);
  t.is(w.length, moment().diff(moment('2008-05-10'), 'days') - 1);
  t.true(w[420].isSame('2009-07-05', 'day'));
});

test('weekdaysInBetween_2', function(t){
  var w = moment('2010-02-01').weekdaysInBetween('2011-06-01', 'Wednesday');
  t.is(w.constructor, Array);
  t.is(w.length, 69);
  t.true(w[48].isSame('2011-01-05', 'day'));
});

test('weekdaysInBetween_3', function(t){
  var w = moment('2008-05-01').weekdaysInBetween('2009-02-01', ['Monday', 3]);
  t.is(w.constructor, Array);
  t.is(w.length, 78);
  t.true(w[12].isSame('2008-06-16', 'day'));
});

test('weekdaysInBetween_4', function(t){
  var w = moment('2001-06-13').weekdaysInBetween('2001-12-25', [6, 'Sunday'], 10);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('2001-08-18', 'day'), true);
  t.true(w[1].isSame('2001-08-19', 'day'));
});

test('weekdaysInBetween_5', function(t){
  var w = moment('1998-03-21').weekdaysInBetween('1999-06-07', ['Tuesday', 4], -4);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('1999-05-11', 'day'));
  t.true(w[1].isSame('1999-05-13', 'day'));
});

test('weekdaysInBetween_6', function(t){
  var w = moment('2003-01-02').weekdaysInBetween('2003-05-21', [5, 'Monday'], [2, 3]);
  t.is(w.constructor, Array);
  t.is(w.length, 4);
  t.true(w[0].isSame('2003-01-10', 'day'));
  t.true(w[1].isSame('2003-01-13', 'day'));
  t.true(w[2].isSame('2003-01-17', 'day'));
  t.true(w[3].isSame('2003-01-20', 'day'));
});

test('weekdaysInBetween_7', function(t){
  var w = moment('2006-04-17').weekdaysInBetween('2006-08-02', ['Wednesday', 4], [-3, -4]);
  t.is(w.constructor, Array);
  t.is(w.length, 4);
  t.true(w[0].isSame('2006-07-05', 'day'));
  t.true(w[1].isSame('2006-07-06', 'day'));
  t.true(w[2].isSame('2006-07-12', 'day'));
  t.true(w[3].isSame('2006-07-13', 'day'));
});

test('weekdaysInBetween_8', function(t){
  var w = moment('1998-02-22').weekdaysInBetween('1998-04-10', [5, 'Monday'], [1, -1]);
  t.is(w.constructor, Array);
  t.is(w.length, 4);
  t.true(w[0].isSame('1998-02-23', 'day'));
  t.true(w[1].isSame('1998-02-27', 'day'));
  t.true(w[2].isSame('1998-04-03', 'day'));
  t.true(w[3].isSame('1998-04-06', 'day'));
});

test('weekdaysInBetween_9', function(t){
  var w = moment('2012-07-02').weekdaysInBetween('2012-12-22', 'Sunday', 8);
  t.true(moment.isMoment(w));
  t.true(w.isSame('2012-08-26', 'day'));
});

test('weekdaysInBetween_10', function(t){
  var w = moment('2009-09-21').weekdaysInBetween('2009-12-22', 1, -1);
  t.true(moment.isMoment(w));
  t.true(w.isSame('2009-12-21', 'day'));
});

test('weekdaysInBetween_11', function(t){
  var w = moment('2014-06-20').weekdaysInBetween('2014-09-23', 'Friday', [1, 2]);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('2014-06-27', 'day'));
  t.true(w[1].isSame('2014-07-04', 'day'));
});

test('weekdaysInBetween_12', function(t){
  var w = moment('2013-03-25').weekdaysInBetween('2014-01-03', 6, [-4, -6]);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('2013-11-23', 'day'));
  t.true(w[1].isSame('2013-12-07', 'day'));
});

test('weekdaysInBetween_13', function(t){
  var w = moment('1993-11-12').weekdaysInBetween('1994-04-20', 'Monday', [3, -8]);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('1993-11-29', 'day'));
  t.true(w[1].isSame('1994-02-28', 'day'));
});

test('weekdaysInBetween_14', function(t){
  var w = moment('2012-04-20').weekdaysInBetween('2012-05-21', 'Tuesday', 10);
  t.false(w);
});

test('weekdaysInBetween_15', function(t){
  var w = moment('2016-06-17').weekdaysInBetween('2014-01-03', 2, 2);
  t.false(w);
});


/* weekdaysInMonth */

test('weekdaysInMonth_1', function(t){
  var w = moment('2010-01-17').weekdaysInMonth();
  t.is(w.constructor, Array);
  t.is(w.length, 31);
  t.true(w[8].isSame('2010-01-09', 'day'));
});

test('weekdaysInMonth_2', function(t){
  var w = moment('2015-05-01').weekdaysInMonth('Sunday');
  t.is(w.constructor, Array);
  t.is(w.length, 5);
  t.true(w[3].isSame('2015-05-24', 'day'));
});

test('weekdaysInMonth_3', function(t){
  var w = moment('2012-10-01').weekdaysInMonth([6, 'Sunday']);
  t.is(w.constructor, Array);
  t.is(w.length, 8);
  t.true(w[4].isSame('2012-10-20', 'day'));
});

test('weekdaysInMonth_4', function(t){
  var w = moment('2009-03-01').weekdaysInMonth(['Monday', 4], 2);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('2009-03-09', 'day'));
  t.true(w[1].isSame('2009-03-12', 'day'));
});

test('weekdaysInMonth_5', function(t){
  var w = moment('2011-05-01').weekdaysInMonth([3, 'Friday'], -1);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('2011-05-25', 'day'));
  t.true(w[1].isSame('2011-05-27', 'day'));
});

test('weekdaysInMonth_6', function(t){
  var w = moment('1997-01-01').weekdaysInMonth([0, 2], [1, 2, 3]);
  t.is(w.constructor, Array);
  t.is(w.length, 6);
  t.true(w[3].isSame('1997-01-14', 'day'));
});

test('weekdaysInMonth_7', function(t){
  var w = moment('2000-05-01').weekdaysInMonth(['Thursday', 'Saturday'], [-2, -3]);
  t.is(w.constructor, Array);
  t.is(w.length, 4);
  t.true(w[2].isSame('2000-05-18', 'day'));
});

test('weekdaysInMonth_8', function(t){
  var w = moment('1992-06-26').weekdaysInMonth(['Monday', 5], [2, -3]);
  t.is(w.constructor, Array);
  t.is(w.length, 3);
  t.true(w[1].isSame('1992-06-12', 'day'));
});

test('weekdaysInMonth_9', function(t){
  var w = moment('2014-08-01').weekdaysInMonth('Wednesday', 2);
  t.true(moment.isMoment(w));
  t.true(w.isSame('2014-08-13', 'day'));
});

test('weekdaysInMonth_10', function(t){
  var w = moment('2017-05-01').weekdaysInMonth(1, -1);
  t.true(moment.isMoment(w));
  t.true(w.isSame('2017-05-29', 'day'));
});

test('weekdaysInMonth_11', function(t){
  var w = moment('2006-11-01').weekdaysInMonth('Wednesday', [1, 2]);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('2006-11-01', 'day'));
  t.true(w[1].isSame('2006-11-08', 'day'));
});

test('weekdaysInMonth_12', function(t){
  var w = moment('2005-02-01').weekdaysInMonth('Friday', [-2, -3]);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('2005-02-11', 'day'));
  t.true(w[1].isSame('2005-02-18', 'day'));
});

test('weekdaysInMonth_13', function(t){
  var w = moment('2009-09-09').weekdaysInMonth(4, [1, -3]);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('2009-09-03', 'day'));
  t.true(w[1].isSame('2009-09-10', 'day'));
});

test('weekdaysInMonth_14', function(t){
  var w = moment('2002-03-01').weekdaysInMonth('Sunday', 6);
  t.false(w);
});

test('weekdaysInMonth_15', function(t){
  var w = moment().weekdaysInMonth();
  var f = false;
  t.is(w.constructor, Array);
  w.forEach(function(d){
    if (d.isSame(moment(), 'day')) { f = true; }
  });
  t.true(f);
});


/* weekdaysInYear */

test('weekdaysInYear_1', function(t){
  var w = moment('2005-11-19').weekdaysInYear();
  t.is(w.constructor, Array);
  t.is(w.length, 365);
  t.true(w[101].isSame('2005-04-12', 'day'));
});

test('weekdaysInYear_2', function(t){
  var w = moment('2017-04-20').weekdaysInYear('Monday');
  t.is(w.constructor, Array);
  t.is(w.length, 52);
  t.true(w[19].isSame('2017-05-15', 'day'));
});

test('weekdaysInYear_3', function(t){
  var w = moment('2001-07-16').weekdaysInYear([6, 'Sunday']);
  t.is(w.constructor, Array);
  t.is(w.length, 104);
  t.true(w[52].isSame('2001-07-07', 'day'));
});

test('weekdaysInYear_4', function(t){
  var w = moment('2010-10-30').weekdaysInYear(['Monday', 5], 20);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('2010-05-14', 'day'));
  t.true(w[1].isSame('2010-05-17', 'day'));
});

test('weekdaysInYear_5', function(t){
  var w = moment('2005-08-02').weekdaysInYear([2, 'Thursday'], -12);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('2005-10-11', 'day'));
  t.true(w[1].isSame('2005-10-13', 'day'));
});

test('weekdaysInYear_6', function(t){
  var w = moment('1994-04-14').weekdaysInYear(['Tuesday', 0], [1, 52]);
  t.is(w.constructor, Array);
  t.is(w.length, 4);
  t.true(w[1].isSame('1994-01-04', 'day'));
  t.true(w[3].isSame('1994-12-27', 'day'));
});

test('weekdaysInYear_7', function(t){
  var w = moment('2010-05-03').weekdaysInYear([4, 5], [-10, -23]);
  t.is(w.constructor, Array);
  t.is(w.length, 4);
  t.true(w[0].isSame('2010-07-29', 'day'));
  t.true(w[3].isSame('2010-10-29', 'day'));
});

test('weekdaysInYear_8', function(t){
  var w = moment('1989-03-27').weekdaysInYear([3, 'Saturday'], [12, -12]);
  t.is(w.constructor, Array);
  t.is(w.length, 4);
  t.true(w[0].isSame('1989-03-22', 'day'));
  t.true(w[2].isSame('1989-10-11', 'day'));
});

test('weekdaysInYear_9', function(t){
  var w = moment('2000-09-03').weekdaysInYear('Wednesday', 15);
  t.true(moment.isMoment(w));
  t.true(w.isSame('2000-04-12', 'day'));
});

test('weekdaysInYear_10', function(t){
  var w = moment('1989-11-10').weekdaysInYear(0, -36);
  t.true(moment.isMoment(w));
  t.true(w.isSame('1989-04-30', 'day'));
});

test('weekdaysInYear_11', function(t){
  var w = moment('1997-02-14').weekdaysInYear('Friday', [10, 22]);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('1997-03-07', 'day'));
  t.true(w[1].isSame('1997-05-30', 'day'));
});

test('weekdaysInYear_12', function(t){
  var w = moment('2005-06-07').weekdaysInYear(4, [-6, -26]);
  t.is(w.constructor, Array);
  t.is(w.length, 2);
  t.true(w[0].isSame('2005-07-07', 'day'));
  t.true(w[1].isSame('2005-11-24', 'day'));
});

test('weekdaysInYear_13', function(t){
  var w = moment('1992-09-19').weekdaysInYear('Saturday', [12, -41]);
  t.true(moment.isMoment(w));
  t.true(w.isSame('1992-03-21', 'day'));
});

test('weekdaysInYear_14', function(t){
  var w = moment('2001-07-04').weekdaysInYear(1, -60);
  t.false(w);
});

test('weekdaysInYear_15', function(t){
  var w = moment().weekdaysInYear(null, -1);
  t.true(moment().endOf('year').isSame(w[w.length - 1], 'day'));
});
