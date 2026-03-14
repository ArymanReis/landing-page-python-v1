// Aguarda o documento carregar
document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq__question");

        questionBtn.addEventListener("click", () => {
            // Verifica se o item clicado já está aberto
            const isActive = item.classList.contains("active");

            // Opcional: Fecha todos os outros antes de abrir o novo (estilo sanfona real)
            faqItems.forEach(otherItem => {
                otherItem.classList.remove("active");
            });

            // Se não estava aberto, nós o abrimos agora
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
});