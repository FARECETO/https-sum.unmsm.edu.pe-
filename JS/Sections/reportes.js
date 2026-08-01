/**
 * Sección: Historial Académico
 * Contiene el HTML y la lógica propia de este ítem del menú lateral.
 * Se registra en window.Secciones['reportes'] y es cargado por js/script.js
 */
(function () {
  const SeccionReportes = {
    id: 'reportes',
    titulo: 'Historial Académico',

    // HTML propio de esta sección (se inyecta dentro de su contenedor en index.html)
    html: `
      
      <div class="cards-wrapper">
        <div class="card">
          <div class="section-title">Resumen del Historial Académico</div>
          <div class="two-column">
            <div>
              <div class="summary-line">
                <span class="label">Creditaje Requerido para Egresar:</span>
                <span class="value big">227</span>
              </div>
              <div class="summary-line">
                <span class="label">Creditaje Aprobado:</span>
                <span class="value big">203</span>
              </div>
              <div class="summary-line">
                <span class="label">- Obligatorios:</span>
                <span class="value big">187</span>
              </div>
              <div class="summary-line">
                <span class="label">- De Especialidad:</span>
                <span class="value big">0</span>
              </div>
              <div class="summary-line">
                <span class="label">- Electivos Generales:</span>
                <span class="value big">16</span>
              </div>
              <div class="summary-line">
                <span class="label">- Electivos de Especialidad:</span>
                <span class="value big">0</span>
              </div>
              <div class="summary-line">
                <span class="label">- Optativos:</span>
                <span class="value big">0</span>
              </div>
              <div class="summary-line">
                <span class="label">- Alternativos:</span>
                <span class="value big">0</span>
              </div>
              <div class="summary-line">
                <span class="label">- De otra Especialidad:</span>
                <span class="value big">0</span>
              </div>
              <div class="summary-line">
                <span class="label">- Más de una vez:</span>
                <span class="value big">0</span>
              </div>
              <div class="summary-line">
                <span class="label">- Otros:</span>
                <span class="value big">0</span>
              </div>
            </div>
            <div>
              <div class="summary-line">
                <span class="label">Creditaje Faltante:</span>
                <span class="value big">42</span>
              </div>
              <div class="summary-line">
                <span class="label">Promedio Ponderado:</span>
                <span class="value big">15.568</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="section-title">Gráfico de comparación entre Periodo Académico y Promedio</div>
          <div class="chart-container">
            <canvas id="lineChart" height="200"></canvas>
          </div>
        </div>
      </div>

      <div class="table-section">
        <div style="display:flex; justify-content: space-between; align-items:center; flex-wrap: wrap; gap:10px; margin-bottom:10px;">
          <div><button class="download"><i class="fas fa-file-pdf"></i> Descargar</button></div>
          <div>
            <label style="margin-right:6px;">Búsqueda:</label>
            <input type="text" placeholder="Buscar..." style="padding:6px 10px; border-radius:6px; border:1px solid #cfdcec; min-width:180px;">
          </div>
        </div>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Ciclo</th>
                <th>Plan</th>
                <th>Tipo</th>
                <th>Asignatura</th>
                <th>Calificación</th>
                <th>Créditos</th>
                <th>Sección</th>
                <th>Acta</th>
              </tr>
            </thead>
            <tbody>
              <tr class="period-row">
                <td colspan="8" style="background: rgba(101, 88, 211, 0.15); color: rgb(101, 88, 211); font-weight: bolder; text-align: center; padding: 8px;">PERIODO ACADÉMICO 2022-1</td>
              </tr>
              <tr><td>1</td><td>2018</td><td>E</td><td>INE002 - PROGRAMACIÓN Y COMPUTACIÓN</td><td><span class="grade-badge">17</span></td><td>2</td><td>1</td><td>P-20221732018INE0021P</td></tr>
              <tr><td>1</td><td>2018</td><td>E</td><td>INE006 - CÁLCULOS BÁSICOS EN QUÍMICA</td><td><span class="grade-badge">18</span></td><td>2</td><td>1</td><td>P-20221732018INE0061P</td></tr>
              <tr><td>1</td><td>2018</td><td>O</td><td>INO101 - REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA I</td><td><span class="grade-badge">14</span></td><td>3</td><td>1</td><td>P-202217320180INO1011P</td></tr>
              <tr><td>1</td><td>2018</td><td>O</td><td>INO102 - MÉTODOS DE ESTUDIO UNIVERSITARIO</td><td><span class="grade-badge">18</span></td><td>2</td><td>1</td><td>P-20221732018INE0021P</td></tr>
              <tr><td>1</td><td>2018</td><td>O</td><td>INO103 - DESARROLLO PERSONAL Y LIDERAZGO</td><td><span class="grade-badge">18</span></td><td>2</td><td>1</td><td>P-202217320180INO1031P</td></tr>
              <tr><td>1</td><td>2018</td><td>O</td><td>INO104 - CÁLCULO I</td><td><span class="grade-badge">16</span></td><td>4</td><td>1</td><td>P-202217320180INO1041P</td></tr>
              <tr><td>1</td><td>2018</td><td>O</td><td>INO105 - BIOLOGÍA PARA CIENCIAS E INGENIERÍA</td><td><span class="grade-badge">16</span></td><td>4</td><td>1</td><td>P-202217320180INO1051P</td></tr>
              <tr><td>1</td><td>2018</td><td>O</td><td>INO106 - ÁLGEBRA Y GEOMETRÍA ANALÍTICA</td><td><span class="grade-badge">19</span></td><td>4</td><td>1</td><td>P-202217320180INO1061P</td></tr>
              <tr><td>1</td><td>2018</td><td>O</td><td>INO107 - MEDIO AMBIENTE Y DESARROLLO SOSTENIBLE</td><td><span class="grade-badge">16</span></td><td>3</td><td>1</td><td>P - 202217320180INO1071P</td></tr>

              <tr class="period-row">
                <td colspan="8" style="background: rgba(101, 88, 211, 0.15); color: rgb(101, 88, 211); font-weight: bolder; text-align: center; padding: 8px;">PERIODO ACADÉMICO 2022-2</td>
              </tr>
              <tr><td>2</td><td>2018</td><td>O</td><td>INO201 - REDACCIÓN Y TÉCNICAS DE COMUNICACIÓN EFECTIVA II</td><td><span class="grade-badge">15</span></td><td>3</td><td>1</td><td>P-202227320180INO2011P</td></tr>
              <tr><td>2</td><td>2018</td><td>O</td><td>INO202 - INVESTIGACIÓN FORMATIVA</td><td><span class="grade-badge">18</span></td><td>3</td><td>1</td><td>P-202227320180INO2021P</td></tr>
              <tr><td>2</td><td>2018</td><td>O</td><td>INO203 - REALIDAD NACIONAL Y MUNDIAL</td><td><span class="grade-badge">18</span></td><td>2</td><td>1</td><td>P-202227320180INO2031P</td></tr>
              <tr><td>2</td><td>2018</td><td>O</td><td>INO204 - CÁLCULO II</td><td><span class="grade-badge">19</span></td><td>4</td><td>2</td><td>P-202227320180INO2042P</td></tr>
              <tr><td>2</td><td>2018</td><td>O</td><td>INO205 - FÍSICA I</td><td><span class="grade-badge">18</span></td><td>4</td><td>1</td><td>P-202227320180INO2051P</td></tr>
              <tr><td>2</td><td>2018</td><td>O</td><td>INO206 - QUÍMICA GENERAL</td><td><span class="grade-badge">17</span></td><td>4</td><td>2</td><td>P-202227320180INO2062P</td></tr>
              <tr><td>2</td><td>2018</td><td>O</td><td>INO207 - INTRODUCCIÓN A LAS CIENCIAS E INGENIERÍA</td><td><span class="grade-badge">15</span></td><td>2</td><td>2</td><td>P-202227320180INO2072P</td></tr>

              <tr class="period-row">
                 <td colspan="8" style="background: rgba(101, 88, 211, 0.15); color: rgb(101, 88, 211); font-weight: bolder; text-align: center; padding: 8px;">PERIODO ACADÉMICO 2023-1</td>
              </tr>
              <tr><td>3</td><td>2018</td><td>O</td><td>IAO031 - AGROINDUSTRIAS</td><td><span class="grade-badge">13</span></td><td>3</td><td>1</td><td>P-202317320180IAO0311P</td></tr>
              <tr><td>3</td><td>2018</td><td>O</td><td>IAO032 - AGROTECNIA GENERAL</td><td><span class="grade-badge">13</span></td><td>3</td><td>1</td><td>P-202317320180IAO0321P</td></tr>
              <tr><td>3</td><td>2018</td><td>O</td><td>IAO033 - CÁLCULO III</td><td><span class="grade-badge">12</span></td><td>3</td><td>1</td><td>P-202317320180IAO0331P</td></tr>
              <tr><td>3</td><td>2018</td><td>O</td><td>IAO034 - CIRCUITOS Y MÁQUINAS ELÉCTRICAS</td><td><span class="grade-badge">18</span></td><td>3</td><td>1</td><td>P-202317320180IAO0341P</td></tr>
              <tr><td>3</td><td>2018</td><td>O</td><td>IAO035 - QUÍMICA ANALÍTICA</td><td><span class="grade-badge">14</span></td><td>3</td><td>1</td><td>P-202317320180IAO0351P</td></tr>
              <tr><td>3</td><td>2018</td><td>O</td><td>IAO036 - QUÍMICA ORGÁNICA</td><td><span class="grade-badge">16</span></td><td>4</td><td>1</td><td>P-202317320180IAO0361P</td></tr>
              <tr><td>3</td><td>2018</td><td>O</td><td>IAO037 - RECURSOS HIDROBIOLÓGICOS</td><td><span class="grade-badge">11</span></td><td>3</td><td>1</td><td>P-202317320180IAO0371P</td></tr>

              <tr class="period-row">
                 <td colspan="8" style="background: rgba(101, 88, 211, 0.15); color: rgb(101, 88, 211); font-weight: bolder; text-align: center; padding: 8px;">PERIODO ACADÉMICO 2023-2</td>
              </tr>
              <tr><td>4</td><td>2018</td><td>O</td><td>IAO041 - BIOQUÍMICA GENERAL</td><td><span class="grade-badge">15</span></td><td>3</td><td>1</td><td>P-202327320180IAO0411P</td></tr>
              <tr><td>4</td><td>2018</td><td>O</td><td>IAO042 - CONTABILIDAD</td><td><span class="grade-badge">14</span></td><td>3</td><td>1</td><td>P-202327320180IAO0421P</td></tr>
              <tr><td>4</td><td>2018</td><td>O</td><td>IAO043 - ESTADÍSTICA GENERAL</td><td><span class="grade-badge">15</span></td><td>4</td><td>1</td><td>P-202317320180IAO0371P</td></tr>
              <tr><td>4</td><td>2018</td><td>O</td><td>IAO044 - FISICOQUÍMICA GENERAL</td><td><span class="grade-badge">16</span></td><td>3</td><td>1</td><td>P-202327320180IAO0441P</td></tr>
              <tr><td>4</td><td>2018</td><td>O</td><td>IAO045 - MECÁNICA GENERAL</td><td><span class="grade-badge">19</span></td><td>3</td><td>1</td><td>P-202327320180IAO0451P</td></tr>
              <tr><td>4</td><td>2018</td><td>O</td><td>IAO046 - QUÍMICA AGROINDUSTRIAL</td><td><span class="grade-badge">13</span></td><td>4</td><td>2</td><td>P-202327320180IAO0462P</td></tr>
              <tr><td>4</td><td>2018</td><td>O</td><td>IAO052 - MÉTODOS NUMÉRICOS PARA LA INGENIERÍA</td><td><span class="grade-badge">15</span></td><td>4</td><td>2</td><td>P-202327320180IAO0522P</td></tr>

              <tr class="period-row">
                 <td colspan="8" style="background: rgba(101, 88, 211, 0.15); color: rgb(101, 88, 211); font-weight: bolder; text-align: center; padding: 8px;">PERIODO ACADÉMICO 2024-0</td>
              </tr>
              <tr><td>5</td><td>2018</td><td>O</td><td>IAO051 - PRÁCTICA ANÁLISIS DE PRODUCTOS AGROINDUSTRIALES</td><td><span class="grade-badge">15</span></td><td>4</td><td>1</td><td>P-202407320180IAO0511P</td></tr>
              <tr><td>5</td><td>2018</td><td>O</td><td>IAO051 - ANÁLISIS DE PRODUCTOS AGROINDUSTRIALES</td><td><span class="grade-badge">16</span></td><td>4</td><td>1</td><td>P-202407320180IAO0511P</td></tr>

              <tr class="period-row">
                 <td colspan="8" style="background: rgba(101, 88, 211, 0.15); color: rgb(101, 88, 211); font-weight: bolder; text-align: center; padding: 8px;">PERIODO ACADÉMICO 2024-1</td>
              </tr>
              <tr><td>5</td><td>2018</td><td>O</td><td>IAO053 - MICROBIOLOGÍA GENERAL</td><td><span class="grade-badge">14</span></td><td>4</td><td>1</td><td>P-202427320180IAO0531P</td></tr>
              <tr><td>5</td><td>2018</td><td>O</td><td>IAO054 - PROPIEDADES FÍSICAS DE LOS MATERIALES AGROINDUSTRIALES</td><td><span class="grade-badge">20</span></td><td>3</td><td>1</td><td>P-202417320180IAO0541P</td></tr>
              <tr><td>5</td><td>2018</td><td>O</td><td>IAO055 - TECNOLOGÍA POST-COSECHA</td><td><span class="grade-badge">14</span></td><td>3</td><td>1</td><td>P-202427320180IAO0522P</td></tr>
              <tr><td>5</td><td>2018</td><td>O</td><td>IAO056 - TERMODINÁMICA</td><td><span class="grade-badge">17</span></td><td>4</td><td>1</td><td>P-202417320180IAO0561P</td></tr>
              <tr><td>5</td><td>2018</td><td>O</td><td>IAO057 - ZOOTECNIA GENERAL</td><td><span class="grade-badge">16</span></td><td>3</td><td>1</td><td>P-202317320180IAO0371P</td></tr>
              <tr><td>5</td><td>2018</td><td>O</td><td>IAO058 - INGLÉS TÉCNICO I</td><td><span class="grade-badge">16</span></td><td>3</td><td>2</td><td>P-202417320180IAO0582P</td></tr>

              <tr class="period-row">
                 <td colspan="8" style="background: rgba(101, 88, 211, 0.15); color: rgb(101, 88, 211); font-weight: bolder; text-align: center; padding: 8px;">PERIODO ACADÉMICO 2024-2</td>
              </tr>
              <tr><td>6</td><td>2018</td><td>O</td><td>IAO061 - ANÁLISIS DE COSTOS</td><td><span class="grade-badge">15</span></td><td>3</td><td>1</td><td>P-202427320180IAO0611P</td></tr>
              <tr><td>6</td><td>2018</td><td>O</td><td>IAO062 - MÁQUINAS Y EQUIPOS AGROINDUSTRIALES</td><td><span class="grade-badge">16</span></td><td>4</td><td>1</td><td>P-202427320180IAO0621P</td></tr>
              <tr><td>6</td><td>2018</td><td>O</td><td>IAO063 - MÉTODOS ESTADÍSTICOS PARA LA INVESTIGACIÓN</td><td><span class="grade-badge">16</span></td><td>4</td><td>1</td><td>P-202427320180IAO0631P</td></tr>
              <tr><td>6</td><td>2018</td><td>O</td><td>IAO064 - MICROBIOLOGÍA DE LOS ALIMENTOS</td><td><span class="grade-badge">14</span></td><td>4</td><td>1</td><td>P-202417320180IAO0582P</td></tr>
              <tr><td>6</td><td>2018</td><td>O</td><td>IAO065 - OPERACIONES UNITARIAS AGROINDUSTRIALES 1</td><td><span class="grade-badge">15</span></td><td>4</td><td>1</td><td>P-202427320180IAO0531P</td></tr>
              <tr><td>6</td><td>2018</td><td>O</td><td>IAO066 - TECNOLOGÍA POST-BENEFICIO</td><td><span class="grade-badge">14</span></td><td>3</td><td>1</td><td>P-202427320180IAO0522P</td></tr>
              <tr><td>6</td><td>2018</td><td>O</td><td>IAO067 - INGLÉS TÉCNICO II</td><td><span class="grade-badge">15</span></td><td>3</td><td>1</td><td>P-202417320180IAO0371P</td></tr>

              <tr class="period-row">
                 <td colspan="8" style="background: rgba(101, 88, 211, 0.15); color: rgb(101, 88, 211); font-weight: bolder; text-align: center; padding: 8px;">PERIODO ACADÉMICO 2025-1</td>
              </tr>
              <tr><td>7</td><td>2018</td><td>O</td><td>IAO071 - GESTIÓN DE SISTEMAS DE LA CALIDAD</td><td><span class="grade-badge">14</span></td><td>3</td><td>1</td><td>P-202527320180IAO0611P</td></tr>
              <tr><td>7</td><td>2018</td><td>O</td><td>IAO072 - MERCADOTECNIA</td><td><span class="grade-badge">17</span></td><td>3</td><td>2</td><td>P-202527320180IAO0621P</td></tr>
              <tr><td>7</td><td>2018</td><td>O</td><td>IAO073 - OPERACIONES UNITARIAS AGROINDUSTRIALES II</td><td><span class="grade-badge">15</span></td><td>4</td><td>1</td><td>P-202517320180IAO0731P</td></tr>
              <tr><td>7</td><td>2018</td><td>O</td><td>IAO074 - TECNOLOGÍA AGROINDUSTRIAL I</td><td><span class="grade-badge">14</span></td><td>4</td><td>1</td><td>P-202517320180IAO0582P</td></tr>
              <tr><td>7</td><td>2018</td><td>E</td><td>IAO1114 - PROCESAMIENTO DE CULTIVOS AGROINDUSTRIALES</td><td><span class="grade-badge">15</span></td><td>3</td><td>1</td><td>P-202517320180IAO11141P</td></tr>
              <tr><td>7</td><td>2018</td><td>E</td><td>IAO1117 - PROCESAMIENTO DE GRANOS</td><td><span class="grade-badge">15</span></td><td>3</td><td>1</td><td>P-202517320180IAO11171P</td></tr>
              <tr><td>7</td><td>2018</td><td>E</td><td>IAO1118 - QUÍMICA INSTRUMENTAL</td><td><span class="grade-badge">17</span></td><td>3</td><td>1</td><td>P-202517320180IAO11181P</td></tr>

              <tr class="period-row">
                 <td colspan="8" style="background: rgba(101, 88, 211, 0.15); color: rgb(101, 88, 211); font-weight: bolder; text-align: center; padding: 8px;">PERIODO ACADÉMICO 2025-2</td>
              </tr>
              <tr><td>8</td><td>2018</td><td>O</td><td>IAO081 - PROYECTO DE TESIS</td><td><span class="grade-badge">14</span></td><td>3</td><td>1</td><td>P-202527320180IAO0611P</td></tr>
              <tr><td>8</td><td>2018</td><td>O</td><td>IAO082 - INGENIERÍA DEL FRÍO</td><td><span class="grade-badge">15</span></td><td>4</td><td>2</td><td>P-202527320180IAO0621P</td></tr>
              <tr><td>8</td><td>2018</td><td>O</td><td>IAO083 - INGENIERÍA DE LA PRODUCCIÓN</td><td><span class="grade-badge">15</span></td><td>4</td><td>1</td><td>P-202517320180IAO0731P</td></tr>
              <tr><td>8</td><td>2018</td><td>O</td><td>IAO084 - OPERACIONES UNITARIAS AGROINDUSTRIALES III</td><td><span class="grade-badge">17</span></td><td>4</td><td>1</td><td>P-202517320180IAO0582P</td></tr>
              <tr><td>8</td><td>2018</td><td>O</td><td>IAO085 - TECNOLOGÍA AGROINDUSTRIAL II</td><td><span class="grade-badge">14</span></td><td>3</td><td>1</td><td>P-202517320180IAO11141P</td></tr>

              <tr class="period-row">
                 <td colspan="8" style="background: rgba(101, 88, 211, 0.15); color: rgb(101, 88, 211); font-weight: bolder; text-align: center; padding: 8px;">PERIODO ACADÉMICO 2026-1</td>
              </tr>
              <tr><td>9</td><td>2018</td><td>O</td><td>IAO091 - DISEÑO DE PLANTA</td><td><span class="grade-badge">14</span></td><td>4</td><td>1</td><td>P-202527320180IAO0611P</td></tr>
              <tr><td>9</td><td>2018</td><td>O</td><td>IAO092 - ENVASES Y EMBALAJE</td><td><span class="grade-badge">15</span></td><td>3</td><td>2</td><td>P-202527320180IAO0621P</td></tr>
              <tr><td>9</td><td>2018</td><td>O</td><td>IAO083 - EVALUACIÓN SENSORIAL</td><td><span class="grade-badge">15</span></td><td>3</td><td>2</td><td>P-202517320180IAO0731P</td></tr>
              <tr><td>9</td><td>2018</td><td>O</td><td>IAO084 - DIRECCIÓN DE PERSONAS Y NEGOCIACIÓN</td><td><span class="grade-badge">15</span></td><td>4</td><td>2</td><td>P-202517320180IAO0582P</td></tr>
              <tr><td>9</td><td>2018</td><td>O</td><td>IAO085 - TESIS I</td><td><span class="grade-badge">16</span></td><td>3</td><td>6</td><td>P-202517320180IAO11141P</td></tr>
              <tr><td>9</td><td>2018</td><td>E</td><td>IAO1112 - NEGOCIOS INTERNACIONALES</td><td><span class="grade-badge">16</span></td><td>3</td><td>1</td><td>P-202517320180IAO11141P</td></tr>
            </tbody>
          </table>
        </div>
      </div>
`,

    // Se ejecuta automáticamente cada vez que la sección se muestra
    init: function () {
    // Inicializa el gráfico de comparación de promedios (Chart.js)
    const canvas = document.getElementById('lineChart');
    if (canvas && window.Chart) {
      const format3 = (v) => Number(v).toFixed(3);
      new Chart(canvas.getContext('2d'), {
        type: 'line',
        data: {
          labels: ['2022-1', '2022-2', '2023-1', '2023-2', '2024-1', '2024-2', '2025-1', '2025-2','2026-1'],
          datasets: [{
            label: 'Promedio Semestre',
            data: [16.769, 17.318, 13.955, 13.957, 16.412, 15.267, 15.645, 15.759,16.229],
            borderColor: '#3a80f7',
            backgroundColor: 'rgba(58,128,247,0.1)',
            fill: true,
            tension: 0.35,
            pointRadius: 6,
            pointBackgroundColor: '#3a80f7',
            pointBorderWidth: 0,
            hoverRadius: 8,
            spanGaps: true
          }]
        },
        options: {
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => `Promedio: ${format3(ctx.parsed.y)}`
              }
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              suggestedMin: 12,
              suggestedMax: 18,
              ticks: { callback: (v) => format3(v), stepSize: 1 },
              title: { display: true, text: 'Promedios', font: { weight: '600' } },
              grid: { drawBorder: false }
            },
            x: {
              grid: { display: false },
              title: { display: true, text: 'Periodos', font: { weight: '600' } }
            }
          },
          interaction: { mode: 'nearest', intersect: false },
          maintainAspectRatio: false
        }
      });
    }

    }
  };

  window.Secciones = window.Secciones || {};
  window.Secciones['reportes'] = SeccionReportes;
})();