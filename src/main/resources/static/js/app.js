console.log("App.js cargado correctamente");

const API = "/api";

/* ===============================
   DATOS ESTÁTICOS — SEMANA 1
   Arquitectura y Gestión en
   Sistemas Operativos
================================ */
const SEMANA_1 = {
  num: 1,
  titulo: "Arquitectura y Gestión en Sistemas Operativos",
  subtitulo: "Procesos, Memoria y Algoritmos de Planificación",
  secciones: [
    {
      id: "s1",
      icono: "🎛️",
      titulo: "El Orquestador: Definición y Propósito",
      descripcion: "El Sistema Operativo (SO) es la capa de software que administra el hardware y proporciona una interfaz abstracta para las aplicaciones. Actúa como intermediario entre el 'lenguaje de máquina' y el usuario.",
      items: [
        "<strong>Multiplexación en el Tiempo:</strong> Turnos rotativos de uso (ej. CPU).",
        "<strong>Multiplexación en el Espacio:</strong> División física de recursos (ej. RAM).",
        "<strong>Clasificación:</strong> Batch, Tiempo Compartido, Tiempo Real.",
        "<strong>Capas:</strong> Aplicaciones → SO (Gestión) → Hardware (Recursos Físicos)."
      ]
    },
    {
      id: "s2",
      icono: "🖥️",
      titulo: "Abstracción del Hardware: La Máquina Virtual",
      descripcion: "El VMM (Monitor de Máquina Virtual) crea copias exactas del hardware, permitiendo aislamiento y consolidación entre sistemas.",
      items: [
        "<strong>Tipo 1 — Bare Metal:</strong> El hipervisor corre directamente sobre el hardware. Ej: VMware ESXi.",
        "<strong>Tipo 2 — Hosted:</strong> El hipervisor corre sobre un SO anfitrión. Ej: VirtualBox.",
        "<strong>Aislamiento:</strong> Cada VM opera de forma independiente.",
        "<strong>Consolidación:</strong> Múltiples sistemas en un solo servidor físico."
      ]
    },
    {
      id: "s3",
      icono: "⚙️",
      titulo: "Anatomía de la Unidad de Trabajo: El Proceso",
      descripcion: "Un programa es una entidad pasiva (código en disco). Un proceso es una entidad activa (programa en ejecución). Cada proceso tiene un PCB con toda su información de estado.",
      items: [
        "<strong>PID:</strong> Identificador único del proceso (ej: 0x812A).",
        "<strong>Estado:</strong> Listo / En Ejecución / Bloqueado.",
        "<strong>Contador de Programa & Registros CPU:</strong> Indican la siguiente instrucción.",
        "<strong>Límites de Memoria:</strong> Rango de direcciones asignadas (ej: 0x8000 – 0xFFFF).",
        "<strong>Info de Contabilidad:</strong> Uso de CPU, estadísticas de I/O."
      ]
    },
    {
      id: "s4",
      icono: "🔄",
      titulo: "Ciclo de Vida: Diagrama de Estados del Proceso",
      descripcion: "Los procesos transitan entre estados. Solo puede haber 1 proceso en ejecución por CPU al mismo tiempo.",
      items: [
        "<strong>Nuevo → Ready:</strong> El proceso es admitido al sistema.",
        "<strong>Ready → Run:</strong> El dispatcher asigna la CPU (Dispatch).",
        "<strong>Run → Wait:</strong> El proceso solicita una operación E/S (Solicitud E/S).",
        "<strong>Wait → Ready:</strong> Fin de la operación E/S (Fin E/S).",
        "<strong>Run → Fin:</strong> El proceso termina su ejecución (Exit).",
        "<strong>Run → Ready:</strong> Fin de tiempo / Interrupción expulsiva."
      ]
    },
    {
      id: "s5",
      icono: "🍴",
      titulo: "Control del Ciclo de Vida: UNIX vs. Windows",
      descripcion: "Los SO exponen llamadas al sistema para crear, ejecutar y terminar procesos. UNIX y Windows difieren en su modelo de creación de procesos.",
      items: [
        "<strong>Creación UNIX:</strong> fork() — copia exacta del padre.",
        "<strong>Creación Windows:</strong> CreateProcess() — crea un espacio completamente nuevo.",
        "<strong>Ejecución nueva UNIX:</strong> execve() — reemplaza la imagen del proceso.",
        "<strong>Terminación:</strong> exit/kill (UNIX) · ExitProcess/TerminateProcess (Windows).",
        "<strong>Sincronización:</strong> waitpid() (UNIX) · WaitForSingleObject() (Windows)."
      ]
    },
    {
      id: "s6",
      icono: "📅",
      titulo: "El Estratega: Introducción a la Planificación de CPU",
      descripcion: "El objetivo del planificador es maximizar el uso de CPU, la equidad y el throughput. Existen tres niveles según el horizonte de tiempo.",
      items: [
        "<strong>Largo Plazo (Admisión):</strong> Decide qué procesos ingresan al sistema (~300 ms).",
        "<strong>Medio Plazo (Swapping):</strong> Mueve procesos entre RAM y disco para gestionar la multiprogramación.",
        "<strong>Corto Plazo (Dispatcher):</strong> Asigna la CPU al siguiente proceso listo (~50 ms).",
        "<strong>Expulsiva:</strong> El SO puede interrumpir al proceso activo.",
        "<strong>No Expulsiva:</strong> El proceso cede la CPU voluntariamente."
      ]
    },
    {
      id: "s7",
      icono: "📊",
      titulo: "Algoritmos Básicos: FCFS y SJF",
      descripcion: "Los algoritmos de planificación determinan el orden de ejecución. FCFS es simple pero genera el efecto convoy. SJF minimiza el tiempo de espera pero puede causar inanición.",
      items: [
        "<strong>FCFS (First-Come First-Served):</strong> No expulsivo. Tiempo de espera prom.: 2.75. Sufre efecto convoy.",
        "<strong>SJF (Shortest Job First):</strong> No expulsivo. Tiempo de espera prom.: 1.5. Óptimo pero requiere duración a priori.",
        "<strong>Efecto Convoy:</strong> Procesos cortos esperan detrás de uno largo en FCFS.",
        "<strong>Inanición:</strong> Procesos largos pueden esperar indefinidamente en SJF."
      ]
    },
    {
      id: "s8",
      icono: "🔁",
      titulo: "Algoritmos Avanzados: SRTF y Round Robin",
      descripcion: "SRTF es la versión expulsiva de SJF. Round Robin garantiza equidad con un quantum fijo, ideal para sistemas de tiempo compartido.",
      items: [
        "<strong>SRTF (Shortest Remaining Time First):</strong> Expulsivo. Si llega un proceso más corto, interrumpe al actual.",
        "<strong>Round Robin:</strong> Cada proceso recibe un quantum fijo (Quantum = 4 en el ejemplo).",
        "<strong>RR — Tiempo de espera prom.:</strong> 0.5 (excelente respuesta interactiva).",
        "<strong>RR — Tiempo de retorno prom.:</strong> 4.25 (mayor latencia total por cambios de contexto).",
        "<strong>Elección del Quantum:</strong> Muy pequeño → muchos cambios de contexto. Muy grande → se comporta como FCFS."
      ]
    },
    {
      id: "s9",
      icono: "💾",
      titulo: "El Espacio de Trabajo: Gestión de Memoria",
      descripcion: "La gestión de memoria busca proteger los procesos entre sí, permitir la compartición controlada y optimizar el uso para maximizar la multiprogramación.",
      items: [
        "<strong>Protección:</strong> Aislamiento entre procesos — ninguno accede a memoria ajena.",
        "<strong>Compartición:</strong> Acceso común controlado a zonas compartidas (librerías, IPC).",
        "<strong>Optimización:</strong> Maximizar la multiprogramación con más procesos en RAM.",
        "<strong>Jerarquía:</strong> Registros/Caché (velocidad extrema) → RAM (volátil) → Disco (persistente)."
      ]
    },
    {
      id: "s10",
      icono: "🗺️",
      titulo: "La Gran Ilusión: Memoria Virtual y Paginación",
      descripcion: "La MMU traduce direcciones lógicas a físicas. Las páginas no usadas se mueven al área de Swap en disco, creando la ilusión de memoria infinita.",
      items: [
        "<strong>MMU + TLB:</strong> Traduce direcciones virtuales a físicas. TLB es caché de traducciones recientes.",
        "<strong>Paginación:</strong> Memoria dividida en páginas (lógicas) y marcos (físicos) de tamaño fijo.",
        "<strong>Fallo de Página:</strong> La página no está en RAM → se carga desde el disco (Swap).",
        "<strong>Memoria Virtual:</strong> Cada proceso tiene su propio espacio lógico, mayor que la RAM física."
      ]
    }
  ]
};

