document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const products = data.products;

            document.getElementById("search-button").addEventListener("click", function() {
                const searchInput = document.getElementById("search-input").value.trim();
                const resultContainer = document.getElementById("result-container");

                // Check if the input is exactly 5 digits and contains only numbers
                const isValidInput = /^\d{5}$/.test(searchInput);

                if (!isValidInput) {
                    resultContainer.innerHTML = `Iltimos, faqat 5 raqamli ID kiriting.`;
                    return;
                }

                const product = products.find(p => p.id === searchInput);

                if (product) {
                    resultContainer.innerHTML = `Mahsulotning tarjimasi telegram kanalda topildi. Ushbu <a href="${product.telegram_link}" target="_blank">havola</a> orqali unga oting.`;
                } else {
                    resultContainer.innerHTML = `Ushbu mahsulotning tarjimasi telegram kanalda yo'q ekan.`;
                }
            });
        })
        .catch(error => {
            console.error('Error loading data:', error);
        });
});
