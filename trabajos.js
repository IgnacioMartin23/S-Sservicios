// Array de trabajos
const trabajos = document.querySelectorAll('.trabajo');
let currentSlide = 0;

function openModal(index){
    currentSlide = index;
    updateModal();
    document.getElementById('modal').style.display = 'flex';
}

function closeModal(){
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modalContent').innerHTML = '';
}

function changeSlide(n){
    currentSlide += n;
    if(currentSlide < 0) currentSlide = trabajos.length - 1;
    if(currentSlide >= trabajos.length) currentSlide = 0;
    updateModal();
}

function updateModal(){
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = ''; // limpiar

    const trabajo = trabajos[currentSlide];
    const clone = trabajo.querySelector('img, video').cloneNode(true);
    clone.setAttribute('controls','');
    modalContent.appendChild(clone);

    const desc = document.createElement('p');
    desc.style.padding = '15px';
    desc.style.color = '#0077b6';
    desc.style.fontSize = '16px';
    desc.textContent = trabajo.querySelector('p').textContent;
    modalContent.appendChild(desc);
}

// Cerrar modal al hacer click fuera del contenido
window.onclick = function(event){
    if(event.target === document.getElementById('modal')){
        closeModal();
    }
}
