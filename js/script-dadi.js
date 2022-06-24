const button = document.getElementById('button');
const dado = document.getElementById('dado');
const cpuDado = document.getElementById('dado-cpu');

button.addEventListener('click', function () {
    dado.innerHTML = Math.floor(Math.random() * 12) + 1;
    cpuDado.innerHTML = Math.floor(Math.random() * 12) + 1;

    if (dado > cpuDado) {
        alert('Hai vinto !!');
    } else {
        alert('Hai perso!!');
    }
})