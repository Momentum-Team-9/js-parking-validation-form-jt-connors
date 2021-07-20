//set variable for entire form 
let formContainer = document.querySelector('#form')

//Add form submit listener to entire form
formContainer.addEventListener ('submit', function(event){
    event.preventDefault()
    console.log('form submit event')
    validateCarData()
    validateNumberOfDays()
    validateCVV()
    validateTotalCost()
    validateCardNumber()
    validateNameField ()
    //validateExpiration()
    })

// validate Name Field
let regName = /^[a-zA-Z]+ [a-zA-Z]+$/
let nameValue = document.querySelector('#name')
let nameField = document.querySelector('#name-field')

function validateNameField () {
if (!regName.test(nameValue.value)) {
    nameField.classList.add('input-invalid')
    nameField.appendChild(newDiv).innerHTML = "Please enter your full name. "
    return false;
}else{
    nameField.classList.add('input-valid')
    return true;
}}

// validate car data
let carField = document.querySelector('#car-field')
let carYear = document.querySelector('#car-year')
let carMake = document.querySelector('#car-make')
let carModel = document.querySelector('#car-model')

//variable for div popups
let newDiv = document.createElement("div")

//validates car data
function validateCarData() {
    if (carYear.value > 2022 || carYear.value < 1900 || carMake.value === "" || carModel.value === "" ) {
        carField.classList.add('input-invalid')
        carField.appendChild(newDiv).innerHTML = "Valid car year is required. "
        return false
    } else {
        carField.classList.add('input-valid')
        return true
}}

// validates number of days
let daysField = document.querySelector('#days-field')
let daysValue = document.querySelector('#days')

function validateNumberOfDays(){
if (daysValue.value < 0 || daysValue.value > 30) {
    daysField.appendChild(newDiv).innerHTML = "Days must be between 1 and 30. "
    daysField.classList.add('input-invalid')
    return false
} else {
    daysField.classList.add('input-valid')
    return true
}}

// validates CVV
let cvvField = document.querySelector('#cvv-field')
let cvvValue = document.querySelector('#cvv')

function validateCVV(){
    if (cvvValue.value.length === 3){
        cvvField.classList.add('input-valid')
        return true
    } else {
        cvvField.classList.add('input-invalid')
        cvvField.appendChild(newDiv).innerHTML = "CVV must be 3 digits"
        return false
    }
}

// validate total cost
let total = document.querySelector('#total')

function validateTotalCost(){
total.appendChild(newDiv).innerHTML = "$" + daysValue.value * 5
}

// validate cc Number
let ccField = document.querySelector('#credit-card-field')
let ccValue = document.querySelector('#credit-card')

function validateCardNumber() {
    let regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(ccValue.value)) {
      ccField.classList.add('input-invalid')
      ccField.appendChild(newDiv).innerHTML = "Please input a valid credit card number. "
      return false
    } else if (luhnCheck(ccValue.value)){
      ccField.classList.add('input-valid')
      return true
}}

  function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
  }

  //validate expiration
/*let expirationDate = document.querySelector('#expiration')

  function validateExpiration(){
if (isNaN(Date.parse(expirationDate.value))){
    console.log('invalid date')
} else {
    console.log('validate')
}
  }*/
