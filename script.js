document.addEventListener('DOMContentLoaded', function () {
            const form = document.querySelector('.login form');
            const successMessage = document.createElement('p');
            successMessage.textContent = 'Login successful!';
            successMessage.style.color = '#00ff0a';
            successMessage.style.marginTop = '10px';
            successMessage.style.display = 'none';

            form.addEventListener('submit', function (event) {
                event.preventDefault();

                
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;

                if (username === 'Username' && password === 'Password') {
                    form.insertAdjacentElement('afterend', successMessage);
                    successMessage.style.display = 'block';
                } else {
                    alert('Incorrect username or password. Please try again.');
                }
            });
});
