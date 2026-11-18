const assert = require("node:assert/strict");
const ListaEnlazada = require("../src/lista.js");

function crearLista(datos) {
    const lista = new ListaEnlazada();
    for (const dato of datos) {
        lista.agregarAlFinal(dato);
    }
    return lista;
}

function comprobar(lista, esperados) {
    assert.deepEqual(lista.aArreglo(), esperados);
    assert.equal(lista.tamanio, esperados.length);
    assert.equal(lista.estaVacia(), esperados.length === 0);

    if (esperados.length === 0) {
        assert.equal(lista.cabeza, null);
        assert.equal(lista.cola, null);
    } else {
        assert.equal(lista.cabeza.dato, esperados[0]);
        assert.equal(lista.cola.dato, esperados[esperados.length - 1]);
        assert.equal(lista.cola.siguiente, null);
        if (esperados.length === 1) {
            assert.equal(lista.cabeza, lista.cola);
        }
    }
}

// esto es para eliminar una lista basia 
const vacia = crearLista([]);

assert.equal(vacia.eliminar(() => true), null);

comprobar(vacia, []);

console.log("1. Eliminar en vacía: OK");
  



// para eliminar el unico nodo
const unica = crearLista(["A"]);

assert.equal(unica.eliminar((dato) => dato === "A"), "A");

comprobar(unica, []);

console.log("2. Eliminar nodo único: OK");




// eliminar solo la cabeza anterior mente declarada 
const cabeza = crearLista(["A", "B", "C"]);

assert.equal(cabeza.eliminar((dato) => dato === "A"), "A");

comprobar(cabeza, ["B", "C"]);

console.log("3. Eliminar cabeza: OK");




// es para eliminar la cola que declaramos anteriormente
const cola = crearLista(["A", "B", "C"]);

assert.equal(cola.eliminar((dato) => dato === "C"), "C");

comprobar(cola, ["A", "B"]);

console.log("4. Eliminar cola: OK");





// 5. Eliminar un dato inexistente no modifica nada.
const inexistente = crearLista(["A", "B"]);

assert.equal(inexistente.eliminar((dato) => dato === "Z"), null);

comprobar(inexistente, ["A", "B"]);

console.log("5. Eliminar inexistente: OK");




// 6. Insertar después de la cola y actualizar la nueva cola.
const alFinal = crearLista(["A", "B"]);

assert.equal(alFinal.insertarDespuesDe((dato) => dato === "B", "C"), true);

comprobar(alFinal, ["A", "B", "C"]);

console.log("6. Insertar después de la cola: OK");




// Pruebas adicionales: búsqueda, nodo intermedio e inserción fallida.
const medio = crearLista(["A", "C"]);

assert.equal (medio.buscar((dato) => dato === "C"), "C");

assert.equal(medio.buscar((dato) => dato === "Z"), null);

assert.equal(medio.insertarDespuesDe((dato) => dato === "A", "B"), true);

comprobar(medio, ["A", "B", "C"]);

assert.equal(medio.eliminar((dato) => dato === "B"), "B");

comprobar(medio, ["A", "C"]);

assert.equal(medio.insertarDespuesDe((dato) => dato === "Z", "X"), false);

comprobar(medio, ["A", "C"]);

console.log("Búsqueda, nodo intermedio e inserción inexistente: OK");
