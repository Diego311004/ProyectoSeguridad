const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Guardar el usuario
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));

    console.log(`Usuario registrado: ${username}`);
    gtag('event', 'registro', { 'usuario': username });
    alert('Registro exitoso');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Volver a leer los usuarios desde localStorage al intentar iniciar sesión
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(u => u.username === loginUsername && u.password === loginPassword);

    if (user) {
        console.log(`Usuario iniciado sesión: ${loginUsername}`);
        gtag('event', 'inicio_sesion', { 'usuario': loginUsername });
        window.location.href = 'home.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
