//Объявляем переменные:
const headers = document.querySelectorAll('.accordeon__header')

//Описываем функционал:
for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', showContent)
  headers[i].addEventListener('touchstart', showContent)
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

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	