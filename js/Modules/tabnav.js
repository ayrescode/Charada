export default function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu button');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    tabMenu[0].classList.add('ativo');

    function activeTab(index) {
      tabMenu.forEach((button) => {
        button.classList.remove('ativo');
      }),
        tabContent.forEach((section) => {
          section.classList.remove('ativo');
        }),
        tabContent[index].classList.add('ativo'),
        tabMenu[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
