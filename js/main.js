//Объявляем переменные:
const headers = document.querySelectorAll('.accordeon__header')

//Описываем функционал:
for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', showContent)
  headers[i].addEventListener('touchstart', showContent)
}

//Показываем ответ: 
function showContent() {
  this.classList.toggle('active');
  const accordeonContent = this.nextElementSibling;

  if (accordeonContent.style.display === 'block') {
    accordeonContent.style.display = 'none';
  } else {
    const accordeonContents = document.querySelectorAll('.accordeon__content');
    for (let i = 0; i < accordeonContents.length; i++) {
      if (accordeonContents[i] !== accordeonContent && accordeonContents[i].style.display === 'block') {
        accordeonContents[i].style.display = 'none';
        accordeonContents[i].previousElementSibling.classList.remove('active');
      }
    }
    accordeonContent.style.display = 'block';
  }
}
