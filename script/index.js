//FIRST FORM VARIABLES
const form = document.getElementById('form1')
const firstName = document.getElementById('name1');
const secondName = document.getElementById('name2');
const email = document.getElementById('mail')
const slackName = document.getElementById('slack');
const password = document.getElementById('pwd1')
const confirmPassword = document.getElementById('pwd2');
const trackName = document.getElementById('track');
const phone = document.getElementById('mobile');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs()
})

function checkInputs() {
    let firstNameValue = name1.value.trim();
    let secondName = name2.value.trim()

    if (firstNameValue === "") {
        setError(name1, "First Name cannot be blank");
    } else {
        setSuccess(name1);
    }
}

function setError(input, message) {
    const formField = input.parentElement; //field;
    const small = formField.querySelector('small');
    //display error
    small.innerHTML = message;
    //error naming
    formField.className = 'field error';

}