const form = document.getElementById("form");
const passw = document.getElementById("pass");
const conf = document.getElementById("confirm");
const inputs = document.querySelectorAll(".inputs > input");

conf.addEventListener("keyup", function(){
    if(passw.value !== conf.value){
        conf.style.border = "solid 2px red";
        var tick = document.querySelector(".confirmpass");
        tick.style.opacity = "0";
    }else{
        var tick = document.querySelector(".confirmpass");
        tick.style.opacity = "1";
        conf.style.border = "solid 2px green";
    }
})

inputs.forEach(input => {
    input.addEventListener('input', function(){
        if(this.checkValidity()){
            let name = this.getAttribute("name");
            if(name === "confirmpass"){
                if(passw.value === conf.value && this.checkValidity()){
                    var tick = document.querySelector("." + name);
                    tick.style.opacity = "1";
                }
            }else{
            var tick = document.querySelector("." + name);
            tick.style.opacity = "1";
            }
        };
        if(!this.checkValidity()){
            let name = this.getAttribute("name");
            if(name === "confirmpass"){
                if(passw.value !== conf.value || !this.checkValidity()){
                    var tick = document.querySelector("." + name);
                    tick.style.opacity = "0";
                }
            }
            var tick = document.querySelector("." + name);
            tick.style.opacity = "0";
        }
    });
})

form.addEventListener('submit', (e) => {
    let messages = [];
    if(passw.value !== conf.value){
        messages.push("Password confirmation doesn't match");
    }

    if(messages.length > 0){
    e.preventDefault();
    alert("Password confirmation doesn't match!");
    }
});