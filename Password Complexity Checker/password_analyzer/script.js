document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('passwordInput');
  const strengthOutput = document.getElementById('strengthOutput');
  const suggestionsList = document.getElementById('suggestions');
  const generateBtn = document.getElementById('generateBtn');
  const generatedPassword = document.getElementById('generatedPassword');

  const commonPasswords = ['password', '123456', 'qwerty', 'letmein', 'football'];

  function evaluatePassword(pwd) {
    const suggestions = [];
    let score = 0;

    // Length
    if (pwd.length >= 12) {
      score += 1;
    } else {
      suggestions.push('Use at least 12 characters.');
    }

    // Lowercase
    if (/[a-z]/.test(pwd)) {
      score += 1;
    } else {
      suggestions.push('Include lowercase letters.');
    }

    // Uppercase
    if (/[A-Z]/.test(pwd)) {
      score += 1;
    } else {
      suggestions.push('Include uppercase letters.');
    }

    // Digits
    if (/[0-9]/.test(pwd)) {
      score += 1;
    } else {
      suggestions.push('Include numbers.');
    }

    // Special characters
    if (/[^A-Za-z0-9]/.test(pwd)) {
      score += 1;
    } else {
      suggestions.push('Include special characters (e.g., !@#$%).');
    }

    // Common password
    if (commonPasswords.includes(pwd.toLowerCase())) {
      score = 0;
      suggestions.push('Do not use a common password.');
    }

    return { score, suggestions };
  }

  function updateUI(pwd) {
    const { score, suggestions } = evaluatePassword(pwd);
    suggestionsList.innerHTML = '';

    suggestions.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      suggestionsList.appendChild(li);
    });

    if (pwd.length === 0) {
      strengthOutput.textContent = 'Strength: —';
      strengthOutput.className = '';
    } else if (score <= 2) {
      strengthOutput.textContent = 'Strength: Weak';
      strengthOutput.className = 'weak';
    } else if (score === 3 || score === 4) {
      strengthOutput.textContent = 'Strength: Medium';
      strengthOutput.className = 'medium';
    } else {
      strengthOutput.textContent = 'Strength: Strong';
      strengthOutput.className = 'strong';
    }
  }

  passwordInput.addEventListener('input', (e) => {
    updateUI(e.target.value);
  });

  generateBtn.addEventListener('click', () => {
    const length = 14;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let pwd = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      pwd += charset[randomIndex];
    }
    generatedPassword.value = pwd;
    // Evaluate the generated password too
    updateUI(pwd);
    passwordInput.value = pwd;
  });
});
