/**
 * Sección: Manuales y Tutoriales
 * Contiene el HTML y la lógica propia de este ítem del menú lateral.
 * Se registra en window.Secciones['manuales'] y es cargado por js/script.js
 */
(function () {
  const SeccionManuales = {
    id: 'manuales',
    titulo: 'Manuales y Tutoriales',

    // HTML propio de esta sección (se inyecta dentro de su contenedor en index.html)
    html: `
  <h2 style="text-align: center; color: #1f2d44; font-size: 1.8rem; margin-bottom: 20px;">Manuales y Tutoriales</h2>

  <div class="card" style="padding: 25px; border-radius: 12px; border: 1px solid #e1e8f5; background: #fff;">
    <div style="background: #e9ecef; display: inline-block; padding: 5px 15px; border-radius: 15px; font-size: 0.8rem; font-weight: 600; color: #555; margin-bottom: 20px;">VideoTutoriales</div>

    <div style="border: 2px solid #aab7c6; border-radius: 15px; overflow: hidden;">
      
      <div style="padding: 15px 20px; border-bottom: 1px solid #aab7c6; display: flex; justify-content: space-between; align-items: center; background: #fff;">
        <div>
          <h4 style="margin: 0; color: #1f2d3a; font-size: 1rem;">Mi perfil</h4>
          <p style="margin: 5px 0 0; color: #777; font-size: 0.85rem;">Guía para el usuario para verificar sus datos personales.</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.85rem; color: #555; font-weight: 600;">29/01/2024</div>
          <div style="font-size: 0.75rem; color: #888;">WebSUM 2.0</div>
        </div>
      </div>

      <div style="padding: 15px 20px; border-bottom: 1px solid #aab7c6; display: flex; justify-content: space-between; align-items: center; background: #fff;">
        <div>
          <h4 style="margin: 0; color: #1f2d3a; font-size: 1rem;">Historial Académico</h4>
          <p style="margin: 5px 0 0; color: #777; font-size: 0.85rem;">Guía para el usuario para visualizar sus calificaciones.</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.85rem; color: #555; font-weight: 600;">29/01/2024</div>
          <div style="font-size: 0.75rem; color: #888;">WebSUM 2.0</div>
        </div>
      </div>

      <div style="padding: 15px 20px; border-bottom: 1px solid #aab7c6; display: flex; justify-content: space-between; align-items: center; background: #fff;">
        <div>
          <h4 style="margin: 0; color: #1f2d3a; font-size: 1rem;">Matricula Via Internet</h4>
          <p style="margin: 5px 0 0; color: #777; font-size: 0.85rem;">Guía para el usuario para que realice su matricula vía internet.</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.85rem; color: #555; font-weight: 600;">29/01/2024</div>
          <div style="font-size: 0.75rem; color: #888;">WebSUM 2.0</div>
        </div>
      </div>

      <div style="padding: 15px 20px; border-bottom: 1px solid #aab7c6; display: flex; justify-content: space-between; align-items: center; background: #fff;">
        <div>
          <h4 style="margin: 0; color: #1f2d3a; font-size: 1rem;">Reporte de Matricula</h4>
          <p style="margin: 5px 0 0; color: #777; font-size: 0.85rem;">Guía para el usuario para visualizar y descargar el Reporte de Matricula.</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.85rem; color: #555; font-weight: 600;">29/01/2024</div>
          <div style="font-size: 0.75rem; color: #888;">WebSUM 2.0</div>
        </div>
      </div>

<div style="padding: 15px 20px; border-bottom: 1px solid #aab7c6; display: flex; justify-content: space-between; align-items: center; background: #fff;">
        <div>
          <h4 style="margin: 0; color: #1f2d3a; font-size: 1rem;">Reporte de Prematricula</h4>
          <p style="margin: 5px 0 0; color: #777; font-size: 0.85rem;">Guía para el usuario para visualizar y descargar el Reporte de Prematricula.</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.85rem; color: #555; font-weight: 600;">29/01/2024</div>
          <div style="font-size: 0.75rem; color: #888;">WebSUM 2.0</div>
        </div>
      </div>

<div style="padding: 15px 20px; border-bottom: 1px solid #aab7c6; display: flex; justify-content: space-between; align-items: center; background: #fff;">
        <div>
          <h4 style="margin: 0; color: #1f2d3a; font-size: 1rem;">Reporte de Evaluaciones</h4>
          <p style="margin: 5px 0 0; color: #777; font-size: 0.85rem;">Guía para el usuario para el Ingreso de Evaluaciones.</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.85rem; color: #555; font-weight: 600;">29/01/2024</div>
          <div style="font-size: 0.75rem; color: #888;">WebSUM 2.0</div>
        </div>
      </div>

<div style="padding: 15px 20px; border-bottom: 1px solid #aab7c6; display: flex; justify-content: space-between; align-items: center; background: #fff;">
        <div>
          <h4 style="margin: 0; color: #1f2d3a; font-size: 1rem;">Programacion de Asignaturas</h4>
          <p style="margin: 5px 0 0; color: #777; font-size: 0.85rem;">Guía para el usuario para visualizar la informacion de las Asignaturas Programadas.</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.85rem; color: #555; font-weight: 600;">29/01/2024</div>
          <div style="font-size: 0.75rem; color: #888;">WebSUM 2.0</div>
        </div>
      </div>


      <div style="padding: 15px 20px; border-bottom: 1px solid #aab7c6; display: flex; justify-content: space-between; align-items: center; background: #fff;">
        <div>
          <h4 style="margin: 0; color: #1f2d3a; font-size: 1rem;">Mis Asistencias</h4>
          <p style="margin: 5px 0 0; color: #777; font-size: 0.85rem;">Guía para el usuario para visualizar sus asistencias a los cursos matriculados.</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.85rem; color: #555; font-weight: 600;">29/01/2024</div>
          <div style="font-size: 0.75rem; color: #888;">WebSUM 2.0</div>
        </div>
      </div>

<div style="padding: 15px 20px; border-bottom: 1px solid #aab7c6; display: flex; justify-content: space-between; align-items: center; background: #fff;">
        <div>
          <h4 style="margin: 0; color: #1f2d3a; font-size: 1rem;">Mis Tutorias</h4>
          <p style="margin: 5px 0 0; color: #777; font-size: 0.85rem;">Guía para el usuario para la Rectificacion de matricula del estudiante.</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 0.85rem; color: #555; font-weight: 600;">29/01/2024</div>
          <div style="font-size: 0.75rem; color: #888;">WebSUM 2.0</div>
        </div>
      </div>

    </div>
  </div>
`,

    // Se ejecuta automáticamente cada vez que la sección se muestra
    init: function () {
    }
  };

  window.Secciones = window.Secciones || {};
  window.Secciones['manuales'] = SeccionManuales;
})();