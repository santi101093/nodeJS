var numero = prompt("Introduce un número y se mostrará su factorial");
var resultado = 1;
var mes = prompt("Ingrese numero del mes")
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]

window.onload = function () {
    alert("Hola mundo");
}


window.onmousemove = function () {
    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    document.getElementById('factorial').innerHTML = '<h1>' + 'El factorial de ' + numero + ' es ' + resultado + '</h1>';
}

window.onmousemove = function () {
    document.getElementById('mes').innerHTML = '<h1>' + meses[parseInt(mes) - 1] + '</h1>';
}
