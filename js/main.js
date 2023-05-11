//Объявляем переменные:
const headers = document.querySelectorAll('.accordeon__header')

//Описываем функционал:
for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', showContent)
  headers[i].addEventListener('touch', showContent)
}

//Показываем ответ, изменяя высоту контента:
function showContent() {
  this.classList.toggle('active')
  const accordeonContent = this.nextElementSibling

  if (accordeonContent.style.maxHeight) {
    accordeonContent.style.maxHeight = null
  } else {
    //Сначала пробежимся циклом 'for' и закроем все остальные ответы:
    const accordeonContents = document.querySelectorAll('.accordeon__content')
    for (let i = 0; i < accordeonContents.length; i++) {
      if (accordeonContents[i] !== accordeonContent && accordeonContents[i].style.maxHeight) {
        accordeonContents[i].style.maxHeight = null
        accordeonContents[i].previousElementSibling.classList.remove('active')
      }
    }
    //Теперь откроем необходимый ответ:
    accordeonContent.style.maxHeight = accordeonContent.scrollHeight + 'px'
  }
}

//------SLIDER------

const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  grabCursor: true,
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 10
    },

    990: {
      slidesPerView: 3,
      spaceBetween: 20
      
    }
  }
});