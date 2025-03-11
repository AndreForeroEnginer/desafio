
let cupones = [];


function generarCodigo() {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#";
  let codigo = "";
  for (let i = 0; i < 10; i++) {
    codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return codigo;
}


document.addEventListener("DOMContentLoaded", function () {
  const btnGenerar = document.getElementById("generarCupon");

  const inputCupon = document.querySelector('input[id^="inputCupon"]');
  const btnValidar = document.getElementById("validarCupon");
  const mensaje = document.getElementById("mensaje");

  btnGenerar.addEventListener("click", function () {
    let nuevoCupon = generarCodigo();
    cupones.push(nuevoCupon);

    inputCupon.value = nuevoCupon;
    mensaje.textContent = `Se generó el cupón: ${nuevoCupon}`;
    console.log("Nuevo cupón generado:", nuevoCupon);
  });


  btnValidar.addEventListener("click", function () {
    let cuponIngresado = inputCupon.value.trim();

    if (cuponIngresado === "") {
      mensaje.textContent = "Debes ingresar un cupón para validarlo.";
      return;
    }

    if (cupones.includes(cuponIngresado)) {
      mensaje.textContent = "Cupón válido.";
      
      cupones = cupones.filter(cupon => cupon !== cuponIngresado);
      console.log("Cupón validado y eliminado:", cuponIngresado);
    } else {
      mensaje.textContent = "Cupón incorrecto o ya ha sido usado.";
      console.log("Intento de validación fallida:", cuponIngresado);
    }
  });
});
