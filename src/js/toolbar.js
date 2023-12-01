
function createDraggableObject(button) {
    const object = document.createElement('div');
    object.classList.add('draggable');
    object.setAttribute('draggable', true);

    object.style.left = `${button.offsetLeft}px`;
    object.style.top = `${button.offsetTop}px`;

    document.body.appendChild(object);

    makeDraggable(object);
}

function makeDraggable(element) {
    let isDragging = false;

    element.addEventListener('mousedown', (e) => {
        isDragging = true;

        const offsetX = e.clientX - element.getBoundingClientRect().left;
        const offsetY = e.clientY - element.getBoundingClientRect().top;

        document.addEventListener('mousemove', moveElement);

        function moveElement(e) {
            if (isDragging) {
                element.style.left = `${e.clientX - offsetX}px`;
                element.style.top = `${e.clientY - offsetY}px`;
            }
        }

        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.removeEventListener('mousemove', moveElement);
        });
    });

    element.addEventListener('dragstart', () => {
        element.classList.add('dragging');
    });

    element.addEventListener('dragend', () => {
        element.classList.remove('dragging');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const object = document.querySelectorAll('.draggable');
    object.forEach(makeDraggable);
});
