const inputs = document.querySelectorAll('input');
const spans = document.querySelectorAll('span');
const formTitles = document.querySelectorAll('.form-title');

const emptyValueError = 'Please enter this field';
const uppercaseRegexError = 'Missing capital letters';
const numberRegexError = 'Missing digits 0-9';
const specialCharRegexError = 'Missing special characters';
const minLengthError = 'Password must be at least 8 characters long';

inputs.forEach((input, idx) => {
    input.addEventListener('blur', () => {
        checkValue(input.value, idx);
    });
});

function checkValue(value, idx) {
    const span = spans[idx];
    const formTitle = formTitles[idx];

    if (value === "") {
        span.innerText = emptyValueError;
        formTitle.classList.add('error');
    } else {
        if (idx === 0) {
            validateUsername(value, idx);
        } else if (idx === 1) {
            validatePassword(value, idx);
        } else {
            validatePassword(value, idx);
        }
    }
}

function validateUsername(value, idx) {
    const span = spans[idx];
    const formTitle = formTitles[idx];
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /\d/;
    let errorMessage = '';

    if (!specialCharRegex.test(value)) {
        errorMessage += `${specialCharRegexError}<br>`;
    }

    if (!uppercaseRegex.test(value)) {
        errorMessage += `${uppercaseRegexError}<br>`;
    }

    if (!numberRegex.test(value)) {
        errorMessage += `${numberRegexError}`;
    }

    if (errorMessage) {
        span.innerHTML = errorMessage;
        formTitle.classList.add('error');
    } else {
        span.innerHTML = '';
        formTitle.classList.remove('error');
    }
}

function validatePassword(value, idx) {
    const span = spans[idx];
    const formTitle = formTitles[idx];
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /\d/;
    let errorMessage = '';

    if (value.length < 8) {
        errorMessage += `${minLengthError}<br>`;
    }

    if (!specialCharRegex.test(value)) {
        errorMessage += `${specialCharRegexError}<br>`;
    }

    if (!uppercaseRegex.test(value)) {
        errorMessage += `${uppercaseRegexError}<br>`;
    }

    if (!numberRegex.test(value)) {
        errorMessage += `${numberRegexError}`;
    }

    if (errorMessage) {
        span.innerHTML = errorMessage;
        formTitle.classList.add('error');
    } else {
        span.innerHTML = '';
        formTitle.classList.remove('error');
    }
}