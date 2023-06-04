import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const saveFormStateThrottled = throttle(saveFormState, 500);

window.addEventListener('load', () => {
  const savedFormState = localStorage.getItem('feedback-form-state');

  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  } else {
    emailInput.value = '';
    messageInput.value = '';
  }
});

feedbackForm.addEventListener('input', saveFormStateThrottled);

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formState);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});

function saveFormState() {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}
