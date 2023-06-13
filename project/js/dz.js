const emailInput = document.querySelector('#emailInput')
const emailCheck = document.querySelector('#emailCheck')
const emailResult = document.querySelector('.emailResult')

const regExp1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

emailCheck.onclick = () => {
    if (regExp1.test(emailInput.value)) {
        emailResult.innerHTML = 'OK'
        emailResult.style.color = 'green'
    }else{
        emailResult.innerHTML = 'NOT OK'
        emailResult.style.color = 'red'
    }
}

let position = 0;
function recursionAnimation() {
    position = position +10;
    if (position > 250)return;
    document.querySelector('.animation').style.left = position + 'px';
    animation();
}

function animation() {
    setTimeout(recursionAnimation, 100);
}

animation();