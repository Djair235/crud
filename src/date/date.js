function mostrarData() {
    const dataMili = Date.now()
    const date = new Date(dataMili)
    const novaData = date.toLocaleString()
    return novaData
}

module.exports = { mostrarData }