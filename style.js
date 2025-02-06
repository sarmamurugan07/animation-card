const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");



document.addEventListener('DOMContentLoaded', function() {
    debugger;

    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = loginForm.querySelector('input[type="text"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;
  
      // Checking the login credentials
      if (email === 'sarmamurugan07@gmail.com' && password === 'test@123') {
        window.location.href = 'test/index.html'; // Redirect to the home page
      } else {
        alert('Invalid credentials, please try again!');
      }
    });
  
    // signupForm.addEventListener('submit', function(e) {
    //   e.preventDefault();
    //   const email = signupForm.querySelector('input[type="text"]').value;
    //   const password = signupForm.querySelector('input[type="password"]').value;
    //   const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value;
  
    //   // Simple signup validation
    //   if (password === confirmPassword) {
    //     alert('Signup successful! You can now log in.');
    //   } else {
    //     alert('Passwords do not match.');
    //   }
    // });
});
