const RegistroClinico = require("./RegistroClinico.js");
const registro = new RegistroClinico();

// atenciones cargadas por orden de llegada
registro.registrarAtencion("Lola", {
    fecha: "02/02",
    motivo: "Vacunación anual",
    veterinario: "Dra. Ríos",
    costo: 85000
});
registro.registrarAtencion("Lola", {
    fecha: "15/03",
    motivo: "Control de peso",
    veterinario: "Dr. Gómez",
    costo: 40000
});
registro.registrarAtencion("Lola", {
    fecha: "20/05",
    motivo: "Limpieza dental",
    veterinario: "Dra. Ríos",
    costo: 150000
});

registro.registrarAtencion("Toby", {
    fecha: "10/01",
    motivo: "Consulta por cojera",
    veterinario: "Dr. Gómez",
    costo: 60000
});
registro.registrarAtencion("Toby", {
    fecha: "12/01",
    motivo: "Radiografía de pata",
    veterinario: "Dr. Gómez",
    costo: 120000
});
registro.registrarAtencion("Toby", {
    fecha: "05/04",
    motivo: "Vacunación anual",
    veterinario: "Dra. Ríos",
    costo: 85000
});

registro.registrarAtencion("Mía", {
    fecha: "18/02",
    motivo: "Esterilización",
    veterinario: "Dra. Ríos",
    costo: 280000
});
registro.registrarAtencion("Mía", {
    fecha: "25/02",
    motivo: "Control posquirúrgico",
    veterinario: "Dra. Ríos",
    costo: 0
});

//no llamar indices para recorrer las atenciones
for (const mascota of ["Lola", "Toby", "Mía"]) {
    const historial = registro.obtenerHistorial(mascota);
    let costoTotal = 0;
    let ultimaReferenciaVacuna = null;

    console.log("\nHISTORIAL DE", mascota);

    historial.recorrer((atencion) => {
        console.log(atencion.fecha, "-", atencion.motivo, "-", atencion.veterinario, "- $" + atencion.costo);
        costoTotal += atencion.costo;
        if (atencion.motivo.toLowerCase().includes("vacunación")) {
            // Al recorrer en orden, la última que encontremos será la más reciente
            ultimaReferenciaVacuna = atencion;
        }
    });

    // Usamos buscar para localizar la última vacunación encontrada
    const ultimaVacunacion = historial.buscar((dato) => dato === ultimaReferenciaVacuna);

    console.log("Número de atenciones:", historial.obtenerTamanio());
    console.log("Costo total: $" + costoTotal);
    if (ultimaVacunacion === null) {
        console.log("Última vacunación: sin registro");
    } else {
        console.log("Última vacunación:", ultimaVacunacion.fecha, "-", ultimaVacunacion.motivo);
    }
}
