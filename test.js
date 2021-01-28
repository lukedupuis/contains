const contains = require('./contains');

const checkMark = '\x1b[32m\u2714\x1b[0m';
const xMark = '\x1b[31m\u2613\x1b[0m';

console.log('');
console.log('Start test: contains.js');

{
  try {
    const searchIn = 'Test searchIn string';
    const searchFor = 'st searc';
    console.log('');
    console.log(`  1) Expect searchIn string to contain searchFor string`);
    console.log('');
    console.log(`     searchIn  : "${searchIn}"`);
    console.log(`     searchFor : "${searchFor}"`);
    console.log('');
    const pass = contains(searchIn, searchFor) === true;
    const mark = pass ? checkMark : xMark;
    console.log(`     ${mark} contains(searchIn, searchFor) === true`);
  } catch(err) { console.error(498481, err); }
}

try {
  const searchIn = 'Test searchIn string';
  const searchFor = 'st searck';
  console.log('');
  console.log(`  2) Expect searchIn string not to contain searchFor string`);
  console.log('');
  console.log(`     searchIn  : "${searchIn}"`);
  console.log(`     searchFor : "${searchFor}"`);
  console.log('');
  const pass = contains(searchIn, searchFor) === false;
  const mark = pass ? checkMark : xMark;
  console.log(`     ${mark} contains(searchIn, searchFor) === false`);
} catch(err) { console.error(305762, err); }

try {
  const searchIn = ['string1', 'string2'];
  const searchFor = 'string1';
  console.log('');
  console.log(`  3) Expect searchIn array of strings to contain searchFor string`);
  console.log('');
  console.log(`     searchIn  : ${JSON.stringify(searchIn)}`);
  console.log(`     searchFor : "${searchFor}"`);
  console.log('');
  const pass = contains(searchIn, searchFor) === true;
  const mark = pass ? checkMark : xMark;
  console.log(`     ${mark} contains(searchIn, searchFor) === true`);
} catch(err) { console.error(409687, err); }

try {
  const searchIn = ['string1', 'string2'];
  const searchFor = 'string3';
  console.log('');
  console.log(`  4) Expect searchIn array of strings not to contain searchFor string`);
  console.log('');
  console.log(`     searchIn  : ${JSON.stringify(searchIn)}`);
  console.log(`     searchFor : "${searchFor}"`);
  console.log('');
  const pass = contains(searchIn, searchFor) === false;
  const mark = pass ? checkMark : xMark;
  console.log(`     ${mark} contains(searchIn, searchFor) === false`);
} catch(err) { console.error(907622, err); }

try {
  const searchIn = ['string1', 'string2'];
  const searchFor = ['string3', 'string1'];
  console.log('');
  console.log(`  5) Expect searchIn array of strings to contain at least one string from searchFor array of strings`);
  console.log('');
  console.log(`     searchIn  : ${JSON.stringify(searchIn)}`);
  console.log(`     searchFor : ${JSON.stringify(searchFor)}`);
  console.log('');
  const pass = contains(searchIn, searchFor) === true;
  const mark = pass ? checkMark : xMark;
  console.log(`     ${mark} contains(searchIn, searchFor) === true`);
} catch(err) { console.error(732987, err); }

try {
  const searchIn = ['string1', 'string2'];
  const searchFor = ['string3', 'string4'];
  console.log('');
  console.log(`  6) Expect searchIn array of strings not to contain any string from searchFor array of strings`);
  console.log('');
  console.log(`     searchIn  : ${JSON.stringify(searchIn)}`);
  console.log(`     searchFor : ${JSON.stringify(searchFor)}`);
  console.log('');
  const pass = contains(searchIn, searchFor) === false;
  const mark = pass ? checkMark : xMark;
  console.log(`     ${mark} contains(searchIn, searchFor) === false`);
} catch(err) { console.error(592771, err); }

try {
  const searchIn = 'Test string3';
  const searchFor = ['string2', 'string3'];
  console.log('');
  console.log(`  7) Expect searchIn string to contain any string from searchFor array of strings`);
  console.log('');
  console.log(`     searchIn  : ${searchIn}`);
  console.log(`     searchFor : ${JSON.stringify(searchFor)}`);
  console.log('');
  const pass = contains(searchIn, searchFor) === true;
  const mark = pass ? checkMark : xMark;
  console.log(`     ${mark} contains(searchIn, searchFor) === true`);
} catch(err) { console.error(404766, err); }

try {
  const searchIn = 'Test string3';
  const searchFor = ['string1', 'string2'];
  console.log('');
  console.log(`  8) Expect searchIn string not to contain any string from searchFor array of strings`);
  console.log('');
  console.log(`     searchIn  : ${searchIn}`);
  console.log(`     searchFor : ${JSON.stringify(searchFor)}`);
  console.log('');
  const pass = contains(searchIn, searchFor) === false;
  const mark = pass ? checkMark : xMark;
  console.log(`     ${mark} contains(searchIn, searchFor) === true`);
} catch(err) { console.error(502837, err); }