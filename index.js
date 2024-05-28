alert("Audi, Mercedes Benz, Bmw, Ferrari, Lamborghini, Mclaren");

let option = prompt("Escriba la marca de auto que le interese");
let valorAuto;

let marcaEncontrada = false;
let i = 0;

while (!marcaEncontrada && i <= 6) {
  switch (i) {
    case 0:
      if (option == "Audi") {
        alert("Audi tiene un precio de $10.000");
        valorAuto = 10000;
        marcaEncontrada = true;
      }
      break;
    case 1:
      if (option == "Mercedes Benz") {
        alert("Mercedes Benz tiene un precio de $15.000");
        valorAuto = 15000;
        marcaEncontrada = true;
      }
      break;
    case 2:
      if (option == "Bmw") {
        alert("Bmw tiene un precio de $20.000");
        valorAuto = 20000;
        marcaEncontrada = true;
      }
      break;
    case 3:
      if (option == "Ferrari") {
        alert("Ferrari tiene un precio de $30.000");
        valorAuto = 30000;
        marcaEncontrada = true;
      }
      break;
    case 4:
      if (option == "Lamborghini") {
        alert("Lamborghini tiene un precio de $40.000");
        valorAuto = 40000;
        marcaEncontrada = true;
      }
      break;
    case 5:
      if (option == "Mclaren") {
        alert("Mclaren tiene un precio de $50.000");
        valorAuto = 50000;
        marcaEncontrada = true;
      }
      break;
    default:
      alert("Marca de automovil no encontrada");
      break;
  }
  i++;
}

if (marcaEncontrada) {
  cuotas(valorAuto);
}

function cuotas(valorAuto) {
  let cuota = prompt("¿Cuantas cuotas desea pagar?");
  let precioCuota;
  if (cuota >= 1 && cuota <= 5) {
    precioCuota = valorAuto / cuota;
    alert("El precio de la cuota es de $" + precioCuota.toFixed(2));

  } else {
    alert("Numero de cuotas no valido.Por favor, elija un número entre 1 y 5.");
  }
}
