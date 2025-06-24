document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form from submitting the traditional way

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple login logic (for demo purposes only)
  if (username === "admin" && password === "password123") {
    alert("Login successful!");
    // Redirect or load another page here
  } else {
    document.getElementById('error').textContent = "Invalid username or password.";
  }
});
