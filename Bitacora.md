Bitacora 

Realizacion de los ejercicios del 1 al 7 

1. Lista enlazada original

Primero creé tres nodos que representan las atenciones veterinarias de Lola , creamos la carpeta patitas motor y luego unas sup carpetas de src y pruebas 

cabeza
   |
   v
[Vacunación] → [Control de peso] → [Limpieza dental] → null

Cada nodo contiene información de una atención y una referencia llamada siguiente, que permite conectarlo con otro nodo.

2. aprendi como vincular nodos de manera especifica

atencion1.siguiente = atencion2;
atencion2.siguiente = atencion3;

let cabeza = atencion1;

Con estas instrucciones conecté las tres atenciones.

3. como lo pidio el ejercicio eliminamos un enlase entre nodos para ver que ocurre 

eliminé intencionalmente la conexión entre el primer y el segundo nodo.

atencion1.siguiente = null;

El diagrama queda así:

cabeza
   |
   v
[Vacunación] → null

[Control de peso] → [Limpieza dental] → null

4. ¿Qué ocurre con el recorrido?

Utilicé un ciclo while para recorrer la lista.

let actual = cabeza;

while (actual !== null) {
    console.log(actual.dato);
    actual = actual.siguiente;
}

El programa solamente muestra la primera atención:

{
  fecha: '02/02',
  motivo: 'vacunacion',
  veterinario: 'Dra. Rios',
  costo: 85000
}

5. Explicación

Al cambiar atencion1.siguiente por null, rompí la conexión con el segundo nodo.

El recorrido comienza en cabeza, muestra la primera atención y después termina porque actual pasa a ser null.

Los otros dos nodos siguen existiendo, pero ya no puedo llegar a ellos recorriendo la lista desde cabeza.

6. Conclusión

hoy 17/nov/2026
Aprendí que las listas enlazadas dependen de las conexiones entre sus nodos. Si se pierde un enlace, el recorrido puede terminar antes de llegar a todos los elementos.

También comprendí que null indica el final de una lista y que debemos tener cuidado al modificar la propiedad siguiente.