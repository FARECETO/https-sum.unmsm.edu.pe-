/**
 * Sección: Mi Tutoría
 * Contiene el HTML y la lógica propia de este ítem del menú lateral.
 * Se registra en window.Secciones['tutoria'] y es cargado por js/script.js
 */
(function () {
  const SeccionMiTutoria = {
    id: 'tutoria',
    titulo: 'Mi Tutoría',

    // HTML propio de esta sección (se inyecta dentro de su contenedor en index.html)
    html: `
  <h2 style="text-align: center; color: #1f2d44; font-size: 1.8rem; margin-bottom: 20px;">Mis Tutorías</h2>

  <div class="card" style="padding: 20px; margin-bottom: 25px; border-top: 5px solid #e9ecef;">
    <div style="background: #f1f4f9; display: inline-block; padding: 5px 15px; border-radius: 15px; font-size: 0.8rem; font-weight: 600; color: #555; margin-bottom: 15px;">Datos del Estudiante</div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="background: var(--blue-light); padding: 10px; border-radius: 8px;">
          <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #1f2d3a;">Periodo Académico</label>
          <span style="font-size: 0.85rem; color: var(--blue-dark); font-weight: 600;">20252</span>
        </div>
        <div style="background: var(--blue-light); padding: 10px; border-radius: 8px;">
          <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #1f2d3a;">Facultad</label>
          <span style="font-size: 0.85rem; color: var(--blue-dark); font-weight: 600;">7 - QUÍMICA E INGENIERÍA QUÍMICA</span>
        </div>
        <div style="background: var(--blue-light); padding: 10px; border-radius: 8px;">
          <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #1f2d3a;">Especialidad</label>
          <span style="font-size: 0.85rem; color: var(--blue-dark); font-weight: 600;">0 - Estudios Generales</span>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="background: transparent; padding: 10px; height: 42px;"></div> <div style="background: var(--blue-light); padding: 10px; border-radius: 8px;">
          <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #1f2d3a;">Programa</label>
          <span style="font-size: 0.85rem; color: var(--blue-dark); font-weight: 600;">3 - E.P. de Ingeniería Agroindustrial</span>
        </div>
        <div style="background: var(--blue-light); padding: 10px; border-radius: 8px;">
          <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #1f2d3a;">Plan de Estudios</label>
          <span style="font-size: 0.85rem; color: var(--blue-dark); font-weight: 600;">2018 - Plan de Estudios 2018</span>
        </div>
      </div>
    </div>
  </div>

  <div class="table-section" style="padding: 0; border-radius: 8px; overflow: hidden;">
    <div class="table-wrapper">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: #f5f7fa; color: #555;">
            <th style="padding: 15px; border: 1px solid #e1e8f5;">Docente</th>
            <th style="padding: 15px; border: 1px solid #e1e8f5;">Cod. Asignatura</th>
            <th style="padding: 15px; border: 1px solid #e1e8f5;">Resolucion</th>
            <th style="padding: 15px; border: 1px solid #e1e8f5;">Fecha</th>
            <th style="padding: 15px; border: 1px solid #e1e8f5;">Observacion</th>
            <th style="padding: 15px; border: 1px solid #e1e8f5;">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" style="padding: 20px; text-align: center; color: #888; font-style: italic; background: #fff;">
              No hay tutorías registradas.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="padding: 15px; background: #fff; border-top: 1px solid #eee; font-size: 0.85rem; color: #666;">
      Mostrando 0 registros
    </div>
  </div>
`,

    // Se ejecuta automáticamente cada vez que la sección se muestra
    init: function () {
    }
  };

  window.Secciones = window.Secciones || {};
  window.Secciones['tutoria'] = SeccionMiTutoria;
})();