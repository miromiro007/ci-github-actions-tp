const somme = require('./somme');

test('additionne deux nombres positifs', () => {
  expect(somme(2, 3)).toBe(5);
});