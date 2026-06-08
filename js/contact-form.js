document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const rules = {
    name:     { required: true, label: 'お名前' },
    phone:    { required: true, label: '電話番号', pattern: /^[\d\-\+\(\)\s]{10,15}$/ },
    email:    { required: true, label: 'メールアドレス', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    category: { required: true, label: 'お問い合わせ種別' },
  };

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + '-error');
    if (field) field.classList.add('is-error');
    if (error) error.textContent = message;
  }

  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + '-error');
    if (field) field.classList.remove('is-error');
    if (error) error.textContent = '';
  }

  function validateField(id, rule) {
    const el = document.getElementById(id);
    if (!el) return true;
    const value = el.value.trim();

    if (rule.required && !value) {
      showError(id, rule.label + 'を入力してください');
      return false;
    }

    if (value && rule.pattern && !rule.pattern.test(value)) {
      const messages = {
        phone: '電話番号の形式が正しくありません',
        email: 'メールアドレスの形式が正しくありません',
      };
      showError(id, messages[id] || rule.label + 'の形式が正しくありません');
      return false;
    }

    clearError(id);
    return true;
  }

  Object.keys(rules).forEach(function (id) {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('blur', function () {
        validateField(id, rules[id]);
      });
      el.addEventListener('input', function () {
        if (el.classList.contains('is-error')) {
          validateField(id, rules[id]);
        }
      });
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    Object.keys(rules).forEach(function (id) {
      if (!validateField(id, rules[id])) isValid = false;
    });

    if (!isValid) return;

    const submitBtn = form.querySelector('.contact__submit');
    submitBtn.textContent = '送信しました！';
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = 'var(--color-primary-dark)';

    setTimeout(function () {
      submitBtn.textContent = '送信する';
      submitBtn.disabled = false;
      submitBtn.style.backgroundColor = '';
      form.reset();
    }, 3000);
  });
});
