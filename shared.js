let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector(".modal")
let selectPlanButtons = document.querySelectorAll('.plan button')
let modalNoButton = document.querySelector(".modal__action--negative")
let toggleButton = document.querySelector(".toggle-button")
let mobileNav = document.querySelector(".mobile-nav")

// for (const button of selectPlanButtons) {
//     button.addEventListener('click', function () {
//         modal.classList.add('open')
//         backdrop.classList.add('open')
//     })
// }

for (const element of selectPlanButtons) {
    element.addEventListener("click", function() {
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}

backdrop.addEventListener("click", function () {
    mobileNav.classList.remove('open');
    closeModal()
})

if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal)
}

function closeModal() {
    if(modal){
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener("click", function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})
