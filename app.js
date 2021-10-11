const dropdown = (function() {
  const renderDropdown = () => {
    const dropdown = document.querySelector('.dropdown');

    dropdown.classList.remove('fade-out');

    dropdown.classList.add('is-visible', 'fade-in');

    dropdown.addEventListener('click', (e) => {
      if (e.target.classList.contains('dropdown')) {
        closeDropdown();
      }
    });
  }

  const closeDropdown = () => {
    const dropdown = document.querySelector('.dropdown');

    dropdown.classList.add('fade-out');

    setTimeout(() => {
      dropdown.classList.remove('is-visible', 'fade-in');
    }, 250)
  };

  return {
    render() {
      renderDropdown();
    }
  }
}());



// Events
const hamburgerMenu = document.querySelector('.js-hamburger');

hamburgerMenu.addEventListener('click', (e) => {
  e.preventDefault();

  dropdown.render();
})