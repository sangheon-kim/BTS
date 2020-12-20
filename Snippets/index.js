function f() {}

function* g() {
  yield 42;
}

function isGenerator(func) {
  return (
    Object.getPrototypeOf(func).constructor === Object.getPrototypeOf(function* () {}).constructor
  );
}

console.log(isGenerator(f));
console.log(isGenerator(g));
