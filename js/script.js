/**
 * script.js — Orquestador principal
 * No contiene el HTML de ninguna sección: solo coordina
 * login.js, sidebar.js y js/sections/*.js
 */
(function () {
  const loginScreen   = document.getElementById('loginScreen');
  const appScreen      = document.getElementById('appScreen');
  const navListEl       = document.getElementById('navList');
  const pageTitleDisplay = document.getElementById('pageTitleDisplay');
  const userNameDisplay  = document.getElementById('userNameDisplay');
  const timerEl          = document.getElementById('timer');
  const btnLogout        = document.getElementById('btnLogout');

  let usuarioActual = '';
  let timerInterval = null;
  let totalSeconds = 15 * 60; // 15 minutos de sesión

  // ---------- Navegación entre secciones ----------
  function mostrarSeccion(id) {
    document.querySelectorAll('.content-section').forEach(sec => {
      sec.classList.toggle('active', sec.id === id);
    });
    Sidebar.marcarActivo(navListEl, id);

    const seccion = window.Secciones[id];
    if (seccion) {
      pageTitleDisplay.textContent = seccion.titulo;
    }
  }

  // Función global usada por los botones "Ver más..." dentro de cada sección
  window.triggerNav = function (id) {
    mostrarSeccion(id);
  };

  // ---------- Timer de sesión ----------
  function pad(n) { return String(n).padStart(2, '0'); }

  function actualizarTimer() {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    timerEl.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    if (totalSeconds > 0) totalSeconds--;
  }

  function iniciarTimer() {
    totalSeconds = 15 * 60;
    actualizarTimer();
    clearInterval(timerInterval);
    timerInterval = setInterval(actualizarTimer, 1000);
  }

  function detenerTimer() {
    clearInterval(timerInterval);
  }

  // ---------- Montaje de secciones ----------
  function montarSecciones() {
    Object.keys(window.Secciones).forEach(id => {
      const contenedor = document.getElementById(id);
      const seccion = window.Secciones[id];
      if (contenedor && seccion) {
        contenedor.innerHTML = seccion.html;
        if (typeof seccion.init === 'function') {
          seccion.init();
        }
      }
    });
  }

  // ---------- Entrar / Salir del sistema ----------
  function entrarAlSistema(usuario) {
    usuarioActual = usuario;
    userNameDisplay.textContent = 'HUALLPACUNA CRUZ, FARID WALTER';

    loginScreen.classList.add('oculto');
    appScreen.classList.remove('oculto');

    mostrarSeccion('inicio');
    iniciarTimer();
  }

  function salirDelSistema() {
    detenerTimer();
    appScreen.classList.add('oculto');
    loginScreen.classList.remove('oculto');
    Login.render(loginScreen);
  }

  window.App = { entrarAlSistema, salirDelSistema, mostrarSeccion };

  // ---------- Arranque ----------
  document.addEventListener('DOMContentLoaded', () => {
    Sidebar.render(navListEl, mostrarSeccion);
    montarSecciones();
    Login.render(loginScreen);

    btnLogout.addEventListener('click', salirDelSistema);
  });
})();