/* ===============================
   INICIALIZACIÓN
================================ */
document.addEventListener("DOMContentLoaded", () => {
  buildSemanasMenu();   // siempre se ejecuta primero
  loadCadis();          // si falla el backend, no afecta el menú
});

/* ===============================
   MENÚ — SEMANA 1
================================ */
function buildSemanasMenu() {
  const menu = document.getElementById("menu");

  const sep = document.createElement("li");
  sep.style.cssText = "font-size:10px;letter-spacing:2px;color:rgba(255,255,255,0.3);text-transform:uppercase;padding:14px 14px 4px;cursor:default;font-family:'Space Grotesk',sans-serif;pointer-events:none;";
  sep.textContent = "Contenido del curso";
  menu.appendChild(sep);

  const li = document.createElement("li");
  li.className = "semana-item";
  li.innerHTML = `<span style="color:rgba(56,189,248,0.8);font-size:11px;font-family:'Space Mono',monospace;margin-right:6px;">S01</span>Arquitectura y Gestión SO`;
  li.onclick = () => loadSemana();
  menu.appendChild(li);
}

/* ===============================
   CARGAR SEMANA 1
================================ */
function loadSemana() {
  const s = SEMANA_1;

  const secciones = s.secciones.map((sec, i) => `
    <div class="semana-card" style="animation-delay:${i * 0.06}s">
      <div class="semana-card-icon">${sec.icono}</div>
      <h3>${sec.titulo}</h3>
      <p>${sec.descripcion}</p>
      <ul class="semana-card-list">
        ${sec.items.map(it => `<li>${it}</li>`).join("")}
      </ul>
    </div>
  `).join("");

  document.getElementById("mainContent").innerHTML = `
    <div class="semana-wrapper">
      <div class="semana-header">
        <div class="semana-num">Semana 1</div>
        <h2>${s.titulo}</h2>
        <p class="semana-desc">${s.subtitulo}</p>
      </div>
      <div class="semana-grid">
        ${secciones}
      </div>
    </div>
  `;
}

