// Event listener for Login button
document.getElementById('login-button').addEventListener('click', function() {
    console.log('Login button clicked'); // Debug log to confirm button click

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username); // Debug log to check if username is being read correctly
    console.log('Password:', password); // Debug log to check if password is being read correctly

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        console.log('Fetch Response:', response); // Log fetch response to see the status code
        return response.json();
    })
    .then(data => {
        console.log('Login Response Data:', data); // Log the server response
        if (data.message === 'Login successful') {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('signin-container').style.display = 'block';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    })
    .catch(error => console.error('Error during Login:', error));
});

// Event listener for Sign In button
document.getElementById('signin-button').addEventListener('click', function() {
    console.log('Sign In button clicked'); // Debug log to confirm button click

    const username = document.getElementById('username').value;
    const action = 'sign-in';

    console.log('Username for Sign In:', username); // Debug log to check if username is being read correctly

    fetch('http://localhost:3000/timestamp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, action })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sign-in Response:', data); // Log the server response
        alert(data.message); // Notify the user
        // Redirect back to login page
        window.location.href = 'index.html';
    })
    .catch(error => console.error('Error during Sign-In:', error));
});

// Event listener for Sign Out button
document.getElementById('signout-button').addEventListener('click', function() {
    console.log('Sign Out button clicked'); // Debug log to confirm button click

    const username = document.getElementById('username').value;
    const action = 'sign-out';

    console.log('Username for Sign Out:', username); // Debug log to check if username is being read correctly

    fetch('http://localhost:3000/timestamp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, action })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Sign-out Response:', data); // Log the server response
        alert(data.message); // Notify the user
        // Redirect back to login page
        window.location.href = 'index.html';
    })
    .catch(error => console.error('Error during Sign-Out:', error));
});
