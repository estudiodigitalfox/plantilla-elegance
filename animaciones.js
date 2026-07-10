function lanzarAnimacion() {
  const tipo = CONFIG.animacion || "confeti";
  const icono = ICONOS[tipo];

  if (!icono) {
    console.warn(`Animación no encontrada: ${tipo}`);
    return;
  }

  const totalElementos = obtenerCantidad(tipo);

  for (let i = 0; i < totalElementos; i++) {
    crearElementoAnimado(tipo, icono, i);
  }
}

function obtenerCantidad(tipo) {
  const cantidades = {
    confeti: 35,
    flores: 22,
    mariposas: 18,
    corazones: 22,
    anillos: 16,
    paloma: 5,
    birrete: 18,
    estrella: 24,
    hoja: 22,
    globo: 15,
    osito: 14,
    copo: 28,
    arbolito: 16
  };

  return cantidades[tipo] || 20;
}

function crearElementoAnimado(tipo, icono, indice) {
  const elemento = document.createElement("div");

  elemento.classList.add(
    "animacion-elemento",
    obtenerClaseMovimiento(tipo),
    obtenerClaseTamano()
  );

  elemento.innerHTML = icono;
  elemento.style.left = `${Math.random() * 95}%`;
  elemento.style.animationDelay = `${Math.random() * 1.2}s`;
  elemento.style.animationDuration = `${3.5 + Math.random() * 2}s`;

  if (debeCambiarColor(tipo)) {
    elemento.style.color = CONFIG.colorPrincipal;
  }

  document.body.appendChild(elemento);

  setTimeout(() => {
    elemento.remove();
  }, 7500);
}

function obtenerClaseMovimiento(tipo) {
  if (tipo === "mariposas") {
    return "animacion-mariposa";
  }

  if (tipo === "globo") {
    return "animacion-globo";
  }

  if (tipo === "paloma") {
    return "animacion-paloma";
  }

  return "animacion-caer";
}

function obtenerClaseTamano() {
  const opciones = [
    "animacion-pequena",
    "animacion-mediana",
    "animacion-grande"
  ];

  return opciones[Math.floor(Math.random() * opciones.length)];
}

function debeCambiarColor(tipo) {
  const animacionesConColor = [
    "flores",
    "mariposas",
    "corazones",
    "estrella",
    "globo",
    "confeti"
  ];

  return animacionesConColor.includes(tipo);
}