function loadHome() {
  // Si el home-wrapper ya existe en el HTML estático, no lo sobreescribimos
  // Solo restauramos si fue reemplazado por otra vista
  if (document.querySelector(".home-wrapper")) return;
  document.getElementById("mainContent").innerHTML = `
    <div class="home-wrapper">

      <div class="home-img-block">
        <img src="https://www.ucundinamarca.edu.co/images/slider/2020/fachada.jpg"
             alt="Universidad de Cundinamarca">
        <div class="img-url-bar">
          <span class="img-url-label">URL imagen</span>
          <input type="text"
                 value="https://www.ucundinamarca.edu.co/images/slider/2020/fachada.jpg"
                 placeholder="Pega aquí la URL de la imagen…"
                 oninput="document.querySelector('.home-img-block img').src = this.value">
        </div>
      </div>

      <div class="home-info">
        <span class="home-badge">Plataforma REA</span>

        <h1>Sistemas de<br><span>Información</span></h1>

        <h3>
          <a href="https://www.ucundinamarca.edu.co/" target="_blank">
            Universidad de Cundinamarca
          </a>
        </h3>

        <p>
          Este CADI de <strong>Sistemas de Información</strong> tiene como objetivo
          comprender, diseñar e implementar sistemas que permitan la captura,
          almacenamiento, procesamiento y distribución de información dentro de
          las organizaciones, apoyando la toma de decisiones a nivel operativo,
          táctico y estratégico.
        </p>

        <ul class="home-topics">
          <li>📊 Modelado y diseño de bases de datos</li>
          <li>🔄 Ciclo de vida de los sistemas de información</li>
          <li>🏢 SI empresariales: ERP, CRM, SCM</li>
          <li>🔐 Seguridad e integridad de la información</li>
          <li>☁️ Sistemas distribuidos y en la nube</li>
        </ul>

        <a href="https://www.ucundinamarca.edu.co/" target="_blank" class="home-link">
          Ver más información →
        </a>
      </div>

    </div>
  `;
}

