function hora(dato) {
    let h = '';
    if (dato < 10) {
        h = '0' + dato;
    } else {
        h = dato;
    }
    return h;
}

function actualizar() {
    let tiempo = new Date();
    let hor = tiempo.getHours();
    let min = tiempo.getMinutes();
    let seg = tiempo.getSeconds();
    let horaTexto = `${hora(hor)}:${hora(min)}:${hora(seg)}`;
    document.getElementById('hora').innerHTML = horaTexto;
    let meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    let dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let dia = tiempo.getDate();
    let mes = tiempo.getMonth();
    let anio = tiempo.getFullYear();
    let fechaTexto = dias[tiempo.getDay()] + ' ' + dia + ' de ' + meses[mes] + ' de ' + anio;
    document.getElementById('fecha').innerHTML = fechaTexto;
}
setInterval(actualizar, 1000);
