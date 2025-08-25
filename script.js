document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  if (!form) return;

  const fields = ['name', 'email', 'password', 'track'];

  function setError(id, msg) {
    const el = document.querySelector(`[data-error-for="${id}"]`);
    if (el) el.textContent = msg || '';
  }

  function validate() {
    let valid = true;

    const name = form.name.value.trim();
    if (name.length < 2) { setError('name', 'Please enter your full name.'); valid = false; } else setError('name');

    const email = form.email.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) { setError('email', 'Enter a valid email.'); valid = false; } else setError('email');

    const pwd = form.password.value;
    if (pwd.length < 6) { setError('password', 'Password must be at least 6 characters.'); valid = false; } else setError('password');

    const track = form.track.value;
    if (!track) { setError('track', 'Please select a learning track.'); valid = false; } else setError('track');

    return valid;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('successMsg').textContent = '';
    fields.forEach(f => setError(f, ''));

    if (validate()) {
      document.getElementById('successMsg').textContent = 'Signup successful! (Demo only — no data sent.)';
      form.reset();
    }
  });
});
