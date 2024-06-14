document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('questionForm');
    const questionsList = document.getElementById('questionsList');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const pregunta = document.getElementById('pregunta').value;

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<strong>${nombre} (${email}):</strong> <p>${pregunta}</p>`;

        questionsList.appendChild(questionDiv);

        form.reset();
    });

    const animatedTextElements = document.querySelectorAll('.animated-text');
    animatedTextElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transition = 'opacity 2s ease-in-out';
        setTimeout(() => el.style.opacity = 1, 500);
    });
});
