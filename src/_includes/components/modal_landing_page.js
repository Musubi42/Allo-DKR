const { html } = require('common-tags')

function modal_landing_page({id, title, modal_button_close, tourcoing, lille}) {
  return html`
    <div id="${id}" class="hidden content fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <!-- Modal header -->
              <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white w-full text-center">
                      ${title}
                  </h3>
                  <button 
                    id="modal_close" 
                    type="button" 
                    modal-button-close="${modal_button_close}"
                    class="absolute right-0 mr-3 ring-1 top-0 mt-[12px] text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span class="sr-only">Fermer la fenêtre</span>
                  </button>
              </div>
              <!-- Modal body -->
              <div class="p-6 space-y-6">
                <h4>Tourcoing</h4>
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    ${tourcoing}
                    <br />
                    Consultez le menu de Tourcoing, <a href="/menu-tourcoing/" class="underline" >ici</a>
                  </p>
                <h4>Lille</h4>
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    ${lille}   
                    <br /> 
                    Consulter le menu de Lille, <a href="/menu-lille/" class="underline" >ici</a>
                  </p>
              </div>
          </div>
      </div>
  </div>
  `;
}

module.exports = modal_landing_page;