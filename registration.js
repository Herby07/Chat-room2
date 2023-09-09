document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.querySelector('#registrationForm');

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.querySelector('#username').value;

        // Enregistrez le nom d'utilisateur dans sessionStorage pour le stocker temporairement
        sessionStorage.setItem('username', username);

        // Redirigez l'utilisateur vers la page de chat
        window.location.href = 'index.html';
    });
});
