/**
 * Sección: Inicio
 * Contiene el HTML y la lógica propia de este ítem del menú lateral.
 * Se registra en window.Secciones['inicio'] y es cargado por js/script.js
 */
(function () {
  const SeccionInicio = {
    id: 'inicio',
    titulo: 'Inicio',

    // HTML propio de esta sección (se inyecta dentro de su contenedor en index.html)
    html: `
      <div class="dashboard-layout">
        
        <div class="profile-card-container">
          <div class="profile-header">
            <img src="F.png" alt="Foto Perfil" class="profile-img">
            <div class="profile-titles">
              <h3>HUALLPACUNA CRUZ, FARID WALTER</h3>
              <span>Estudiante</span>
            </div>
          </div>

          <div class="info-block">
            <label>Código</label>
            <p>22070060</p>
          </div>

          <div class="info-block">
            <label>Facultad</label>
            <p>7 - QUÍMICA E INGENIERÍA QUÍMICA</p>
          </div>

          <div class="info-block">
            <label>Programa</label>
            <p>3 - E.P. de Ingeniería Agroindustrial</p>
          </div>

          <div class="info-block">
            <label>Especialidad</label>
            <p>0 - Estudios Generales</p>
          </div>

          <div class="info-block">
            <label>Periodo Académico</label>
            <p>2025-2</p>
          </div>
        </div>

        <div class="shortcuts-grid">
          
          <div class="shortcut-card">
            <div>
              <div class="tag">Mi Información</div>
              <h3>Información Personal Académica</h3>
              <ul>
                <li>Nombre, Fecha y Lugar de Nacimiento, Estado Civil, Sexo</li>
                <li>Domicilio, Teléfono y Correo Electrónico</li>
                <li>Facultad, Programa Académico, Especialidad</li>
                <li>Plan de Estudios, Año y Modalidad de Ingreso</li>
                <li>Situación Académica y Estado de Permanencia</li>
                <li>Promedio Ponderado, Número de Períodos Matriculados</li>
              </ul>
            </div>
            <button class="btn-ver-mas" onclick="triggerNav('info')">Ver más... <i class="fas fa-arrow-right"></i></button>
          </div>

          <div class="shortcut-card">
            <div>
              <div class="tag">Mi Información</div>
              <h3>Historial Académico y Calificaciones</h3>
              <ul>
                <li>Periodos Académicos Matriculados, Plan de Estudios</li>
                <li>Ciclo, Asignatura, Creditaje, Tipo Asignatura</li>
                <li>Calificación, Sección, Tipo y Número de Acta</li>
              </ul>
            </div>
            <button class="btn-ver-mas" onclick="triggerNav('reportes')">Ver más... <i class="fas fa-arrow-right"></i></button>
          </div>

          <div class="shortcut-card">
            <div>
              <div class="tag blue">Matrícula</div>
              <h3>Matrícula Vía Internet</h3>
              <ul>
                <li>Periodo Académico Vigente</li>
                <li>Fecha, Usuario, Tipo de Matrícula</li>
                <li>Ciclo/Año, Código, Nombre, Tipo Asignatura</li>
                <li>Sección Matriculada, Docente</li>
                <li>Total de Cursos y Créditos Matriculados</li>
              </ul>
            </div>
            <button class="btn-ver-mas" onclick="triggerNav('matricula')">Ver más... <i class="fas fa-arrow-right"></i></button>
          </div>

          <div class="shortcut-card">
            <div>
              <div class="tag blue">Matrícula</div>
              <h3>Programación de Cursos</h3>
              <ul>
                <li>Asignatura, Creditaje, Horas Teoría, Práctica, Laboratorio</li>
                <li>Sección, Docente, Turno, Aula, Horario</li>
              </ul>
            </div>
            <button class="btn-ver-mas" onclick="triggerNav('matricula')">Ver más... <i class="fas fa-arrow-right"></i></button>
          </div>

           <div class="shortcut-card">
            <div>
              <div class="tag blue">Reportes</div>
              <h3>Reporte Pre-Matrícula</h3>
              <ul>
                <li>Prioridad de Matrícula</li>
                <li>Plan, Código y Nombre Descriptivo, Ciclo, Creditaje y Repitencias de la Asignatura</li>
                <li>Etapa del Proceso de Matrícula</li>
              </ul>
            </div>
            <button class="btn-ver-mas" onclick="triggerNav('matricula')">Ver más... <i class="fas fa-arrow-right"></i></button>
          </div>

<div class="shortcut-card">
            <div>
              <div class="tag blue">Reportes</div>
              <h3>Reporte Matrícula</h3>
              <ul>
                <li>Registro de Matrícula del Período Académico Vigente</li>
                <li>Fecha, Usuario, Tipo de Matrícula</li>
                <li>Ciclo/Año, Código, Nombre, Tipo Asignatura</li>
                <li>Sección Matriculada, Docente</li>
              </ul>
            </div>
            <button class="btn-ver-mas" onclick="triggerNav('matricula')">Ver más... <i class="fas fa-arrow-right"></i></button>
          </div>

<div class="shortcut-card">
            <div>
              <div class="tag blue">Reportes</div>
              <h3>Reporte de Deudas</h3>
              <ul>
                <li>Relación de deudas</li>
                <li>Fecha, Usuario, Tipo de Matrícula</li>
                <li>Ciclo/Año, Código, Nombre</li>
                <li>Monto de deuda</li>
              </ul>
            </div>
            <button class="btn-ver-mas" onclick="triggerNav('matricula')">Ver más... <i class="fas fa-arrow-right"></i></button>
          </div>

<div class="shortcut-card">
            <div>
              <div class="tag blue">Reportes</div>
              <h3>Plan de Estudios</h3>
              <ul>
                <li>Asignatura Creditaje y Especificaiones del Plan</li>
                <li>Ciclo/Año, Código, Nombre, Tipo, Creditaje Asignatura</li>
                <li>Código, Nombre Asignatura Pre-Requisito</li>
                <li>Grupo</li>
              </ul>
            </div>
            <button class="btn-ver-mas" onclick="triggerNav('matricula')">Ver más... <i class="fas fa-arrow-right"></i></button>
          </div>

        </div>
      </div>
`,

    // Se ejecuta automáticamente cada vez que la sección se muestra
    init: function () {
    }
  };

  window.Secciones = window.Secciones || {};
  window.Secciones['inicio'] = SeccionInicio;
})();