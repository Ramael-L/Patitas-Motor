const assert = require("node:assert/strict");




// aaser detiene la prueba si un valor no corresponde
const ListaEnlazada = require("../src/lista.js");




// rectifica el orden el tamabo cabeza y cola 
function comprobar(lista, datos, primera, ultima) {
    assert.deepEqual(lista.aArreglo(), datos);
    assert.equal(lista.obtenerTamanio(), datos.length);
    assert.equal(lista.estaVacia(), datos.length === 0);

    if (datos.length === 0) {
        assert.equal(lista.cabeza, null);
        assert.equal(lista.cola, null);
    } else {
        assert.equal(lista.cabeza.dato, primera);
        assert.equal(lista.cola.dato, ultima);
        assert.equal(lista.cola.siguiente, null);
        if (datos.length === 1) {
            assert.equal(lista.cabeza, lista.cola);
        }
    }
}



// Los tres casos de agregar al final
const listaFinal = new ListaEnlazada();

listaFinal.agregarAlFinal("A");

comprobar(listaFinal, ["A"], "A", "A");

console.log("1. Final en lista vacía: OK");



listaFinal.agregarAlFinal("B");

comprobar(listaFinal, ["A", "B"], "A", "B");

console.log("2. Final en lista con un nodo: OK");



listaFinal.agregarAlFinal("C");

comprobar(listaFinal, ["A", "B", "C"], "A", "C");

console.log("3. Final en lista con varios nodos: OK");




// Los tres casos de agregar al inicio
const listaInicio = new ListaEnlazada();
listaInicio.agregarAlInicio("C");

comprobar(listaInicio, ["C"], "C", "C");

console.log("4. Inicio en lista vacía: OK");



listaInicio.agregarAlInicio("B");

comprobar(listaInicio, ["B", "C"], "B", "C");

console.log("5. Inicio en lista con un nodo: OK");



listaInicio.agregarAlInicio("A");

comprobar(listaInicio, ["A", "B", "C"], "A", "C");

console.log("6. Inicio en lista con varios nodos: OK");




// El callback recibe un dato por cada nodo
const visitados = [];
listaInicio.recorrer((dato) => {
    visitados.push(dato);
});
assert.deepEqual(visitados, ["A", "B", "C"]);
console.log("Recorrido con callback: OK");
