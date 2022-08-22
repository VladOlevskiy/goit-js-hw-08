import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let formDate = {
  email: '',
  message: '',
};

insertFromInfo();

form.addEventListener('input', throttle(inputForm, 500));
form.addEventListener('submit', submitForm);

function inputForm(e) {
  if (e.target.value) {
    formDate[e.target.name] = e.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formDate));
}

function insertFromInfo() {
  const savedDate = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedDate) {
    form.email.value = savedDate.email ? savedDate.email : '';
    form.message.value = savedDate.message ? savedDate.message : '';
    formDate.email = savedDate.email;
    formDate.message = savedDate.message;
  }
}

function submitForm(evt) {
  if (formDate.email === '' || formDate.message === '') {
    alert('Зверніть увагу на незаповнені поля ');
    return;
  }

  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formDate);
  formDate = {
    email: '',
    message: '',
  };
}
