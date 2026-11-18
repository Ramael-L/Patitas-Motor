const Nodo = require("./Nodo.js");

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.tamanio = 0;
    }

    // Requerimento que nos pidieron del MiniReto 2: agregar sin recorrer la lista (O(1))
    agregarAlFinal(dato) {
        const nuevo = new Nodo(dato);
        if (this.cabeza === null) {
            this.cabeza = nuevo;
            this.cola = nuevo;
        } else {
            this.cola.siguiente = nuevo;
            this.cola = nuevo;
        }
        this.tamanio++;
    }

    agregarAlInicio(dato) {
        const nuevo = new Nodo(dato);
        if (this.cabeza === null) {
            this.cabeza = nuevo;
            this.cola = nuevo;
        } else {
            nuevo.siguiente = this.cabeza;
            this.cabeza = nuevo;
        }
        this.tamanio++;
    }

    recorrer(callback) {
        let actual = this.cabeza;
        while (actual !== null) {
            callback(actual.dato);
            actual = actual.siguiente;
        }
    }

    aArreglo() {
        const datos = [];
        this.recorrer((dato) => {
            datos.push(dato);
        });
        return datos;
    }

    estaVacia() {
        return this.cabeza === null;
    }

    obtenerTamanio() {
        return this.tamanio;
    }

    // Requerimentos del MiniReto 3: buscar el primer dato que cumpla una condición
    buscar(condicion) {
        let actual = this.cabeza;
        while (actual !== null) {
            if (condicion(actual.dato)) {
                return actual.dato;
            }
            actual = actual.siguiente;
        }
        return null;
    }

    insertarDespuesDe(condicion, dato) {
        let actual = this.cabeza;
        while (actual !== null) {
            if (condicion(actual.dato)) {
                const nuevo = new Nodo(dato);
                nuevo.siguiente = actual.siguiente;
                actual.siguiente = nuevo;
                if (this.cola === actual) {
                    this.cola = nuevo;
                }
                this.tamanio++;
                return true;
            }
            actual = actual.siguiente;
        }
        return false;
    }

    eliminar(condicion) {
        let actual = this.cabeza;
        let anterior = null;

        while (actual !== null) {
            if (condicion(actual.dato)) {
                if (anterior === null) {
                    // Quitamos la cabeza
                    this.cabeza = actual.siguiente;
                } else {
                    // Saltamos el nodo que queremos eliminar
                    anterior.siguiente = actual.siguiente;
                }

                if (this.cola === actual) {
                    // Si era el último nodo la cola retrocede
                    this.cola = anterior;
                }

                this.tamanio--;
                const datoEliminado = actual.dato;
                actual.siguiente = null;
                return datoEliminado;
            }

            anterior = actual;
            actual = actual.siguiente;
        }
        return null;
    }
}

module.exports = ListaEnlazada;
