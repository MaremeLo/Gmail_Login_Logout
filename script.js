const loginButton = document.getElementById('loginButton');
if(loginButton){
    loginButton.addEventListener('click', (event) =>{
        event.preventDefault();
        
        const emailInput = document.querySelector('input[type="email"]').value;
        const passwordInput = document.querySelector('input[type="password"]').value;

        if (emailInput && passwordInput){
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', emailInput);

            window.location.href = 'Home.html';
        }else{
            alert('Please enter your email and password.');
        }
    });
}

const logoutButton = document.getElementById('logoutButton');

if (logoutButton){
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if(!isLoggedIn){
        window.location.href = 'Login-email.html';
}

logoutButton.addEventListener('click', () =>{
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'Login-email.html';
 });
}
