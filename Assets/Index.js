document.getElementById('menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    // Toggle the menu visibility
    menu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');

    // Update aria-expanded attribute
    const isExpanded = menu.classList.contains('hidden') ? 'false' : 'true';
    this.setAttribute('aria-expanded', isExpanded);
});


