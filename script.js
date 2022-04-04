const form = document.getElementById("form");
const error = document.querySelector(".error");

form.addEventListener('submit', (e) => {
    let messages = [];
    if(pass.value !== confirm.value){
        messages.push("Password confirmation doesn't match");
    }

    if(messages.length > 0){
    e.preventDefault();
    error.innerText = messages.join(', ');
    }
});