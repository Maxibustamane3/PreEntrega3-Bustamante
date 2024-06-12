const autos = [
  { marca: "Audi", precio: 10000 },
  { marca: "Mercedes Benz", precio: 15000 },
  { marca: "Bmw", precio: 20000 },
  { marca: "Ferrari", precio: 30000 },
  { marca: "Lamborghini", precio: 40000 },
  { marca: "Mclaren", precio: 50000 },
  ];
  
  alert("Audi, Mercedes Benz, Bmw, Ferrari, Lamborghini, Mclaren");
  
  let option = prompt("Escriba la marca de auto que le interese");
  let valorAuto;
  let marcaEncontrada = false;
  
  for (let i = 0; i < autos.length; i++) {
  if (option === autos[i].marca) {
      alert(`${autos[i].marca} tiene un precio de $${autos[i].precio}`);
      valorAuto = autos[i].precio;
      marcaEncontrada = true;
      break;
  }
  }
  
  if (marcaEncontrada) { 
      cuotas(valorAuto);
  } else {
  alert("Marca de automóvil no encontrada");
  }
  
  function cuotas(valorAuto) {
  let cuota = prompt("¿Cuántas cuotas desea pagar?");
  let precioCuota;
  if (cuota >= 1 && cuota <= 6) {
      precioCuota = valorAuto / cuota;
  alert(`El precio de la cuota es de $${precioCuota.toFixed(2)}`);
  } else {
  alert("Número de cuotas no válido. Por favor, elija un número entre 1 y 6.");
  }
  }
  
