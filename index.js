function showOption(radio) {
    // Hide all product-options sections
    const allProductOptions = document.querySelectorAll('.product-options');
    allProductOptions.forEach((option) => {
        option.classList.add('d-none');
    });

    // Show the selected product-options section
    const sectionNumber = radio.closest('.card').querySelector('.product-options').getAttribute('data-section');
    const productOptions = document.querySelector(`.product-options[data-section="${sectionNumber}"]`);

    if (radio.checked) {
        productOptions.classList.remove('d-none');
    } else {
        productOptions.classList.add('d-none');
    }
}