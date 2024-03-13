const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector(".modal")
const selectPlanButtons = document.querySelectorAll('.plan button')
const modalNoButton = document.querySelector(".modal__action--negative")
const toggleButton = document.querySelector(".toggle-button")
const mobileNav = document.querySelector(".mobile-nav")

function closeModal() {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
    // backdrop.style.display = "none"
    // modal.style.display = "none"
}

for (const button of selectPlanButtons) {
    button.addEventListener('click', function () {
        // modal.style.display = "block"
        // backdrop.style.display = 'block'
        modal.classList.add('open')
        backdrop.classList.add('open')
    })
}

backdrop.addEventListener("click", function () {
    // mobileNav.style.display = "none"
    mobileNav.classList.remove('open');
    closeModal()
})

modalNoButton.addEventListener('click', closeModal
)

toggleButton.addEventListener("click", function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
    // mobileNav.style.display = "block"
    // backdrop.style.display = "block"
})
