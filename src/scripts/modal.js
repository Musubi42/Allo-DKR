document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('#button_modal_landing_page button');
  const contents = document.querySelectorAll('.content');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const target = this.getAttribute('modal-target');

      contents.forEach(content => {
        // Make sure all the modals are closed
        content.classList.add('hidden')
      });

      const targetContent = document.getElementById(target);
      if (targetContent) {
        targetContent.classList.remove('hidden');
      }
    });
  });

  const modal_close = document.querySelectorAll('#modal_close')
  modal_close.forEach(modal_close => {
    modal_close.addEventListener('click', function () {
      const target = this.getAttribute('modal-button-close');

      const targetContent = document.getElementById(target);
      if (targetContent) {
        targetContent.classList.add('hidden');
      }
    })
  })

});




