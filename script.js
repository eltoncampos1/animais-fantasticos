function initTabNav() {
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
}

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    if ( accordionList.length) {
        accordionList[0].classList.add('ativo')
        accordionList[0].nextElementSibling.classList.add('ativo')

        function activeAccordion() {
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }


        accordionList.forEach(item => {
            item.addEventListener('click', activeAccordion)
        })
    }

}

initAccordion();


function scrollAnimation() {
    const sections = document.querySelectorAll('.js-scroll')

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                if (sectionTop < 0) {
                    section.classList.add('ativo')
                } else {
                    section.classList.remove('ativo')
                }
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll)
    }

}

scrollAnimation();