document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const user = {
      username: username,
      name: name,
      email: email,
      password: password
    };
  
    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      console.log('User created:', data);
    })
    .catch(error => {
      console.error('Error creating user:', error);
      // need to include when creation has a problem
    });
  });