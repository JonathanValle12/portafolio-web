window.addEventListener("load", () => {
    const scrollButton = document.getElementById("scroll-to-top");
    function scrollToTarget(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToTarget(targetId);
        });
    });

    document.querySelector("#scroll-to-top a").addEventListener("click", function (e) {
        e.preventDefault();
        scrollToTarget("top");
    });
        document.addEventListener('scroll', function () {
        if (window.scrollY > 700) {
            scrollButton.classList.add("active");
        } else {
            scrollButton.classList.remove("active");
        }
    });
    window.addEventListener("scroll", function () {
        const scrollButton = document.getElementById("scroll-to-top");
    
        if (window.scrollY > 700) {
            scrollButton.classList.add("active");
        } else {
            scrollButton.classList.remove("active");
        }
    });
    
    document.querySelector("#scroll-to-top a").addEventListener("click", function (e) {
        e.preventDefault();
        document.body.scrollIntoView({ behavior: "smooth" });
    });

    const form = document.getElementById("enviarForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateForm()) {
            form.reset(); // Resetear los campos del formulario
        }
    });

    let curriculum = document.getElementById("curriculum");

    curriculum.addEventListener("click", () => {

        let url = "./Curriculum_Vitae.pdf";

        link = document.createElement("a");

        link.setAttribute("href", url);
        link.setAttribute("download", "Curriculum");
        link.setAttribute("target", "_blank");

        document.body.appendChild(link);

        link.click();
    });  

    const verMasButton = document.getElementById("ver-mas");

    // Número de proyectos a mostrar por clic en "Ver más"
    const proyectosPorClic = 2;

    // Función para mostrar proyectos adicionales
    function mostrarProyectos() {
        const proyectosOcultos = document.querySelectorAll(".proyecto_item.hidden");

        console.log("hola");
        for (let i = 0; i < proyectosPorClic && i < proyectosOcultos.length; i++) {
            proyectosOcultos[i].classList.remove("hidden");
        }

        // Ocultar el botón si no hay más proyectos ocultos
        if (document.querySelectorAll(".proyecto_item.hidden").length === 0) {
            verMasButton.style.display = "none";
        }
    }

    // Mostrar proyectos al cargar la página
    mostrarProyectos();

    // Manejar clic en el botón "Ver más"
    verMasButton.addEventListener("click", mostrarProyectos);    
    
});

function validateInput(inputId, errorMessageId, validationFunction, errorMessage, emptyMessage) {
    const input = document.getElementById(inputId);

    const errorMessageElement = document.getElementById(errorMessageId);

    function clearError() {
        errorMessageElement.classList.remove("error");
        errorMessageElement.textContent = "";
    }

    input.addEventListener("input", () => {
        if (input.value.trim() === "") {
            errorMessageElement.classList.add("error");
            errorMessageElement.textContent = emptyMessage;
        } else if (validationFunction(input.value.trim())) {
            clearError();
        } else {
            errorMessageElement.classList.add("error");
            errorMessageElement.textContent = errorMessage;
        }
    });

    const value = input.value.trim();

    if (value === "") {
        errorMessageElement.classList.add("error");
        errorMessageElement.textContent = emptyMessage;
        return false;
    }

    if (!validationFunction(value)) {
        errorMessageElement.classList.add("error");
        errorMessageElement.textContent = errorMessage;
        return false;
    }

    errorMessageElement.classList.remove("error");
    errorMessageElement.textContent = "";
    return true;
}

function validateForm() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const isValidName = validateInput("name", "mensajeName", (value) => value.length >= 4, "Mínimo 4 caracteres", "Introduce un nombre válido");
    const isValidEmail = validateInput("email", "mensajeEmail", (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), "Introduce un email válido", "Introduce un email válido");
    const isValidSubject = validateInput("subject", "mensajeSubject", (value) => value.length >= 2, "Mínimo 2 caracteres", "Introduce un asunto válido");
    const isValidMessage = validateInput("message", "mensajeTextarea", (value) => value.length >= 10, "Mínimo 10 caracteres", "Introduce un mensaje válido");

    // Realizar el envío del formulario aquí
    if(isValidName && isValidEmail && isValidSubject && isValidMessage) {
        // Realizar el envío del formulario aquí
        const parms = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }

        emailjs.send("service_em8tgrd", "template_hhp2kks", parms).then(alert("Mensaje Enviado!!"));
    }

    return isValidName && isValidEmail && isValidSubject && isValidMessage;
}
