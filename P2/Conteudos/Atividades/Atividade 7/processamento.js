function processarAlerta(valor) {
    if (valor >= 90) {
        return "Notificação enviada: Crítico";
    }

    return "Sem alerta;"
}

module.exports = {processarAlerta}