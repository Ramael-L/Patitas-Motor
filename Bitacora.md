 Bitácora — Patitas Motor, Semana 2 Día 1

 MiniReto 1 — Realización de los puntos 1 al 7

 Lista enlazada original

Primero creé tres nodos que representan las atenciones veterinarias de Lola. También creé la carpeta del proyecto y las carpetas `src` y `Pruebas`.

```text
cabeza
   |
   v
[Vacunación] --> [Control de peso] --> [Limpieza dental] --> null
```

Cada nodo contiene información de una atención y una referencia llamada `siguiente`, que permite conectarlo con otro nodo.

 2. Aprendí cómo conectar los nodos

```javascript
atencion1.siguiente = atencion2;
atencion2.siguiente = atencion3;

const cabeza = atencion1;
```

Con estas instrucciones conecté las tres atenciones y guardé una referencia al primer nodo.

 3. Perdí un enlace a propósito

Como lo pide el ejercicio, eliminé intencionalmente la conexión entre el primer y el segundo nodo:

```javascript
atencion1.siguiente = null;
```

El diagrama queda así:

```text
cabeza
   |
   v
[Vacunación] --> null

[Control de peso] --> [Limpieza dental] --> null
```

 4. ¿Qué ocurre con el recorrido?

Utilicé un ciclo `while` para recorrer la lista:

```javascript
let actual = cabeza;

while (actual !== null) {
    console.log(actual.dato);
    actual = actual.siguiente;
}
```

Después de romper el enlace, el programa solamente muestra la primera atención (vacunación, $85.000).

 5. Mi explicación

Al cambiar `atencion1.siguiente` por `null`, rompí la conexión con el segundo nodo. El recorrido comienza en `cabeza`, muestra la primera atención y termina porque `actual` pasa a ser `null`.

Los otros dos nodos siguen existiendo, pero ya no puedo llegar a ellos recorriendo la lista desde `cabeza`. En mi prueba, las variables `atencion2` y `atencion3` todavía los conservan.

 6. Conclusión — 17 de noviembre de 2026

Aprendí que las listas enlazadas dependen de las conexiones entre sus nodos. Si se pierde un enlace, el recorrido puede terminar antes de llegar a todos los elementos.

También comprendí que `null` indica el final de una lista y que debemos tener cuidado al modificar la propiedad `siguiente`. En el recorrido original, el costo total fue **$275.000**.

---

 MiniReto 2 — Lista enlazada con cabeza y cola

**Dibujos que debo estudiar antes de programar los seis casos.** En todos cambia `tamanio` en +1.

 Agregar al final

**1. Lista vacía**

```text
Antes: cabeza = null; cola = null; tamanio = 0
Después: cabeza --> [A] --> null
                    ^
                   cola             tamanio = 1
```

Cambian `cabeza` y `cola`: ambas apuntan al nuevo nodo.

**2. Lista con un nodo**

```text
Antes: cabeza, cola --> [A] --> null
Después: cabeza --> [A] --> [B] --> null
                              ^
                             cola
```

Cambia `A.siguiente` y la referencia `cola` pasa a `B`.

**3. Lista con varios nodos**

```text
Antes: cabeza --> [A] --> [B] --> null (cola es B)
Después: cabeza --> [A] --> [B] --> [C] --> null (cola es C)
```

Cambia el `siguiente` de la cola anterior y luego cambia `cola`.

Agregar al inicio

**4. Lista vacía**

```text
Antes: cabeza = null; cola = null; tamanio = 0
Después: cabeza, cola --> [A] --> null; tamanio = 1
```

Cambian `cabeza` y `cola` hacia el primer nodo.

**5. Lista con un nodo**

```text
Antes: cabeza, cola --> [B] --> null
Después: cabeza --> [A] --> [B] --> null
                              ^
                             cola
```

Cambia `A.siguiente` para señalar la antigua cabeza. Después `cabeza` pasa a ser `A`. La cola no cambia.

**6. Lista con varios nodos**

```text
Antes: cabeza --> [B] --> [C] --> null (cola es C)
Después: cabeza --> [A] --> [B] --> [C] --> null (cola es C)
```

Cambia el enlace del nuevo nodo y `cabeza`. La cola sigue siendo `C`.

 Complejidad de los métodos del MiniReto 2

| Método | Complejidad | Justificación |
|---|---|---|
| `agregarAlFinal` | O(1) | Usa `cola`, sin recorrer nodos. |
| `agregarAlInicio` | O(1) | Cambia directamente `cabeza`. |
| `recorrer` | O(n) | Visita los n nodos. |
| `aArreglo` | O(n) | Copia n datos en un arreglo. |
| `estaVacia` | O(1) | Solo revisa `cabeza`. |
| `obtenerTamanio` | O(1) | Solo devuelve `tamanio`. |

En `Pruebas/ListaEnlazada.js` se comprueban los seis casos; después de cada operación revisé `cabeza`, `cola`, `tamanio`, el orden de `aArreglo()` y que `cola.siguiente` fuera `null`.

 MiniReto 3 — Corregir el historial

**Dibujos antes de programar la eliminación:**

 1. Eliminar la cabeza

```text
Antes: cabeza --> [A] --> [B] --> [C] --> null
Después: cabeza -------> [B] --> [C] --> null
```

La nueva cabeza es `B`. Si solo existía `A`, tanto `cabeza` como `cola` quedan en `null`.

 2. Eliminar un nodo intermedio

```text
Antes: [A] --> [B] --> [C] --> null
Después: [A] ----------> [C] --> null
```

Se actualiza `anterior.siguiente` para saltar `B`.