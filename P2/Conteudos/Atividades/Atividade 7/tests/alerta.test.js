const { classificarAlerta } = require('../alerta');

test("alerta alto", () => {
  expect(
    classificarAlerta(70)
  ).toBe("Alto");
});