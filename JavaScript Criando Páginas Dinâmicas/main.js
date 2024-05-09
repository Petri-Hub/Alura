const teclas = document.querySelectorAll('.tecla')
const audios = document.querySelectorAll('audio')

function tocaSom(index){
    audios[index].play()
}

for(let i = 0; i < teclas.length; i++){
    teclas[i].onclick = () => tocaSom(i)
}