const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');
const telRegex = /^(\d{2})(\d{4,5})(\d{4})$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(form) {
    campos[form].style.border = '2px solid #e63636';
    span[form].style.display = 'inline-block';
}

function removeError(form) {
    campos[form].style.border = '';
    span[form].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
    } else {
        removeError(0);
    }
}

function nameSValidate() {
    if (campos[1].value.length < 3) {
        setError(1);
    } else {
        removeError(1);
    }
}

function telValidate() {
    const telInput = document.getElementById('tel');
    const tel = telInput.value.replace(/\D/g, '');

    if (!telRegex.test(tel)) {
        setError(2);
    } else {
        removeError(2);    
    }    
}

function maskTelefone() {
    const telInput = document.getElementById('tel');
    let value = telInput.value;

    value = value.replace(/\D/g, '');

    if (value.length <= 10) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }

    telInput.value = value;
}

function emailValidate() {
    if (!emailRegex.test(campos[3].value)) {
        setError(3);
    } else {
        removeError(3);
    }
}

if (document.getElementById('nome') &&
    document.getElementById('sobrenome') &&
    document.getElementById('tel') &&
    document.getElementById('email')) { 
        const params = new URLSearchParams(window.location.search);
        document.getElementById('nome').textContent = params.get('nome') || 'Não informado';
        document.getElementById('sobrenome').textContent = params.get('s-nome') || 'Não informado';    document.getElementById('tel').textContent = params.get('tel') || 'Não informado';
        document.getElementById('email').textContent = params.get('email') || 'Não informado';
    }

window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const headerHeight = header.offsetHeight;
    main.style.paddingTop = `${headerHeight + 20}px`; // segurança extra de 20px
  });