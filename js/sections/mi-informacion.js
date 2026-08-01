/**
 * Sección: Mi Información
 * Contiene el HTML y la lógica propia de este ítem del menú lateral.
 * Se registra en window.Secciones['info'] y es cargado por js/script.js
 */
(function () {
  const SeccionMiInformacion = {
    id: 'info',
    titulo: 'Mi Información',

    // HTML propio de esta sección (se inyecta dentro de su contenedor en index.html)
    html: `
  <div class="info-container" style="display: grid; grid-template-columns: 350px 1fr; gap: 20px;">
    
    <div class="card" style="text-align: center; padding: 2rem;">
      <div style="position: relative; display: inline-block; margin-bottom: 1rem;">
        <img src="F.png" alt="Foto Perfil" style="width: 180px; height: 180px; border-radius: 50%; object-fit: cover; border: 5px solid white; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
      </div>
      
      <h3 style="margin: 0.5rem 0; font-size: 1.2rem; color: #1f2d3a;">HUALLPACUNA CRUZ, FARID WALTER</h3>
      <p style="color: #5f6368; font-size: 0.9rem; margin-bottom: 1.5rem;">Estudiante</p>

      <div style="display: flex; justify-content: space-around; margin-bottom: 2rem;">
        <div>
          <div style="font-size: 1.1rem; font-weight: 700; color: var(--blue-dark);">22070060</div>
          <div style="font-size: 0.75rem; color: #888;">Código</div>
        </div>
        <div>
          <div style="font-size: 1.1rem; font-weight: 700; color: var(--blue-dark);">15.568</div>
          <div style="font-size: 0.75rem; color: #888;">Promedio</div>
        </div>
      </div>

      <button style="background: #ffc107; border: none; padding: 12px 25px; border-radius: 25px; font-weight: 600; width: 100%; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 1.5rem;">
        <i class="fas fa-id-card"></i> Descargar Perfil
      </button>

      <div style="text-align: left; font-size: 0.85rem; color: #555; display: flex; flex-direction: column; gap: 12px;">
        <div><i class="fas fa-university" style="width: 20px; color: var(--blue-dark);"></i> <b>Facultad:</b> 7 - QUÍMICA E INGENIERÍA QUÍMICA</div>
        <div><i class="fas fa-graduation-cap" style="width: 20px; color: var(--blue-dark);"></i> <b>Escuela:</b> 3 - E.P. de Ingeniería Agroindustrial</div>
        <div><i class="fas fa-atom" style="width: 20px; color: var(--blue-dark);"></i> <b>Especialidad:</b> 0 - Estudios Generales</div>
        <div><i class="fas fa-book" style="width: 20px; color: var(--blue-dark);"></i> <b>Plan de Estudios:</b> 2018 - Plan de Estudios 2018</div>
      </div>
    </div>




    <div class="card" style="padding: 0;">
      <div style="display: flex; background: #f8f9fa; border-bottom: 1px solid #eee; border-radius: 12px 12px 0 0;">
        <div style="padding: 15px 25px; border-bottom: 3px solid var(--blue-dark); color: var(--blue-dark); font-weight: 600; cursor: pointer;">Información Personal</div>
        <div style="padding: 15px 25px; color: #666; cursor: pointer;">Información Académica</div>
        <div style="padding: 15px 25px; color: #666; cursor: pointer;">Cambio de Contraseña</div>
      </div>

      <div style="padding: 20px; display: flex; flex-direction: column; gap: 8px;">
        <div class="data-row" style="display: flex; align-items: center; background: #f1f4f9; padding: 12px 15px; border-radius: 8px;">
          <i class="fas fa-id-card" style="width: 30px; color: #444;"></i>
          <span style="flex: 1; font-weight: 500; font-size: 0.9rem;">Documento de Identidad</span>
          <span style="color: var(--blue-dark); font-weight: 600;">DNI - 71352856</span>
        </div>
        <div class="data-row" style="display: flex; align-items: center; background: #f1f4f9; padding: 12px 15px; border-radius: 8px;">
          <i class="fas fa-users" style="width: 30px; color: #444;"></i>
          <span style="flex: 1; font-weight: 500; font-size: 0.9rem;">Estado Civil</span>
          <span style="color: var(--blue-dark); font-weight: 600;">Soltero</span>
        </div>
        <div class="data-row" style="display: flex; align-items: center; background: #f1f4f9; padding: 12px 15px; border-radius: 8px;">
          <i class="fas fa-venus-mars" style="width: 30px; color: #444;"></i>
          <span style="flex: 1; font-weight: 500; font-size: 0.9rem;">Sexo</span>
          <span style="color: var(--blue-dark); font-weight: 600;">Masculino</span>
        </div>
        <div class="data-row" style="display: flex; align-items: center; background: #f1f4f9; padding: 12px 15px; border-radius: 8px;">
          <i class="fas fa-calendar-alt" style="width: 30px; color: #444;"></i>
          <span style="flex: 1; font-weight: 500; font-size: 0.9rem;">Fecha de Nacimiento</span>
          <span style="color: var(--blue-dark); font-weight: 600;">02-09-2003</span>
        </div>
        <div class="data-row" style="display: flex; align-items: center; background: #f1f4f9; padding: 12px 15px; border-radius: 8px;">
          <i class="fas fa-map-marker-alt" style="width: 30px; color: #444;"></i>
          <span style="flex: 1; font-weight: 500; font-size: 0.9rem;">Lugar de Nacimiento</span>
          <span style="color: var(--blue-dark); font-weight: 600;">LIMA / LIMA / VILLA MARIA DEL TRIUNFO</span>
        </div>
        <div class="data-row" style="display: flex; align-items: center; background: #f1f4f9; padding: 12px 15px; border-radius: 8px;">
          <i class="fas fa-phone" style="width: 30px; color: #444;"></i>
          <span style="flex: 1; font-weight: 500; font-size: 0.9rem;">Teléfono</span>
          <span style="color: var(--blue-dark); font-weight: 600;">6055209</span>
        </div>
        <div class="data-row" style="display: flex; align-items: center; background: #f1f4f9; padding: 12px 15px; border-radius: 8px;">
          <i class="fas fa-mobile-alt" style="width: 30px; color: #444;"></i>
          <span style="flex: 1; font-weight: 500; font-size: 0.9rem;">Celular</span>
          <span style="color: var(--blue-dark); font-weight: 600;">903060259</span>
        </div>
        <div class="data-row" style="display: flex; align-items: center; background: #f1f4f9; padding: 12px 15px; border-radius: 8px;">
          <i class="fas fa-envelope" style="width: 30px; color: #444;"></i>
          <span style="flex: 1; font-weight: 500; font-size: 0.9rem;">Correo Institucional</span>
          <span style="color: var(--blue-dark); font-weight: 600;">farid.huallpacuna@unmsm.edu.pe</span>
        </div>
        <div class="data-row" style="display: flex; align-items: center; background: #f1f4f9; padding: 12px 15px; border-radius: 8px;">
          <i class="fas fa-home" style="width: 30px; color: #444;"></i>
          <span style="flex: 1; font-weight: 500; font-size: 0.9rem;">Domicilio</span>
          <span style="color: var(--blue-dark); font-weight: 600;">LIMA / LIMA / VILLA MARIA DEL TRIUNFO</span>
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
  window.Secciones['info'] = SeccionMiInformacion;
})();