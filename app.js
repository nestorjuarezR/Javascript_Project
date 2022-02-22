function getValue() {
    var x = document.getElementById("ingreso").value;
    console.log(x);
}

// var agregarInput = document.getElementById('addgastos')

// agregarInput.addEventListener('click', function () {
//     agregarInput.insertAdjacentHTML("afterend", `<input id="ingreso" type="text" placeholder="MXN" >` )
// })

function agregarInput() {
    var botonAgregar = document.getElementById('addgastos')
    botonAgregar.insertAdjacentHTML("afterend", `<p> Gasto </p><input type="text">`)
}