import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('.form');
const delayInput = document.querySelector('[name=delay]');
const stepInput = document.querySelector('[name=step]');
const amountInput = document.querySelector('[name=amount]');
let position = 0;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  setTimeout(() => {
    for (let i = 0; i < amountInput.value; i += 1) {
      const step = +delayInput.value + +stepInput.value * i;
      position = i+1;
      createPromise(position, step)
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
         Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay} ms`);
          Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
        });
     }
  }, delayInput.value);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
