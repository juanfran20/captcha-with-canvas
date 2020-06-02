document.addEventListener("DOMContentLoaded", function createCaptcha() {
    "use strict";
    let code;
    document.getElementById('captcha').innerHTML = "";
    let chrasArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    let lengthOtp = 6;
    let captcha = [];
    for (let i = 0; i < lengthOtp; i++) {
        let index = Math.floor(Math.random() * chrasArray.length + 1);
        if (captcha.indexOf(chrasArray[index]) == -1)
        captcha.push(chrasArray[index]);
        else i--;
    }
    let canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    let ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv);
    function validarCaptcha() {
        event.preventDefault();
        debugger
        if (document.getElementById("captchaTextBox").value == code) {
            alert("Captcha Validado");
            location.reload();
        }else{
            alert("Capcha Invalido. Por favor intente de nuevo");
            location.reload();
        }
    }
        document.getElementById("validarCaptcha").addEventListener("click", validarCaptcha);
})