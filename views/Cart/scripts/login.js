const mostrarFormulario = document.querySelector('#mostrarFormulario')
const loginModal = document.querySelector('.login-modal')
const closeMenu = document.querySelector(".close-menu")
mostrarFormulario.addEventListener("click" , function(){
loginModal.classList.add("active")
})
closeMenu.addEventListener("click" , function(){
    loginModal.classList.remove("active")
    })