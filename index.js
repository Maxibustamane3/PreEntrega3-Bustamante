document.getElementById("guardarNombre").addEventListener("click", () => {
    let nombreInput = document.getElementById("nombre").value;
    window.localStorage.setItem("nombre", JSON.stringify(nombreInput));
    let nombre = window.localStorage.getItem('nombre') ? JSON.parse(window.localStorage.getItem('nombre')) : "";
    actualizarSaludo(nombre);
});

function actualizarSaludo(nombre) {
    if (nombre !== "") {
        let saludo = document.getElementById("saludo");
        saludo.innerText = "Hola " + nombre + ", bienvenido a mi concesionaria";
    }
}

let nombre = window.localStorage.getItem('nombre') ? JSON.parse(window.localStorage.getItem('nombre')) : "";
actualizarSaludo(nombre);

const autos = [
    { marca: "Audi", precio: 10000 },
    { marca: "Mercedes Benz", precio: 15000 },
    { marca: "Bmw", precio: 20000 },
    { marca: "Ferrari", precio: 30000 },
    { marca: "Lamborghini", precio: 40000 },
    { marca: "Mclaren", precio: 50000 },
];

document.getElementById("buscarMarca").addEventListener("click", () => {
    let option = document.getElementById("marca").value;
    let valorAuto;
    let marcaEncontrada = false;

    for (let i = 0; i < autos.length; i++) {
        if (option === autos[i].marca) {
            valorAuto = autos[i].precio;
            marcaEncontrada = true;
            break;
        }
    }

    if (marcaEncontrada) {
        mostrarPrecioAuto(option, valorAuto);
    } else {
        document.getElementById("resultado").innerText = "Marca de automóvil no encontrada";
        window.localStorage.setItem("nombre", JSON.stringify(""));
    }
});

function mostrarPrecioAuto(marca, precio) {
    document.getElementById("resultado").innerText = `${marca} tiene un precio de $${precio}`;
    window.localStorage.setItem("precioAuto", JSON.stringify(precio));
}

document.getElementById("calcularCuotas").addEventListener("click", () => {
    let cuota = parseInt(document.getElementById("cuotas").value);
    let valorAuto = JSON.parse(window.localStorage.getItem("precioAuto"));

    if (valorAuto && cuota >= 1 && cuota <= 6) {
        let precioCuota = valorAuto / cuota;
        document.getElementById("resultado").innerText = `El precio de la cuota es de $${precioCuota.toFixed(2)}`;
    } else {
        document.getElementById("resultado").innerText = "Número de cuotas no válido. Por favor, elija un número entre 1 y 6.";
    }

    window.localStorage.setItem("nombre", JSON.stringify(""));
});
