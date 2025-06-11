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
