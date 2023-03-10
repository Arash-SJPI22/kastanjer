const loginBtn = document.querySelector("#login-btn");
const loginCancel = document.querySelector("#login-cancel");
const loginClose = document.querySelector("#login-close");

const signupBtn = document.querySelector("#signup-btn");
const signupCancel = document.querySelector("#signup-cancel");
const signupClose = document.querySelector("#signup-close");

const loginModal = document.querySelector("#login-modal");
const signupModal = document.querySelector("#signup-modal");

loginBtn.addEventListener("click", () => {
    loginModal.classList.remove("hidden"); 
})

loginCancel.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.classList.add("hidden"); 
})

loginClose.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.classList.add("hidden"); 
})

signupBtn.addEventListener("click", () => {
    signupModal.classList.remove("hidden"); 
})

signupCancel.addEventListener("click", (e) => {
    e.preventDefault();
    signupModal.classList.add("hidden"); 
})

signupClose.addEventListener("click", (e) => {
    e.preventDefault();
    signupModal.classList.add("hidden"); 
})
