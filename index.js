let sliderElemente = document.querySelector("#slider");
let buttonElemente = document.querySelector("#button");
let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");
let showPassword = document.querySelector("#showPassword");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#!$%*&";
let newPassword = "";

sizePassword.innerHTML = sliderElemente.value;


slider.oninput = function() {
    sizePassword.innerHTML = this.value;
};

function generatePassword(){
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElemente.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    };
    showPassword.classList.remove("hide");
    password.innerHTML = pass;

    showPassword.addEventListener('click', () => {
        navigator.clipboard.writeText(pass);
        alert("Sua senha foi copiada com sucesso!");
    })
    
};
