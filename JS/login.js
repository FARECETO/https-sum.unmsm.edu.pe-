/**
 * Pantalla de Login (Intranet Alumno)
 * Pinta el formulario dentro de #loginScreen y, al autenticar,
 * dispara window.App.entrarAlSistema().
 */
(function () {
  function render(container) {
    container.innerHTML = `
      <div class="login-bg">
        <img src="img/UNMSM.webp" alt="" onerror="this.parentElement.style.display='none'">
      </div>

      <div class="login-card">
        <h2 class="login-title">Intranet Alumno</h2>

        <div class="login-logo">
          <img src="img/sum.png" alt="Sistema Único de Matrícula" class="login-logo-img">
        </div>

        <div id="loginError" class="login-error">Usuario o contraseña incorrectos.</div>

        <form id="loginForm">
          <div class="login-field">
            <label for="loginUsuario">Usuario</label>
            <input type="text" id="loginUsuario" autocomplete="username" required>
          </div>
          <div class="login-field">
            <label for="loginPassword">Contraseña</label>
            <input type="password" id="loginPassword" autocomplete="current-password" required>
          </div>
          <button type="submit" class="btn-login">Iniciar Sesión</button>
        </form>
      </div>
    `;

    const form = container.querySelector('#loginForm');
    const errorBox = container.querySelector('#loginError');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const usuario = container.querySelector('#loginUsuario').value.trim();
      const password = container.querySelector('#loginPassword').value.trim();

      // Validación simple de demostración: basta con completar ambos campos.
      if (usuario && password) {
        errorBox.classList.remove('visible');
        window.App.entrarAlSistema(usuario);
      } else {
        errorBox.classList.add('visible');
      }
    });
  }

  window.Login = { render };
})();