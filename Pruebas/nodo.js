

const Nodo = require("../src/Nodo.js");

const atencion1 = new Nodo ({
    fecha: "02/02",
    motivo: "vacunacion",
    veterinario:"Dra. Rios",
    costo: 85000
});

const atencion2 = new Nodo ({
    fecha: "15/03",
    motivo: "control de peso",
    veterinario: "Dr.Gomez",
    costo: 40000

});

const atencion3 = new Nodo ({
    fecha: "20/05",
    motivo: "limpieza dental",
    veterinario: "Dra. Rios",
    costo: 150000
});

atencion1.siguiente=atencion2;
atencion2.siguiente=atencion3;
let cabeza=atencion1;


let actual = cabeza;
while (actual !==null){

console.log(actual.dato);

actual = actual.siguiente

}

let costototal = 0;
let actualCosto = cabeza;

while (actualCosto !== null) {

    costototal += actualCosto.dato.costo;
    actualCosto = actualCosto.siguiente
}
console.log("costo total:",costototal)