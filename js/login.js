

const form = document.getElementById('form')
const errorElement = document.getElementById('error')

function isContainCapital(s) {
    let contain = false
    s.split('').forEach((c) => {
        if(c >= 'A' && c <= 'Z') {
            contain = true
        }
    })

    return contain
}

function isContainNumeric(s) {
    let contain = false
    s.split('').forEach((c) => {
        if(c >= '0' && c <= '9') {
            contain = true
        } 
    })

    return contain
}

function isContainLowercase(s) {
    let contain = false
    s.split('').forEach((c) => {
        if(c >= 'a' && c <= 'z') {
            contain = true
        }
    })

    return contain
}

const handleFormEvent = (event) => {
    event.preventDefault()

    const usernameElement = document.getElementById('username')
    const emailElement = document.getElementById('email')
    const phoneNumberElement = document.getElementById('phone-number')
    const passwordElement = document.getElementById('password')
    const confirmPasswordElement = document.getElementById('confirm-password')
    const minLength = 10;
    const maxLength = 12;

    if(
        usernameElement.value == '' || 
        emailElement.value == '' || 
        passwordElement.value == '' || 
        confirmPasswordElement.value == ''  
    ) {
        console.log('Every field is required');
        errorElement.innerHTML = 'Every field is required'
        return
    }

    const splittedUsername = usernameElement.value.split(' ')

    if(splittedUsername.length >= 2) {
        errorElement.innerHTML = 'Username must only be 1 word'
        return
    }

    const atIndex = emailElement.value.indexOf('@')
    const dotIndex = emailElement.value.indexOf('.')
    

    if(atIndex == -1) {
        errorElement.innerHTML = 'Email must contain @'
        return
    }

    if(dotIndex == -1) {
        errorElement.innerHTML = 'Email must contain .'
        return
    }

    if(dotIndex < atIndex) {
        errorElement.innerHTML = '. must be after @'
        return   
    }

    console.log(confirmPasswordElement.value);
    console.log(passwordElement.value);

    console.log('Phone number:', phoneNumberElement.value);

    function validateLength(phoneNumberValue, minLength, maxLength){
        const phoneNumberLength = phoneNumberValue.length;
        return phoneNumberLength >= minLength && phoneNumberLength <= maxLength;
    }

    const isValidPhoneNumber = validateLength(phoneNumberElement.value, minLength, maxLength);

    if(
        !isContainNumeric(phoneNumberElement.value) 
    ) {
        errorElement.innerHTML = 'Phone number must only contain numbers'
        return
    }

    if(isValidPhoneNumber){
        console.log('Phone number length is valid');
    }
    else{
        errorElement.innerHTML = 'Phone number must contain 10-12 numbers'
        console.log('Invalid phone number length');
        return
    }


    if(confirmPasswordElement.value != passwordElement.value) {
        errorElement.innerHTML = 'Password is different'
        return   
    }

    if(
        !isContainCapital(passwordElement.value) ||
        !isContainLowercase(passwordElement.value) ||
        !isContainNumeric(passwordElement.value) 
    ) {
        errorElement.innerHTML = 'Password must contain lowercase, uppercase, and number'
        return
    }

    window.location.href = 'home.html';

    errorElement.innerHTML = ''
}


form.addEventListener('submit', handleFormEvent)

