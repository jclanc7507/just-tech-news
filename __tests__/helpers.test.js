const {format_date} = require('../utils/helpers');
// const {format_plural} = require('../utils/helpers');
const {format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
  const date = new Date('2022-04-04 14:48:34');

  expect(format_date(date)).toBe('4/4/2022');
});

// test('format_plural() returns pluralized words', () => {
//   const plural1 = format_plural('tiger');
//   const plural2 = format_plural('lion') 

//   expect(format_plural(plural1)).toBe('tiger');
//   expect(format_plural(plural2)).toBe('lions');
// });

test('format_url() returns a simplified url string', () => {
  const url1 = format_url('http://test.com/page/1');
  const url2 = format_url('https://www.coolstuff.com/abcdefg/');
  const url3 = format_url('https://www.google.com?q=hello');

  expect(url1).toBe('test.com');
  expect(url2).toBe('coolstuff.com');
  expect(url3).toBe('google.com');
});