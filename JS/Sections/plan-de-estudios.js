/**
 * Sección: Plan de Estudios
 * Contiene el HTML y la lógica propia de este ítem del menú lateral.
 * Se registra en window.Secciones['plan'] y es cargado por js/script.js
 */
(function () {
  const SeccionPlanEstudios = {
    id: 'plan',
    titulo: 'Plan de Estudios',

    // HTML propio de esta sección (se inyecta dentro de su contenedor en index.html)
    html: `
  <h2 style="text-align: center; color: #1f2d44; font-size: 1.8rem; margin-bottom: 20px;">Plan de Estudios</h2>

  <div class="card" style="padding: 20px; margin-bottom: 25px; border-top: 5px solid #e9ecef;">
    <div style="background: #f1f4f9; display: inline-block; padding: 5px 15px; border-radius: 15px; font-size: 0.8rem; font-weight: 600; color: #555; margin-bottom: 15px;">Datos del Estudiante</div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
      <div style="display: flex; flex-direction: column; gap: 10px;">
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
        <div style="background: var(--blue-light); padding: 10px; border-radius: 8px;">
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
      <table style="width: 100%; border-collapse: collapse; border: 1px solid #e1e8f5;">
        <thead>
          <tr style="background: #f5f7fa; color: #555; font-size: 0.8rem;">
            <th style="padding: 10px; border: 1px solid #e1e8f5;">Esp.</th>
            <th style="padding: 10px; border: 1px solid #e1e8f5; text-align: left;">Asignatura</th>
            <th style="padding: 10px; border: 1px solid #e1e8f5;">Créd.</th>
            <th style="padding: 10px; border: 1px solid #e1e8f5;">Tipo</th>
            <th style="padding: 10px; border: 1px solid #e1e8f5;">Grupo</th>
            <th style="padding: 10px; border: 1px solid #e1e8f5;">Pre-Requisito</th>
            <th style="padding: 10px; border: 1px solid #e1e8f5;">Grupo</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: #e9e6ff;">
            <td colspan="7" style="text-align: center; padding: 5px; font-weight: 700; color: #6558d3; font-size: 0.75rem;">CICLO 1</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE001 - PROCESO CULTURAL ANDINO</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE002 - PROGRAMACIÓN Y COMPUTACIÓN</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE003 - DIBUJO TÉCNICO</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE004 - INGLÉS PARA ESCRITURA ACADÉMICA</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE005 - MATLAB</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE006 - CÁLCULOS BÁSICOS EN QUÍMICA</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE007 - SEGURIDAD E HIGIENE EN LABORATORIO</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE008 - FUNDAMENTOS DE RIESGOS DE DESASTRES Y CAMBIO CLIMÁTICO</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE009 - GEOGRAFIA ECONÓMICA DEL PERÚ</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE010 - CIUDADANÍA Y DERECHOS FUNDAMENTALES</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE011 - TALLER DE ELECTRICIDAD Y ELECTRONICA</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE012 - ECONOMIA GENERAL</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE013 - EMPRENDIMIENTO E INNOVACIÓN</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE014 - TALLER DE MÚSICA</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE015 - TALLER DE DANZA</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE016 - APRECIACIÓN DE CINE</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INE017 - QUECHUA</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GEG</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO101 - REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA I</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO102 - MÉTODOS DE ESTUDIO UNIVERSITARIO</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO103 - DESARROLLO PERSONAL Y LIDERAZGO</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO104 - CÁLCULO I</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO105 - BIOLOGÍA PARA CIENCIAS E INGENIERÍA</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO106 - ÁLGEBRA Y GEOMETRÍA ANALÍTICA</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO107 - MEDIO AMBIENTE Y DESARROLLO SOSTENIBLE</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>


<tr style="background: #e9e6ff;">
            <td colspan="7" style="text-align: center; padding: 5px; font-weight: 700; color: #6558d3; font-size: 0.75rem;">CICLO 2</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO201 - REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA II</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">INO101 - REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA I</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO202 - INVESTIGACIÓN FORMATIVA</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO203 - REALIDAD NACIONAL Y MUNDIAL</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO204 - CÁLCULO II</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">INO104 - CÁLCULO I</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO205 - FÍSICA I</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO206 - QUÍMICA GENERAL</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">INO207 - INTRODUCCIÓN A LAS CIENCIAS E INGENIERÍA</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>

          <tr style="background: #e9e6ff;">
            <td colspan="7" style="text-align: center; padding: 5px; font-weight: 700; color: #6558d3; font-size: 0.75rem;">CICLO 3</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO031 - AGROINDUSTRIAS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO032 - AGROTECNIA GENERAL</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO033 - CÁLCULO III</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO034 - CIRCUITOS Y MÁQUINAS ELÉCTRICAS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO035 - QUÍMICA ANALÍTICA</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO036 - QUÍMICA ORGÁNICA</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO037 - RECURSOS HIDROBIOLÓGICOS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>

          <tr style="background: #e9e6ff;">
            <td colspan="7" style="text-align: center; padding: 5px; font-weight: 700; color: #6558d3; font-size: 0.75rem;">CICLO 4</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO041 - BIOQUÍMICA GENERAL</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO036 - QUÍMICA ORGÁNICA</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO041 - BIOQUÍMICA GENERAL</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO035 - QUÍMICA ANALÍTICA</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO042 - CONTABILIDAD</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
          
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO043 - ESTADÍSTICA GENERAL</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO033 - CÁLCULO III</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO044 - FISICOQUÍMICA GENERAL</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO045 - MECÁNICA GENERAL</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO034 - CIRCUITOS Y MÁQUINAS ELÉCTRICAS</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO046 - QUÍMICA AGROINDUSTRIAL</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO036 - QUÍMICA ORGÁNICA</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO046 - QUÍMICA AGROINDUSTRIAL</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO031 - AGROINDUSTRIAS</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO046 - QUÍMICA AGROINDUSTRIAL</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO035 - QUÍMICA ANALÍTICA</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO052 - MÉTODOS NUMÉRICOS PARA LA INGENIERÍA</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO033 - CÁLCULO III</td>
            <td style="text-align: center;">--</td>
          </tr>

<tr style="background: #e9e6ff;">
            <td colspan="7" style="text-align: center; padding: 5px; font-weight: 700; color: #6558d3; font-size: 0.75rem;">CICLO 5</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO051 - ANÁLISIS DE PRODUCTOS AGROINDUSTRIALES</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO041 - BIOQUÍMICA GENERAL</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO051 - ANÁLISIS DE PRODUCTOS AGROINDUSTRIALES</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO046 - QUÍMICA AGROINDUSTRIAL</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO053 - MICROBIOLOGÍA GENERAL</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO041 - BIOQUÍMICA GENERAL</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO054 - PROPIEDADES FÍSICAS DE LOS MATERIALES AGROINDUSTRIALES</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO044 - FISICOQUÍMICA GENERAL</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO055 - TECNOLOGÍA POST-COSECHA</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO032 - AGROTECNIA GENERAL</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO056 - TERMODINÁMICA</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO044 - FISICOQUÍMICA GENERAL</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO056 - TERMODINÁMICA</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO045 - MECÁNICA GENERAL</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO057 - ZOOTECNIA GENERAL</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO037 - RECURSOS HIDROBIOLÓGICOS</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO057 - ZOOTECNIA GENERAL</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO032 - AGROTECNIA GENERAL</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO058 - INGLÉS TÉCNICO I</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center;">--</td>
          </tr>

          <tr style="background: #e9e6ff;">
            <td colspan="7" style="text-align: center; padding: 5px; font-weight: 700; color: #6558d3; font-size: 0.75rem;">CICLO 6</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO061 - ANÁLISIS DE COSTOS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO042 - CONTABILIDAD</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO062 - MÁQUINAS Y EQUIPOS AGROINDUSTRIALES</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO056 - TERMODINÁMICA</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO063 - MÉTODOS ESTADÍSTICOS PARA LA INVESTIGACIÓN</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO043 - ESTADÍSTICA GENERAL</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO064 - MICROBIOLOGÍA DE LOS ALIMENTOS</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO053 - MICROBIOLOGÍA GENERAL</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO065 - OPERACIONES UNITARIAS AGROINDUSTRIALES 1</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO052 - MÉTODOS NUMÉRICOS PARA LA INGENIERÍA</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO065 - OPERACIONES UNITARIAS AGROINDUSTRIALES 1</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO054 - PROPIEDADES FÍSICAS DE LOS MATERIALES AGROINDUSTRIALES</td>

            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO065 - OPERACIONES UNITARIAS AGROINDUSTRIALES 1</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO056 - TERMODINÁMICA</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO066 - TECNOLOGÍA POST-BENEFICIO</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO057 - ZOOTECNIA GENERAL</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO067 - INGLÉS TÉCNICO II</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO058 - INGLÉS TÉCNICO I</td>
            <td style="text-align: center;">--</td>
          </tr>

<tr style="background: #e9e6ff;">
            <td colspan="7" style="text-align: center; padding: 5px; font-weight: 700; color: #6558d3; font-size: 0.75rem;">CICLO 7</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO071 - GESTIÓN DE SISTEMAS DE LA CALIDAD</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO063 - MÉTODOS ESTADÍSTICOS PARA LA INVESTIGACIÓN</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO071 - GESTIÓN DE SISTEMAS DE LA CALIDAD</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO064 - MICROBIOLOGÍA DE LOS ALIMENTOS</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO072 - MERCADOTECNIA</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO061 - ANÁLISIS DE COSTOS</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO073 - OPERACIONES UNITARIAS AGROINDUSTRIALES II</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO065 - OPERACIONES UNITARIAS AGROINDUSTRIALES 1</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO051 - ANÁLISIS DE PRODUCTOS AGROINDUSTRIALES</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO064 - MICROBIOLOGÍA DE LOS ALIMENTOS</td>

            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO055 - TECNOLOGÍA POST-COSECHA</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO066 - TECNOLOGÍA POST-BENEFICIO</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1101 - AGROINDUSTRIA FORESTAL</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO055 - TECNOLOGÍA POST-COSECHA</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1102 - DISEÑO E IMPLEMENTACIÓN DE BIOPROCESOS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO085 - TECNOLOGÍA AGROINDUSTRIAL II</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1103 - DISEÑO Y DESARROLLO DE PRODUCTOS AGROINDUSTRIALES</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO085 - TECNOLOGÍA AGROINDUSTRIAL II</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1104 - ENOLOGÍA Y BEBIDAS FERMENTADAS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO085 - TECNOLOGÍA AGROINDUSTRIAL II</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1105 - GESTIÓN AMBIENTAL</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO071 - GESTIÓN DE SISTEMAS DE LA CALIDAD</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1106 - GESTIÓN DE FINANZAS Y COSTOS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO072 - MERCADOTECNIA</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1107 - GESTIÓN DE LA CADENA DE SUMINISTROS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO083 - INGENIERÍA DE LA PRODUCCIÓN</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1108 - INDUSTRIA AVÍCOLA Y DERIVADOS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO066 - TECNOLOGÍA POST-BENEFICIO</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1109 - INDUSTRIA CÁRNICAS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO066 - TECNOLOGÍA POST-BENEFICIO</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1110 - INDUSTRIAS LÁCTEAS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1111 - NANOTECNOLOGÍA AGROINDUSTRIAL</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1112 - NEGOCIOS INTERNACIONALES</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO072 - MERCADOTECNIA</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1113 - PROCESAMIENTO DE ALIMENTOS BALANCEADOS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO066 - TECNOLOGÍA POST-BENEFICIO</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1114 - PROCESAMIENTO DE CULTIVOS AGROINDUSTRIALES</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO055 - TECNOLOGÍA POST-COSECHA</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1115 - PROCESAMIENTO DE FIBRAS, CUEROS Y PIELES</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO066 - TECNOLOGÍA POST-BENEFICIO</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1116 - PROCESAMIENTO DE FRUTAS Y HORTALIZAS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1117 - PROCESAMIENTO DE GRANOS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO055 - TECNOLOGÍA POST-COSECHA</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1118 - QUÍMICA INSTRUMENTAL</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO051 - ANÁLISIS DE PRODUCTOS AGROINDUSTRIALES</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1119 - REOLOGÍA Y TEXTURA</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO065 - OPERACIONES UNITARIAS AGROINDUSTRIALES 1</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1120 - SEGURIDAD Y SALUD OCUPACIONAL</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO071 - GESTIÓN DE SISTEMAS DE LA CALIDAD</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1121 - TECNOLOGÌA DE ACEITES Y GRASAS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1122 - TECNOLOGÍA DE AZÚCARES Y DERIVADOS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1123 - TECNOLOGÍA DE RECURSOS HIDROBIOLÓGICOS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO066 - TECNOLOGÍA POST-BENEFICIO</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1124 - TOXICOLOGÍA DE ALIMENTOS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO051 - ANÁLISIS DE PRODUCTOS AGROINDUSTRIALES</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO1125 - TRATAMIENTO DE AGUAS Y EFLUENTES</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">E</td>
            <td style="text-align: center;">GE</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td>
            <td style="text-align: center;">--</td>
          </tr>
<tr style="background: #e9e6ff;">
            <td colspan="7" style="text-align: center; padding: 5px; font-weight: 700; color: #6558d3; font-size: 0.75rem;">CICLO 8</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO081 - PROYECTO DE TESIS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO081 - PROYECTO DE TESIS</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO067 - INGLÉS TÉCNICO II</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO082 - INGENIERÍA DEL FRÍO</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO073 - OPERACIONES UNITARIAS AGROINDUSTRIALES II</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO082 - INGENIERÍA DEL FRÍO</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO083 - INGENIERÍA DE LA PRODUCCIÓN</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO071 - GESTIÓN DE SISTEMAS DE LA CALIDAD</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO083 - INGENIERÍA DE LA PRODUCCIÓN</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO072 - MERCADOTECNIA</td>
            <td style="text-align: center;">--</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO084 - OPERACIONES UNITARIAS AGROINDUSTRIALES III</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO073 - OPERACIONES UNITARIAS AGROINDUSTRIALES II</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO085 - TECNOLOGÍA AGROINDUSTRIAL II</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td>
<tr style="background: #e9e6ff;">
            <td colspan="7" style="text-align: center; padding: 5px; font-weight: 700; color: #6558d3; font-size: 0.75rem;">CICLO 9</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO091 - DISEÑO DE PLANTA</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO084 - OPERACIONES UNITARIAS AGROINDUSTRIALES III</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO091 - DISEÑO DE PLANTA</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO083 - INGENIERÍA DE LA PRODUCCIÓN</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO092 - ENVASES Y EMBALAJE</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO083 - INGENIERÍA DE LA PRODUCCIÓN</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO092 - ENVASES Y EMBALAJE</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO084 - OPERACIONES UNITARIAS AGROINDUSTRIALES III</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO093 - EVALUACIÓN SENSORIAL</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO063 - MÉTODOS ESTADÍSTICOS PARA LA INVESTIGACIÓN</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO094 - DIRECCIÓN DE PERSONAS Y NEGOCIACIÓN</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO083 - INGENIERÍA DE LA PRODUCCIÓN</td>
            <td style="text-align: center;">--</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO095 - TESIS I</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO081 - PROYECTO DE TESIS</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO095 - TESIS I</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO085 - TECNOLOGÍA AGROINDUSTRIAL II</td>
          </tr>
<tr style="background: #e9e6ff;">
            <td colspan="7" style="text-align: center; padding: 5px; font-weight: 700; color: #6558d3; font-size: 0.75rem;">CICLO 10</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO0101 - AGRO-EXPORTACIÓN</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO091 - DISEÑO DE PLANTA</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO0102 - BIOTECNOLOGÍA AGROINDUSTRIAL</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO085 - TECNOLOGÍA AGROINDUSTRIAL II</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO0103 - FORMULACIÓN Y EVALUACIÓN DE PROYECTOS AGROINDUSTRIALES</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO091 - DISEÑO DE PLANTA</td>
            <td style="text-align: center;">--</td>
          </tr>
          <tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO0104 - PRINCIPIOS DE CONTROL Y AUTOMATIZACIÓN</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO083 - INGENIERÍA DE LA PRODUCCIÓN</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO0104 - PRINCIPIOS DE CONTROL Y AUTOMATIZACIÓN</td>
            <td style="text-align: center;">4</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO084 - OPERACIONES UNITARIAS AGROINDUSTRIALES III</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO0105 - TESIS II</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">GAM</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO095 - TESIS I</td>
            <td style="text-align: center;">--</td>
<tr style="font-size: 0.85rem; background: #fafcff;">
            <td style="text-align: center;">0</td>
            <td style="text-align: left; padding-left: 10px;">IAO0106 - TRABAJO DE INVESTIGACIÓN</td>
            <td style="text-align: center;">3</td>
            <td style="text-align: center;">O</td>
            <td style="text-align: center;">--</td>
            <td style="text-align: center; background: #e2f5e9; color: #2e7d32; font-weight: 600;">IAO095 - TESIS I</td>
          </tr>


        </tbody>
      </table>
    </div>
  </div>
`,

    // Se ejecuta automáticamente cada vez que la sección se muestra
    init: function () {
    }
  };

  window.Secciones = window.Secciones || {};
  window.Secciones['plan'] = SeccionPlanEstudios;
})();