function foo(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); // false
console.log(foo(0, -0));   // false

function bar(a, b) {
  if (Object.is(a, b)) {
    return true;
  }
  return false;
}
console.log(bar(NaN, NaN)); // true
console.log(bar(0, -0)); // false