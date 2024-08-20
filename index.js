const submit = document.getElementById("submit");
const input = document.getElementById("email");
const regex = /^[\w]*@[\w]*\.[\w]*$/g;
const error = document.getElementById("error")
const color1 = getComputedStyle(document.documentElement).getPropertyValue('--LightRed');
const color2 = getComputedStyle(document.documentElement).getPropertyValue('--Gray');

submit.addEventListener("click", myfunction);

function myfunction(event){
    event.preventDefault();
    if(input.value === "" || input.value.search(regex) === -1){
        error.style.display = "flex";
        input.style.border = `1px solid ${color1}`;
    }
    else{
        error.style.display = "none";
        input.style.border = `1px solid ${color2}`;
    }
}