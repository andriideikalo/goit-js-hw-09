import Notiflix, { Notify } from 'notiflix';
// __________________________________________________________________________________________________________
function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
        if (shouldResolve) {
            Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        } else {
            Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        }
    }, delay)
}
const refs = {
        form: document.querySelector('.form'),

    }
    // console.dir(refs.form)
refs.form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let delay = +evt.currentTarget.delay.value;
    const step = +evt.currentTarget.step.value;
    const amount = +evt.currentTarget.amount.value;

    // console.log(Number(delay))
    // console.log(Number(step))
    // console.log(Number(delay) + Number(step))
    // console.log(createPromise)

    for (let i = 0; i < amount; i += 1) {
        delay += step
        createPromise(i, delay)
    }

    function onSucces({ position, delay }) {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }

    function onError({ position, delay }) {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }

})