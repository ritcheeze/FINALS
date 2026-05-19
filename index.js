const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

function showRegister(){
  loginForm.style.display = "none";
  registerForm.style.display = "block";
}

function showLogin(){
  registerForm.style.display = "none";
  loginForm.style.display = "block";
}
const sections = document.querySelectorAll(".section");

function revealSections() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
