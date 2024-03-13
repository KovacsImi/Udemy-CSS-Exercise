const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector(".modal")
const selectPlanButtons = document.querySelectorAll('.plan button')
const modalNoButton = document.querySelector(".modal__action--negative")
const toggleButton = document.querySelector(".toggle-button")
const mobileNav = document.querySelector(".mobile-nav")

function closeModal() {
    backdrop.style.display = "none"
    modal.style.display = "none"
}

for (const button of selectPlanButtons) {
    button.addEventListener('click', function () {
        modal.style.display = "block"
        backdrop.style.display = 'block'
    })
}

backdrop.addEventListener("click", function () {
    mobileNav.style.display = "none"
    closeModal()
})

modalNoButton.addEventListener('click', closeModal
)

toggleButton.addEventListener("click", function () {
    mobileNav.style.display = "block"
    backdrop.style.display = "block"
})
