const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

if (tabContent.length && tabContent) {
    tabContent[0].classList.add('ativo')

    function activeTab(index) {
        tabContent.forEach(section => {
            section.classList.remove('ativo')
        })

        tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((menuItem, index) => {
        menuItem.addEventListener('click', () => {
            activeTab(index)
        })
    })
}
