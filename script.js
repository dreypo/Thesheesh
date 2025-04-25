document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('profileForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // prevent form from submitting normally

      // Gather form data
      const formData = new FormData(form);
      const profile = {};
      formData.forEach((value, key) => {
        profile[key] = value;
      });

      console.log("Profile data submitted:", profile);
      alert("Profile updated successfully!");

      // Redirect to homepage (adjust the file name if needed)
      window.location.href = "home.html";
    });
  }

  // ==== Login/Register/Forgot Section ====
  const card = document.getElementById('card');
  const userBtn = document.getElementById('userBtn');
  const adminBtn = document.getElementById('adminBtn');
  const loginTitle = document.getElementById('loginTitle');
  const loginButton = document.querySelector('#loginForm button');

  const registerLink = document.querySelector('#loginForm .link[onclick="flipToRegister()"]');
  const forgotLink = document.querySelector('#loginForm .link[onclick="flipToForgot()"]');

  if (userBtn && adminBtn) {
    userBtn.onclick = () => {
      loginTitle.textContent = 'User Login';
      userBtn.classList.add('active');
      adminBtn.classList.remove('active');

      registerLink.style.display = 'block';
      forgotLink.style.display = 'block';
      card.classList.remove('no-flip');
    };

    adminBtn.onclick = () => {
      loginTitle.textContent = 'Admin Login';
      adminBtn.classList.add('active');
      userBtn.classList.remove('active');

      registerLink.style.display = 'none';
      forgotLink.style.display = 'none';
      card.classList.remove('flip');
      card.classList.add('no-flip');
    };
  }

  if (loginButton) {
    loginButton.onclick = () => {
      const inputs = document.querySelectorAll('#loginForm input');
      const username = inputs[0].value;
      const password = inputs[1].value;

      const currentRole = isAdminMode() ? 'admin' : 'user';

      const dummyAccounts = {
        user: { username: 'user123', password: 'pass123' },
        admin: { username: 'admin123', password: 'adminpass' }
      };

      const valid = dummyAccounts[currentRole];

      if (username === valid.username && password === valid.password) {
        alert(`${currentRole.charAt(0).toUpperCase() + currentRole.slice(1)} login successful!`);

        if (currentRole === 'admin') {
          window.location.href = 'admin.html';
        } else {
          document.getElementById('loginSection').style.display = 'none';
          document.getElementById('dashboardSection').style.display = 'flex';
          document.body.classList.remove("login-page");
        }
      } else {
        alert('Invalid username or password');
      }
    };
  }

  function logout() {
    document.getElementById("dashboardSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
  }

  function flipToRegister() {
    if (!isAdminMode()) {
      card.classList.add('flip');
    }
  }

  function flipToLogin() {
    if (!isAdminMode()) {
      card.classList.remove('flip');
    }
  }

  function flipToForgot() {
    if (!isAdminMode()) {
      document.getElementById('forgotOverlay').style.display = 'flex';
    }
  }

  function closeForgot() {
    document.getElementById('forgotOverlay').style.display = 'none';
  }

  function navigateTo(page) {
    window.location.href = page;
  }

  function isAdminMode() {
    return loginTitle.textContent.includes('Admin');
  }

  // Expose some functions globally if needed in HTML onclick=""
  window.logout = logout;
  window.flipToRegister = flipToRegister;
  window.flipToLogin = flipToLogin;
  window.flipToForgot = flipToForgot;
  window.closeForgot = closeForgot;
  window.navigateTo = navigateTo;
});
