/**
 * Barra lateral (sidebar)
 * Define los ítems del menú y cómo se pintan.
 * Cada ítem apunta a un id de sección registrado en window.Secciones
 * (ver js/sections/*.js). Para agregar/quitar un ítem del menú
 * solo se edita el array ITEMS de este archivo.
 */
(function () {
  const ITEMS = [
    { id: 'inicio',     icon: 'fa-house',                label: 'Inicio' },
    { id: 'info',       icon: 'fa-user',                 label: 'Mi Información' },
    { id: 'matricula',  icon: 'fa-edit',                 label: 'Matrícula' },
    { id: 'reportes',   icon: 'fa-chart-bar',             label: 'Reportes' },
    { id: 'asistencia', icon: 'fa-calendar-check',        label: 'Mis Asistencias' },
    { id: 'tutoria',    icon: 'fa-chalkboard-teacher',    label: 'Mi Tutoría' },
    { id: 'plan',       icon: 'fa-book',                  label: 'Plan de Estudios' },
    { id: 'manuales',   icon: 'fa-question-circle',       label: 'Manuales y Tutoriales' },
  ];

  function render(navListEl, onSelect) {
    navListEl.innerHTML = ITEMS.map(item => `
      <li class="nav-item" data-target="${item.id}">
        <i class="fas ${item.icon}"></i> <span>${item.label}</span>
      </li>
    `).join('');

    navListEl.querySelectorAll('.nav-item').forEach(li => {
      li.addEventListener('click', () => onSelect(li.getAttribute('data-target')));
    });
  }

  function marcarActivo(navListEl, id) {
    navListEl.querySelectorAll('.nav-item').forEach(li => {
      li.classList.toggle('active', li.getAttribute('data-target') === id);
    });
  }

  window.Sidebar = { ITEMS, render, marcarActivo };
})();