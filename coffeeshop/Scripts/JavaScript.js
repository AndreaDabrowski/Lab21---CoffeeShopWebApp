
function ValidateLastName() {
    var lastName = document.getElementById("LastName").value
    var reg = /^[a-zA-Z]{2,}/
    if (lastName === null) {
        Alert("Last Name box is not filled in");
        return false;
    }
    else if (!reg.test(lastName)) {
        Alert("Last Name format is invalid");
        return false;
    }
    else {
        return true;
    }
}
function ValidateFirstName() {
    if (document.getElementById("FirstName").value === null) {
        Alert("That box is not filled in")
        return false;
    }
    else {
        return true;
    }
}

function ValidateEmail() {
    var email = document.getElementById("Email").value;
    var re = email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (re) {

        return true;
    }
    else {
        alert("Email is in incorrect format");
        return false;
    }
}
function JSValidate() {
    if (PasswordsEqual() && EmailsEqual() && ValidateLastName()) {
        return true;
    }
    else {
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
