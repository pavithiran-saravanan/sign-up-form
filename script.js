const pass = document.querySelector("#pass");
const pass2 = document.querySelector("#pass2");
const fname = document.querySelector("#fname");
const email = document.querySelector("#email");
const submit = document.querySelector('.submit');

submit.addEventListener('click', (e)=>{
    fname.required = true;
    email.required = true;
    pass.required = true;
    pass2.required = true;
    if(fname.checkValidity() && email.checkValidity() && pass.checkValidity() && pass2.checkValidity() && pass.value == pass2.value){
        return;
    }
    else e.preventDefault();
})

fname.addEventListener('focus', (e)=>{
    fname.required = true;
})
email.addEventListener('focus', (e)=>{
    email.required = true;
})
pass.addEventListener('focus', (e)=>{
    pass.required = true;
})
pass2.addEventListener('focus', (e)=>{
    pass2.required = true;
})

pass2.addEventListener('input', (e)=>{
    if(!pass2.value) return;
    if(pass2.value != pass.value){
        pass2.setAttribute("isValid", "invalid");
        pass.setAttribute("isValid", "invalid");
    }
    else{
        pass2.setAttribute("isValid", "valid");
        pass.setAttribute("isValid", "valid");
    }
})

pass.addEventListener('input', (e)=>{
    if(!pass.value && !pass2.value){
        pass2.setAttribute("isValid", "valid");
        pass.setAttribute("isValid", "valid");
        return;
    }
    if(!pass2.value) return;
    if(pass2.value != pass.value){
        console.log("passwords do not match");
        pass2.setAttribute("isValid", "invalid");
        pass.setAttribute("isValid", "invalid");
    }
    else{
        pass2.setAttribute("isValid", "valid");
        pass.setAttribute("isValid", "valid");
    }
})