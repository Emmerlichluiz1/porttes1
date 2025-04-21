// seleção de item do menu com o prenchimento

var menuItens = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItens.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItens.forEach((item)=>
    item.addEventListener('click',selectLink)
)

//expandir o menu

var btnExp = document.querySelector('#btn-exp')
var meniSIDE = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    meniSIDE.classList.toggle('expandir')
})
//ATIVIDADES MODAL
function openModal(id) {
  document.getElementById("customModal" + id).style.display = "block";
}

function closeModal(id) {
  document.getElementById("customModal" + id).style.display = "none";
}

// Fecha modal ao clicar fora
window.addEventListener("click", function (event) {
  for (let i = 1; i <= 6; i++) {
    const modal = document.getElementById("customModal" + i);
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
});


