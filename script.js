document.getElementById('contact-form').addEventListener('submit', function(event) {
  // Get form elements
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Check if name is empty
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    event.preventDefault(); // Prevent form submission
    return;
  }

  // Check if email is empty or invalid
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    event.preventDefault(); // Prevent form submission
    return;
  }

  // Check if message is empty
  if (messageInput.value.trim() === '') {
    alert('Please enter your message.');
    messageInput.focus();
    event.preventDefault(); // Prevent form submission
    return;
  }

  // Form submission will proceed if all validations pass
});