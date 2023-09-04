const { html } = require('common-tags')

function plat_categorie({title}) {
  return html`
    <div class="bg-[white] bg-cover bg-no-repeat border-[2px] border-primary-light h-full w-full px-5 py-3 my-7 shadow-[0px_4px_4px_rgba(54,89,60,0.20)]">

      <h2 class="my-auto w-full font-gagalin text-primary-dark font-normal text-3xl">
        ${title}
      </h2>
      <div class="flex flex-row mt-4">
        <!-- col_plat -->
      </div>
    </div>
  `
}

module.exports = plat_categorie;