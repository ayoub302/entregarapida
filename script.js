// Función para manejar las estrellas
const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("rating");

stars.forEach((star) => {
    star.addEventListener("click", () => {
        const value = star.getAttribute("data-value");
        ratingInput.value = value;

        stars.forEach((s) => s.classList.remove("active"));
        star.classList.add("active");

        let currentStar = star;
        while (currentStar.previousElementSibling) {
            currentStar = currentStar.previousElementSibling;
            currentStar.classList.add("active");
        }
    });
});

// Función para mostrar las opiniones
function displayReview(name, rating, message) {
    const reviewsList = document.getElementById("reviews-list");

    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    const stars = "&#9733;".repeat(rating) + "&#9734;".repeat(5 - rating);

    reviewItem.innerHTML = `
        <h3>${name}</h3>
        <div class="rating">${stars}</div>
        <p>${message}</p>
    `;

    reviewsList.appendChild(reviewItem);
}

// Función para manejar el envío del formulario de opinión
document.getElementById("opinion-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const message = document.getElementById("message").value;

    if (!name || !rating || !message) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Mostrar la opinión en la página
    displayReview(name, rating, message);

    // Limpiar el formulario
    this.reset();
    stars.forEach((star) => star.classList.remove("active"));
    ratingInput.value = "";
});

// Obtener todos los enlaces "Saber más"
const saberMasButtons = document.querySelectorAll(".saber-mas");

// Obtener todos los modales
const modals = document.querySelectorAll(".modal");

// Obtener todos los botones de cierre
const closeButtons = document.querySelectorAll(".close");

// Función para abrir el modal
saberMasButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault(); // Evitar que el enlace recargue la página
        const modalId = button.getAttribute("data-modal"); // Obtener el ID del modal
        const modal = document.getElementById(modalId); // Seleccionar el modal correspondiente
        if (modal) {
            modal.style.display = "block"; // Mostrar el modal
        }
    });
});

// Función para cerrar el modal
closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
        const modal = closeButton.closest(".modal");
        if (modal) {
            modal.style.display = "none"; // Ocultar el modal
        }
    });
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener("click", (e) => {
    modals.forEach((modal) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


// Toggle del menú en móviles
const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});