const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector(".modal")
const selectPlanButtons = document.querySelectorAll('.plan button')
const modalNoButton = document.querySelector(".modal__action--negative")

for(const button of selectPlanButtons){
    button.addEventListener('click', function(){
        modal.style.display = "block"
        backdrop.style.display = 'block'
    })
}

modalNoButton.addEventListener('click', function (){
    modal.style.display = "none"
    backdrop.style.display = "none"
})
