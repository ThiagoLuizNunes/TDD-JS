function* gemNames() {
  yield 'Thiago';
  yield 'Luiz';
  yield 'Nunes';
}

const names = gemNames();

console.log(names.next());
console.log(names.next());
console.log(names.next());
