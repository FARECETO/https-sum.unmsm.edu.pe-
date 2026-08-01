/**
 * Sección: Mis Asistencias
 * Contiene el HTML y la lógica propia de este ítem del menú lateral.
 * Se registra en window.Secciones['asistencia'] y es cargado por js/script.js
 */
(function () {
  const SeccionMisAsistencias = {
    id: 'asistencia',
    titulo: 'Mis Asistencias',

    // HTML propio de esta sección (se inyecta dentro de su contenedor en index.html)
    html: `
  <h2 style="text-align: center; color: #1f2d44; font-size: 1.8rem; margin-bottom: 20px;">Mis Asistencias</h2>

  <div class="card" style="padding: 20px; margin-bottom: 25px; border-top: 5px solid #e9ecef;">
    <div style="background: #f1f4f9; display: inline-block; padding: 5px 15px; border-radius: 15px; font-size: 0.8rem; font-weight: 600; color: #555; margin-bottom: 15px;">Datos del Estudiante</div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="background: var(--blue-light); padding: 10px; border-radius: 8px;">
          <label style="display: block; font-size: 0.75rem; font-weight: 700; color: #1f2d3a;">Periodo Académico</label>
          <span style="font-size: 0.85rem; color: var(--blue-dark); font-weight: 600;">2025-2</span>
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

  <div class="table-section">
    <div style="display:flex; justify-content: space-between; align-items:center; margin-bottom:15px;">
      <button class="download"><i class="fas fa-file-pdf"></i> Descargar</button>
      <div style="display:flex; align-items:center; gap:10px;">
        <label style="font-size: 0.85rem; color: #666;">Búsqueda:</label>
        <input type="text" style="padding:6px 10px; border-radius:6px; border:1px solid #cfdcec; width: 200px;">
      </div>
    </div>

    <div class="table-wrapper">
      <table style="min-width: 100%; border: 1px solid #e1e8f5;">
        <thead>
          <tr style="background: #f5f7fa;">
            <th rowspan="2">Asignatura</th>
            <th rowspan="2">Sección</th>
            <th rowspan="2"># Clases</th>
            <th colspan="2">Asistencias</th>
            <th colspan="2">Tardanzas</th>
            <th colspan="2">Faltas</th>
            <th rowspan="2">Acción</th>
          </tr>
          <tr style="background: #f5f7fa;">
            <th>N°</th><th>(%)</th>
            <th>N°</th><th>(%)</th>
            <th>N°</th><th>(%)</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td style="text-align: left; padding-left: 15px;">IAO091 - DISEÑO DE PLANTA</td>
            <td>1</td><td>16</td><td>13</td>
            <td><div style="background:#e9ecef; border-radius:4px; overflow:hidden; position:relative; width:100px; height:18px;"><div style="background:#28a745; width:80%; height:100%; color:white; font-size:0.7rem; display:flex; align-items:center; justify-content:center;">80%</div></div></td>
            <td>3</td><td>20%</td><td>0</td>
            <td><div style="background:#e9ecef; border-radius:4px; overflow:hidden; position:relative; width:100px; height:18px;"><div style="background:#dc3545; width:0%; height:100%; color:white; font-size:0.7rem; display:flex; align-items:center; justify-content:center;">20%</div></div></td>
            <td><button style="background:#ffc107; border:none; padding:5px 8px; border-radius:4px; cursor:pointer;"><i class="fas fa-calendar-alt" style="color:#fff;"></i></button></td>
          </tr>

          <tr>
            <td style="text-align: left; padding-left: 15px;">IAO092 - ENVASES Y EMBALAJE</td>
            <td>2</td><td>16</td><td>14</td>
            <td><div style="background:#e9ecef; border-radius:4px; overflow:hidden; position:relative; width:100px; height:18px;"><div style="background:#28a745; width:85%; height:100%; color:white; font-size:0.7rem; display:flex; align-items:center; justify-content:center;">85%</div></div></td>
            <td>0</td><td>0%</td><td>2</td>
            <td><div style="background:#e9ecef; border-radius:4px; overflow:hidden; position:relative; width:100px; height:18px;"><div style="background:#dc3545; width:15%; height:100%; color:white; font-size:0.7rem; display:flex; align-items:center; justify-content:center;">15%</div></div></td>
            <td><button style="background:#ffc107; border:none; padding:5px 8px; border-radius:4px; cursor:pointer;"><i class="fas fa-calendar-alt" style="color:#fff;"></i></button></td>
          </tr>


          <tr>
            <td style="text-align: left; padding-left: 15px;">IAO083 - EVALUACIÓN SENSORIAL</td>
            <td>2</td><td>16</td><td>15</td>
            <td><div style="background:#e9ecef; border-radius:4px; overflow:hidden; position:relative; width:100px; height:18px;"><div style="background:#28a745; width:95%; height:100%; color:white; font-size:0.7rem; display:flex; align-items:center; justify-content:center;">95%</div></div></td>
            <td>0</td><td>0%</td><td>1</td>
            <td><div style="background:#e9ecef; border-radius:4px; overflow:hidden; position:relative; width:100px; height:18px;"><div style="background:#dc3545; width:5%; height:100%; color:white; font-size:0.7rem; display:flex; align-items:center; justify-content:center;">5%</div></div></td>
            <td><button style="background:#ffc107; border:none; padding:5px 8px; border-radius:4px; cursor:pointer;"><i class="fas fa-calendar-alt" style="color:#fff;"></i></button></td>
          </tr>

<tr>
            <td style="text-align: left; padding-left: 15px;">IAO084 - DIRECCIÓN DE PERSONAS Y NEGOCIACIÓN</td>
            <td>2</td><td>16</td><td>15</td>
            <td><div style="background:#e9ecef; border-radius:4px; overflow:hidden; position:relative; width:100px; height:18px;"><div style="background:#28a745; width:95%; height:100%; color:white; font-size:0.7rem; display:flex; align-items:center; justify-content:center;">95%</div></div></td>
            <td>0</td><td>0%</td><td>1</td>
            <td><div style="background:#e9ecef; border-radius:4px; overflow:hidden; position:relative; width:100px; height:18px;"><div style="background:#dc3545; width:5%; height:100%; color:white; font-size:0.7rem; display:flex; align-items:center; justify-content:center;">5%</div></div></td>
            <td><button style="background:#ffc107; border:none; padding:5px 8px; border-radius:4px; cursor:pointer;"><i class="fas fa-calendar-alt" style="color:#fff;"></i></button></td>
          </tr>

<tr>
            <td style="text-align: left; padding-left: 15px;">IAO085 - TESIS I</td>
            <td>6</td><td>16</td><td>14</td>
            <td><div style="background:#e9ecef; border-radius:4px; overflow:hidden; position:relative; width:100px; height:18px;"><div style="background:#28a745; width:87.5%; height:100%; color:white; font-size:0.7rem; display:flex; align-items:center; justify-content:center;">87.5%</div></div></td>
            <td>2</td><td>12.5%</td><td>0</td>
            <td><div style="background:#e9ecef; border-radius:4px; overflow:hidden; position:relative; width:100px; height:18px;"><div style="background:#dc3545; width:0%; height:100%; color:white; font-size:0.7rem; display:flex; align-items:center; justify-content:center;">0%</div></div></td>
            <td><button style="background:#ffc107; border:none; padding:5px 8px; border-radius:4px; cursor:pointer;"><i class="fas fa-calendar-alt" style="color:#fff;"></i></button></td>
          </tr>

<tr>
            <td style="text-align: left; padding-left: 15px;">IAO1112 - NEGOCIOS INTERNACIONALES</td>
            <td>1</td><td>16</td><td>14</td>
            <td><div style="background:#e9ecef; border-radius:4px; overflow:hidden; position:relative; width:100px; height:18px;"><div style="background:#28a745; width:87.5%; height:100%; color:white; font-size:0.7rem; display:flex; align-items:center; justify-content:center;">87.5%</div></div></td>
            <td>2</td><td>12.5%</td><td>0</td>
            <td><div style="background:#e9ecef; border-radius:4px; overflow:hidden; position:relative; width:100px; height:18px;"><div style="background:#dc3545; width:0%; height:100%; color:white; font-size:0.7rem; display:flex; align-items:center; justify-content:center;">0%</div></div></td>
            <td><button style="background:#ffc107; border:none; padding:5px 8px; border-radius:4px; cursor:pointer;"><i class="fas fa-calendar-alt" style="color:#fff;"></i></button></td>
          </tr>
       
        </tbody>
      </table>
    </div>
    <div style="margin-top: 15px; font-size: 0.8rem; color: #777;">Mostrando 1 - 5 de 5 registros</div>
  </div>
`,

    // Se ejecuta automáticamente cada vez que la sección se muestra
    init: function () {
    }
  };

  window.Secciones = window.Secciones || {};
  window.Secciones['asistencia'] = SeccionMisAsistencias;
})();