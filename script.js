const cursoSelect = document.getElementById('curso');
const dudaTextarea = document.getElementById('duda');
const enviarDudaButton = document.getElementById('enviar-duda');
const dudasLista = document.getElementById('dudas-lista');

const palabrasProhibidas = ['tonto', 'estúpido', 'idiota']; // Añade más palabras según sea necesario

function silenciarPalabras(texto) {
    return palabrasProhibidas.reduce((textoLimpio, palabra) => {
        const regex = new RegExp(palabra, 'gi');
        return textoLimpio.replace(regex, '*'.repeat(palabra.length));
    }, texto);
}

function agregarDuda(curso, texto) {
    const dudaItem = document.createElement('div');
    dudaItem.className = 'duda-item';
    dudaItem.innerHTML = `
        <div class="duda-curso">Curso: ${curso}</div>
        <p class="duda-texto">${texto}</p>
    `;
    dudasLista.appendChild(dudaItem);
}

dudaTextarea.addEventListener('input', (e) => {
    e.target.value = silenciarPalabras(e.target.value);
});

enviarDudaButton.addEventListener('click', () => {
    const curso = cursoSelect.value;
    const duda = dudaTextarea.value.trim();

    if (!curso) {
        alert('Por favor, selecciona un curso.');
        return;
    }

    if (!duda) {
        alert('Por favor, escribe tu duda.');
        return;
    }

    agregarDuda(curso, duda);
    
    // Limpiar campos después de enviar
    cursoSelect.value = '';
    dudaTextarea.value = '';
});