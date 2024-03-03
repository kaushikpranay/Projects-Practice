const signUpBtn = document.querySelectorAll(".signup-btn");
const signInBtn = document.querySelectorAll("signin-btn");
const formsWrappper = document.querySelector(".forms-wrapper")
signUpBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    formsWrappper.classList.add("change");
});

signInBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    formsWrappper.classList.remove("change")
});