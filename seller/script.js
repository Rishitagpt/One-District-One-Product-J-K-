document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (email && phone) {
      alert('Form submitted successfully');
      
    } else {
      alert('Please fill in all fields');
    }
  });