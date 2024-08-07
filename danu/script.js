let signup=document.querySelector(".signup");
let login=document.querySelector(".login");
let slider=document.querySelector(".slider");
let fromSection=document.querySelector(".form-section");

signup.addEventListener("click",()=>{
    slider.classList.add("moveslider");
    fromSection.classList.add("form-section-move");
});

login.addEventListener("click",()=>{
    slider.classList.remove("moveslider");
    fromSection.classList.remove("form-section-move");
});
