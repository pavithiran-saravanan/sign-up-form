const pass = document.querySelector("#pass");
const pass2 = document.querySelector("#pass2");



pass2.addEventListener('input', (e)=>{
    if(!pass2.value){
        pass2.setAttribute("isValid", "valid");
        pass.setAttribute("isValid", "valid");
        return;
    }
    if(pass2.value != pass.value){
        console.log("passwords do not match");
        pass2.setAttribute("isValid", "invalid");
        pass.setAttribute("isValid", "invalid");
    }
    else{
        console.log("match");
        pass2.setAttribute("isValid", "valid");
        pass.setAttribute("isValid", "valid");
    }
})

pass.addEventListener('input', (e)=>{
    if(!pass2.value){
        pass2.setAttribute("isValid", "valid");
        pass.setAttribute("isValid", "valid");
        return;
    }
    if(pass2.value != pass.value){
        console.log("passwords do not match");
        pass2.setAttribute("isValid", "invalid");
        pass.setAttribute("isValid", "invalid");
    }
    else{
        console.log("match");
        pass2.setAttribute("isValid", "valid");
        pass.setAttribute("isValid", "valid");
    }
})