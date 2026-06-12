function classificarAlerta(valor) {
  if (valor >= 90) return "Crítico";
  if (valor >= 70) return "Alto";

  return "Normal";
}

module.exports = { classificarAlerta };