/* ===============================
   CARGAR CADIS (MATERIAS)
================================ */
async function loadCadis() {
  try {
    const res = await fetch(`${API}/cadis`);
    const cadis = await res.json();
    const menu = document.getElementById("menu");
    document.querySelectorAll(".cadi-item, .area-item").forEach(e => e.remove());
    cadis.forEach((cadi) => {
      const li = document.createElement("li");
      li.classList.add("cadi-item");
      li.textContent = "📚 " + cadi.nombre;
      li.onclick = () => loadReas(cadi.id, li);
      menu.appendChild(li);
    });
  } catch (e) {
    console.warn("Backend no disponible, solo se muestra contenido estático.");
  }
}

/* ===============================
   CARGAR REAS POR CADI
================================ */
async function loadReas(cadiId, element) {
  document.querySelectorAll(".area-item").forEach(e => e.remove());
  const res = await fetch(`${API}/reas`);
  const reas = await res.json();
  const filtradas = reas.filter((r) => r.cadi.id === cadiId);

  // Distribuir secciones de SEMANA_1 entre los REAs disponibles
  const totalSecciones = SEMANA_1.secciones.length;
  const totalReas = filtradas.length;

  filtradas.forEach((rea, reaIdx) => {
    const sub = document.createElement("li");
    sub.textContent = "📂 " + rea.nombre;
    sub.classList.add("area-item");

    if (reaIdx === 0) {
      // Primer REA: muestra todas las secciones del PDF
      sub.onclick = () => loadReaConSemana(rea.id, SEMANA_1.secciones, rea.nombre);
    } else {
      // Resto de REAs: solo actividades normales
      sub.onclick = () => loadActividades(rea.id);
    }

    element.after(sub);
  });

  // Re-ordenar: element.after() inserta en reversa, revertimos
  const inserted = [...element.parentNode.querySelectorAll(".area-item")];
  inserted.reverse().forEach(el => element.after(el));
}

/* ===============================
   CARGAR REA CON SECCIONES DE SEMANA
================================ */
async function loadReaConSemana(reaId, secciones, reaNombre) {
  const res = await fetch(`${API}/actividades`);
  const actividades = await res.json();
  const filtradas = actividades.filter((a) => a.rea.id === reaId);

  const main = document.getElementById("mainContent");

  // Tarjetas de actividades del backend
  const actCards = filtradas.map(act => {
    let botonVer = act.archivo ? `
      <button class="btn-view" onclick="verArchivo('${act.archivo}')">Ver Archivo</button>
      <button class="btn-delete" onclick="eliminarArchivo(${act.id})">Eliminar Archivo</button>` : "";
    return `
      <div class="card">
        <h3>${act.titulo}</h3>
        <p>${act.descripcion || ""}</p>
        <button class="btn-upload" onclick="subirArchivo(${act.id})">Subir Archivo</button>
        ${botonVer}
        <button class="btn-delete" onclick="eliminarActividad(${act.id})">Eliminar Actividad</button>
      </div>`;
  }).join("");

  // Tarjetas de secciones del PDF
  const semanaCards = secciones.map((sec, i) => `
    <div class="semana-card" style="animation-delay:${i * 0.06}s">
      <div class="semana-card-icon">${sec.icono}</div>
      <h3>${sec.titulo}</h3>
      <p>${sec.descripcion}</p>
      <ul class="semana-card-list">
        ${sec.items.map(it => `<li>${it}</li>`).join("")}
      </ul>
    </div>`).join("");

  main.innerHTML = `
    <div class="semana-wrapper">
      <div class="semana-header">
        <div class="semana-num">Semana 1 · REA</div>
        <h2>${reaNombre}</h2>
        <p class="semana-desc">Contenido académico y actividades de este recurso educativo.</p>
      </div>

      ${secciones.length > 0 ? `
        <div style="padding:24px 44px 0;">
          <div class="semana-grid" style="padding:0;">
            ${semanaCards}
          </div>
        </div>` : ""}

      <div style="padding:20px 44px 8px 44px;display:flex;align-items:center;gap:10px;">
        <h2 style="margin:0;border:none;padding:0;font-size:18px;color:var(--azul);">Actividades</h2>
        <button onclick="crearActividad(${reaId})" style="margin:0;">➕ Nueva Actividad</button>
      </div>
      <div class="card-container">
        ${actCards || '<p style="padding:0 44px;color:var(--muted);">No hay actividades aún.</p>'}
      </div>
    </div>
  `;
}

