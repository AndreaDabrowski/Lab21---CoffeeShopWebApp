
/*$(document).ready(
    
    $('#regFirstName').change(function () {
        var fnRegex = /^[a-zA-Z]{2,}$/g;
        var firstNameValue = $('#regFirstName'.val());
        if (!fnRegex.test(firstNameValue)) {
            $('#regFirstName').css('border', 'red');
        }
        else {
            $('#regFirstName').css('border', 'green');
        }
    })
);*/

function ValidateLastName() {
    var lastName = document.getElementById("LastName").value;
    var reg = /^[a-zA-Z]{2,}$/g;
    if (lastName === null) {
        alert("Last Name box is not filled in");
        return false;
    }
    else if (!reg.test(lastName)) {
        alert("Last Name format is invalid");
        return false;
    }
    else
    {
        return true;
    }
}
function ValidateFirstName() {
    var firstName = document.getElementById("FirstName").value;
    var reg = /^[a-zA-Z]{2,}$/g;
    if (firstName === null) {
        alert("First Name box is not filled in");
        return false;
    }
    else if (!reg.test(firstName)) {
        alert("First Name format is invalid");
        return false;
    }
    else {
        return true;
    }
}

function ValidateEmail() {
    var email = document.getElementById("Email").value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    if (email === null) {
        alert("Email box is not filled in");
        return false;
    }
    else if (!re.test(email)) {

        alert("Email is in incorrect format")
        return false;
    }
    else {
        return true;
    }
}
function JSValidate() {
    if (ValidateLastName() && NullAlertPassword() && NullAlertConfirmPassword() && ValidateFirstName() && NullAlertBirthday() && NullAlertConfirmEmail() && ValidateEmail() && NullAlertPhoneNumber() && PasswordsEqual() && EmailsEqual()) {
        return true;
    }
    else {
        return false;
    }
}
function NullAlertPassword() {
    if (document.getElementById("Password").value !== "") {
        return true;
    }
    else {
        alert("The Password field must contain input")
        return false;
    }
}
function NullAlertConfirmPassword() {
    if (document.getElementById("PasswordConfirm").value !== "") {
        return true;
    }
    else {
        alert("The Confirm Password field must contain input")
        return false;
    }
}
function NullAlertFirstName() {
    if (document.getElementById("FirstName").value !== "") {
        return true;
    }
    else {
        alert("The First Name field must contain input")
        return false;
    }
}
function NullAlertLastName() {
    if (document.getElementById("LastName").value !== "") {
        return true;
    }
    else {
        alert("The Last Name field must contain input")
        return false;
    }
}
function NullAlertEmail() {
    if (document.getElementById("Email").value !== "") {
        return true;
    }
    else {
        alert("The Email field must contain input")
        return false;
    }
}
function NullAlertConfirmEmail() {
    if (document.getElementById("ConfirmEmail").value !== "") {
        return true;
    }
    else {
        alert("The Confirm Email field must contain input")
        return false;
    }
}
function NullAlertBirthday() {
    if (document.getElementById("Birthday").value !== "") {
        return true;
    }
    else {
        alert("The Birthday field must contain input")
        return false;
    }
}
function NullAlertPhoneNumber() {
    if (document.getElementById("PhoneNumber").value !== "") {
        return true;
    }
    else {
        alert("The Phone Number field must contain input")
        return false;
    }
}

var check_match = function () {
    if (document.getElementById("Password").value === document.getElementById("PasswordConfirm").value) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "matching!";
    }
    else {
        document.getElementById("message").innerHTML = "not matching!";
        document.getElementById("message").style.color = "red";
    }
}
var check_match2 = function () {
    if (document.getElementById("Email").value === document.getElementById("ConfirmEmail").value) {
        document.getElementById("message2").style.color = "green";
        document.getElementById("message2").innerHTML = "matching!";
    }
    else {
        document.getElementById("message2").innerHTML = "not matching!";
        document.getElementById("message2").style.color = "red";
    }
}
function PasswordsEqual() {
    var pwd = document.getElementById("Password").value;
    var cpwd = document.getElementById("PasswordConfirm").value;
    if (pwd == cpwd) {
        return true;
    }
    else {
        alert("Your passwords must match!")
        return false;
    }
}
function EmailsEqual() {
    var email = document.getElementById("Email").value;
    var cemail = document.getElementById("ConfirmEmail").value;
    if (email == cemail) {
        return true;
    }
    else {
        alert("Your emails must match!")
        return false;
    }
}
