
    // toolbar.js

// Função para criar objetos arrastáveis
function criarObjetoArrastavel(botao) {
    const objeto = document.createElement('div');
    objeto.classList.add('draggable');
    objeto.setAttribute('draggable', true);

    objeto.style.left = `${botao.offsetLeft}px`;
    objeto.style.top = `${botao.offsetTop}px`;

    document.body.appendChild(objeto);

    // Adiciona eventos de arraste ao objeto criado
    tornarArrastavel(objeto);
}

// Função para tornar um elemento arrastável
function tornarArrastavel(elemento) {
    let isDragging = false;

    elemento.addEventListener('mousedown', (e) => {
        isDragging = true;

        const offsetX = e.clientX - elemento.getBoundingClientRect().left;
        const offsetY = e.clientY - elemento.getBoundingClientRect().top;

        document.addEventListener('mousemove', moveElement);

        function moveElement(e) {
            if (isDragging) {
                elemento.style.left = `${e.clientX - offsetX}px`;
                elemento.style.top = `${e.clientY - offsetY}px`;
            }
        }

        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.removeEventListener('mousemove', moveElement);
        });
    });

    elemento.addEventListener('dragstart', () => {
        elemento.classList.add('dragging');
    });

    elemento.addEventListener('dragend', () => {
        elemento.classList.remove('dragging');
    });
}

// Adiciona eventos de arraste aos elementos
document.addEventListener('DOMContentLoaded', function () {
    const objetosArrastaveis = document.querySelectorAll('.draggable');
    objetosArrastaveis.forEach(tornarArrastavel);
});