/* ===============================
   CARGAR ACTIVIDADES POR REA
================================ */
async function loadActividades(reaId) {
  const res = await fetch(`${API}/actividades`);
  const actividades = await res.json();
  const filtradas = actividades.filter((a) => a.rea.id === reaId);
  const main = document.getElementById("mainContent");
  main.innerHTML = `
        <h2>Actividades</h2>
        <button onclick="crearActividad(${reaId})">➕ Nueva Actividad</button>
        <div class="card-container"></div>
    `;
  const container = document.querySelector(".card-container");
  filtradas.forEach((act) => {
    const card = document.createElement("div");
    card.classList.add("card");
    let botonVer = "";
    if (act.archivo) {
      botonVer = `
            <button class="btn-view" onclick="verArchivo('${act.archivo}')">Ver Archivo</button>
            <button class="btn-delete" onclick="eliminarArchivo(${act.id})">Eliminar Archivo</button>
        `;
    }
    card.innerHTML = `
        <h3>${act.titulo}</h3>
        <p>${act.descripcion || ""}</p>
        <button class="btn-upload" onclick="subirArchivo(${act.id})">Subir Archivo</button>
        ${botonVer}
        <button class="btn-delete" onclick="eliminarActividad(${act.id})">Eliminar Actividad</button>
    `;
    container.appendChild(card);
  });
}

/* ===============================
   CREAR ACTIVIDAD
================================ */
async function crearActividad(reaId) {
  const titulo = prompt("Título:");
  const descripcion = prompt("Descripción:");
  await fetch(`${API}/actividades?reaId=${reaId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo, descripcion }),
  });
  alert("Actividad creada");
  loadActividades(reaId);
}

/* ===============================
   ELIMINAR ACTIVIDAD
================================ */
async function eliminarActividad(id) {
  await fetch(`${API}/actividades/${id}`, { method: "DELETE" });
  alert("Actividad eliminada");
  location.reload();
}

/* ===============================
   SUBIR ARCHIVO
================================ */
function subirArchivo(id) {
  const input = document.createElement("input");
  input.type = "file";
  input.onchange = async () => {
    const file = input.files[0];
    const formData = new FormData();
    formData.append("file", file);
    await fetch(`${API}/actividades/${id}/archivo`, { method: "POST", body: formData });
    alert("Archivo subido");
    location.reload();
  };
  input.click();
}

/* ===============================
   VER ARCHIVO
================================ */
function verArchivo(ruta) {
  window.open(`/uploads/${ruta}`, "_blank");
}

/* ===============================
   ELIMINAR ARCHIVO
================================ */
async function eliminarArchivo(id) {
  await fetch(`${API}/actividades/${id}/archivo`, { method: "DELETE" });
  alert("Archivo eliminado");
  location.reload();
}
