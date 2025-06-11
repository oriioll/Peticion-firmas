 const canvas = document.getElementById("miCanvas");
        const ctx = canvas.getContext("2d");
                const btnBorrar = document.getElementById("borrarCanvas");


        let escribiendo = false;
        let xAnterior, yAnterior;

        canvas.addEventListener("mousedown", (event) => {
            escribiendo = true;
            xAnterior = event.offsetX;
            yAnterior = event.offsetY;
        });

        canvas.addEventListener("mouseup", () => escribiendo = false);
        canvas.addEventListener("mousemove", dibujar);

        function dibujar(event) {
            if (!escribiendo) return;

            ctx.strokeStyle = "black"; /* Color negro */
            ctx.lineWidth = 2; /* Grosor de la línea */
            ctx.lineCap = "round"; /* Bordes redondeados */

            ctx.beginPath();
            ctx.moveTo(xAnterior, yAnterior);
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();

            xAnterior = event.offsetX;
            yAnterior = event.offsetY;
        }
                btnBorrar.addEventListener("click", () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia todo el área del canvas
        });



const open = document.getElementById('open')
const openVinted = document.getElementById('open2')
const modal = document.getElementById('modal')
const close = document.getElementById('close')

open.addEventListener('click', () => {
    modal.style.display = 'block'
})

close.addEventListener('click', () => {
    modal.style.display = 'none'
})
openVinted.addEventListener('click', () => {
    modal.style.display = 'block'
    document.getElementById('text').innerHTML = 'SEGUIRME EN VINTED PERRRAS:  <a class="vinted" href="https://www.vinted.es/member/144597676" target="_blank">@urii120</a>';
})
let firmas = Math.random() * 1000;
firmas = Math.floor(firmas);
document.getElementById('firmas').innerText = firmas;

const submit = document.getElementById('submit');


submit.addEventListener('click', (e) => {

    // Marca visualmente el botón como enviado
    submit.textContent = "¡Firma añadida!";
    submit.disabled = true;
    firmas += 1; 
    document.getElementById('firmas').innerText = firmas;

    // Opcional: vuelve a habilitar el botón tras 2 segundos
    setTimeout(() => {
        submit.textContent = "Añade tu firma";
        submit.disabled = false;
        submit.style.backgroundColor = "#ff8866";
    }, 2000);
});