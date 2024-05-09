const botaoMenu = document.querySelector(".cabecalho-menu")
const Menu = document.querySelector(".menu-lateral")

botaoMenu.addEventListener('click', () => {
    Menu.classList.toggle("menu-lateral_ativo")
})
