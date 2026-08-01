/**
 * Sección: Matrícula
 * Contiene el HTML y la lógica propia de este ítem del menú lateral.
 * Se registra en window.Secciones['matricula'] y es cargado por js/script.js
 */
(function () {
  const SeccionMatricula = {
    id: 'matricula',
    titulo: 'Matrícula',

    // HTML propio de esta sección (se inyecta dentro de su contenedor en index.html)
    html: `
  <h2 style="text-align: center; color: #1f2d44; font-size: 1.8rem; margin-bottom: 2rem;">Información de Matrícula</h2>
  
  <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px; align-items: start;">
    
    <div class="card" style="padding: 2rem;">
      <h3 style="color: #333; margin-top: 0;">Información importante acerca del módulo de Matrícula Vía Web</h3>
      
      <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 1.5rem;">
        <div>
          <b style="color: #1f2d3a; display: block; margin-bottom: 5px;">1. Control de Cronograma de Matrícula</b>
          <p style="font-size: 0.85rem; color: #6658d3; margin: 0;">Verificación de Fechas de Inicio y Fin de Matrícula del Período Vigente y de Acceso al Módulo de Matrícula.</p>
        </div>

        <div>
          <b style="color: #1f2d3a; display: block; margin-bottom: 5px;">2. Control de Acceso de Facultad</b>
          <p style="font-size: 0.85rem; color: #6658d3; margin: 0;">Verificación de la Programación Interna establecida por la Oficina de Matrícula de su Facultad.</p>
        </div>

        <div>
          <b style="color: #1f2d3a; display: block; margin-bottom: 5px;">3. Control de Pre-Matrícula</b>
          <p style="font-size: 0.85rem; color: #6658d3; margin: 0;">Verificación del Registro de Pre-Matrícula el cual debe haber sido procesado por la Oficina de Matrícula de su Facultad. De no existir debe acercarse a la Oficina de Matricula personalmente.</p>
        </div>

        <div>
          <b style="color: #1f2d3a; display: block; margin-bottom: 5px;">4. Control de Deudas Registradas</b>
          <p style="font-size: 0.85rem; color: #6658d3; margin: 0;">Verificación de registros de deudas de dinero o de material bibliográfico. Esta información nos la remite la Oficina de Matrícula de su facultad. De registrar deudas pendientes debe acercarse personalmente a la Oficina de Matrícula de su Facultad.</p>
        </div>

        <div>
          <b style="color: #1f2d3a; display: block; margin-bottom: 5px;">5. Interfaz de Matrícula</b>
          <p style="font-size: 0.85rem; color: #6658d3; margin: 0;">Presentación de Asignaturas de Pre-Matrícula y secciones abiertas. <b>Efectuar Matrícula</b> registrará su matrícula. Si la Matrícula se efectúa <b>satisfactoriamente</b>, se mostrará automáticamente el Reporte de Matricula vigente, de lo contrario mostrará un error.</p>
        </div>
      </div>
    </div>

    <div class="card" style="padding: 1.5rem; background: #fff;">
      <div style="background: #f8d7da; color: #721c24; padding: 10px; border-radius: 6px; text-align: center; font-weight: 700; font-size: 0.85rem; margin-bottom: 1.5rem; border: 1px solid #f5c6cb;">
        MATRICULA INTERNET INHABILITADA
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 1.5rem;">
        <div style="background: var(--blue-light); padding: 10px; border-radius: 8px;">
          <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #1f2d3a;">Periodo Académico</label>
          <span style="font-size: 0.85rem; color: var(--blue-dark); font-weight: 600;">2025-2</span>
        </div>
        <div style="background: var(--blue-light); padding: 10px; border-radius: 8px;">
          <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #1f2d3a;">Fecha del Sistema</label>
          <span style="font-size: 0.85rem; color: var(--blue-dark); font-weight: 600;">2025-12-21 13:03:45</span>
        </div>
        <div style="background: var(--blue-light); padding: 10px; border-radius: 8px;">
          <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #1f2d3a;">Inicio de Matrícula</label>
          <span style="font-size: 0.85rem; color: var(--blue-dark); font-weight: 600;">05/08/2025 05:00:00</span>
        </div>
        <div style="background: var(--blue-light); padding: 10px; border-radius: 8px;">
          <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #1f2d3a;">Fin de Matrícula</label>
          <span style="font-size: 0.85rem; color: var(--blue-dark); font-weight: 600;">08/08/2025 23:55:00</span>
        </div>
      </div>

      <div style="background: #d1ecf1; color: #0c5460; padding: 15px; border-radius: 8px; text-align: center; font-size: 0.9rem; font-weight: 500;">
        Usted registra matrícula en el presente semestre <a href="#" style="color: #007bff; text-decoration: none; font-weight: 700;">Ver Matrícula</a>
      </div>
    </div>

  </div>
`,

    // Se ejecuta automáticamente cada vez que la sección se muestra
    init: function () {
    }
  };

  window.Secciones = window.Secciones || {};
  window.Secciones['matricula'] = SeccionMatricula;
})();