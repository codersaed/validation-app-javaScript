let email = document.getElementById("email")
let phone = document.getElementById("number")
let span = document.getElementsByTagName("span")

email.onkeydown = function () {
    const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;

    if (regex.test(email.value) || regexo.test(email.value)) {
        span[0].innerText = "Your Email Is Valid";
        span[0].style.color = "green";
    }
    else {
        span[0].innerText = "Your Email Is Invalid";
        span[0].style.color = "red";
    }
}

phone.onkeydown = function () {
    const regexn = /^[0-9]{10}$/;

    if (regexn.test(phone.value)) {
        span[1].innerText = "Your number Is Valid";
        span[1].style.color = "green";
    }
    else {
        span[1].innerText = "Your number Is Invalid";
        span[1].style.color = "red";
    }
}