const headers = document.querySelectorAll('.accordeon__header')

const langButtons = document.querySelectorAll("[data-btn]")
const allLangs = ["en", "ru", "ge"]
let currentLang = "ru"

const currentPathName = window.location.pathname;
let currentTextObject = {}

const homePageTexts = {
  'home__page-title': {
    en: "Fencing Club 'Basa'",
    ge: "Fencing Club 'Basa'",
    ru: "Фехтовальный клуб 'BASA'",
  },
  'home-header_link-1': {
    en: 'About us',
    ge: 'ჩვენს შესახებ',
    ru: 'О нас',
  },
  'home-header_link-2': {
    en: 'Trial session',
    ge: 'საცდელი მეცადინეობა',
    ru: 'Пробное занятие',
  },
  'home-header_link-3': {
    en: 'Hobby Group',
    ge: 'ჰობი - ჯგუფი',
    ru: 'Хобби группа',
  },
  'submit-btn': {
    en: 'Sign up for a class',
    ge: 'დარეგისტრირდით კლასში',
    ru: 'Записаться на занятие',
  },
  mail: {
    en: 'E-mail',
    ge: 'ფოსტა',
    ru: 'Почта',
  },
  'home-description-about': {
    en: 'The BASA Club is one big family. We have a friendly international team of athletes and coaches. The love of fencing is what unites us all.',
    ge: 'კლუბი “BASA” - ერთი დიდი ოჯახია. ჩვენთან სპორტსმენებისა და მწვრთელების მეგობრული და ინტერნაციონალური კოლექტივია. ჩვენ ყველას ფარიკაობისადმი სიყვარული გვაერთიანებს. ჩვენ ერთად ვვარჯიშობთ და ვიღებთ მონაწილეობას შეჯიბრებებში, ერთად ვმოგზაურობთ, ერთად ავღნიშნავთ დაბადების დღეებსა და სხვა დღესასწაულებს.',
    ru: 'Клуб “BASA” — одна большая семья. У нас дружный интернациональный коллектив спортсменов и тренеров. Любовь к фехтованию — это то, что всех нас объединяет.',
  },
  'learn-more': {
    en: 'Learn more',
    ge: 'მეტი რომ გაიგოთ',
    ru: 'Узнать больше',
  },
  'hobby-group': {
    en: 'Hobby Group',
    ge: 'ჰობი - ჯგუფი',
    ru: 'Хобби группа',
  },
  'home-description-hobby': {
    en: 'Find a hobby in a new city for yourself? Easily! In November 2022, we launched a new project — an amateur a group for adult fencers.',
    ge: 'იპოვნო ჰობი შენთვის ახალ ქალაქში? ძალზედ მარტივია! 2022 წელს წამოვიწყეთ ახალი პროექტი - სამოყვარულო ჯგუფი ზრდასრული მოფარიკავეებისთვის.',
    ru: 'Найти хобби в новом для себя городе? Запросто! В ноябре 2022 мы запустили новый проект — любительскую группу для взрослых фехтовальщиков.',
  },
  FAQ: {
    en: 'FAQ',
    ge: 'ხშირად დასმული კითხვები',
    ru: 'Часто задаваемые вопросы',
  },
  'accordeon-header-1': {
    en: "I want my child/children to practice fencing. Do you have a children's group?",
    ge: 'მინდა ჩემი შვილი/ შვილები ფარიკაობით დაკავევდნენ. გაქვთ თუ არა საბავშვო ჯგუფი?',
    ru: 'Я хочу, чтобы мой ребенок/дети занимались фехтованием. Есть ли у вас детская группа?',
  },
  'accordeon-content-1': {
    en: "This site is dedicated to an adult project. Of course, our club has children's groups for different ages and wonderful children's coaches. Please send us a private message or call to sign up for a trial session.",
    ge: 'ეს საიტი ეძღვნება ზრდასრულთა პროექტს. რა თქმა უნდა, კლუბში გვაქვს საბავშვო ჯგუფები სხვადასხვა ასაკისთვის და გვყავს საოცარი ბავშვთა მწვრთნელები. გთხოვთ მოგვწეროთ პირადი შერყობინება ან დაგვირეკოთ, რათა ჩაეწეროთ საცდელ მეცადინეობაზე.',
    ru: 'Этот сайт посвящен взрослому проекту. Конечно, у нас в клубе есть детские группы для разных возрастов и замечательные детские тренеры. Пожалуйста, напишите нам личное сообщение или позвоните, чтобы записаться на пробное занятие.',
  },
  'accordeon-header-2': {
    en: "I'm not a beginner, I've been fencing before. Is there a band for me in the club?",
    ge: 'ახალბედა არ ვარ, ადრე ვვარჯიშობდი ფარიკაობაში. არის კლუბში ჩემთვის შესაფერისი ჯგუფი?',
    ru: 'Я не новичок, раньше уже занимался фехтованием. Есть ли в клубе группа для меня?',
  },
  'accordeon-content-2': {
    en: 'Of course! Come, our experienced trainers will help you choose a group and make a convenient program for you, depending on your experience and wishes.',
    ge: 'რა თქმა უნდა! მობრძანდით, ჩვენი გამოცდილი მწვრთნელები დაგეხმარებიან ჯგუფის შერჩევაში და თქვენზე მორგებული პროგრამის შედგენაში, თქვენი გამოცდილებისა და სურვილების მიხედვით.',
    ru: 'Конечно! Приходите, наши опытные тренеры помогут Вам выбрать группу и составить удобную программу для Вас в зависимости от опыта и пожеланий.',
  },
  'accordeon-header-3': {
    en: 'Is it safe to practice fencing?',
    ge: 'უსაფრთხოა თუ არა ფარიკაობაში ვარჯიში?',
    ru: 'Безопасно ли заниматься фехтованием?',
  },
  'accordeon-content-3': {
    en: 'Provided that safety precautions are followed, fencing is one of the most non-dangerous sports. It is less traumatic than, for example, football.',
    ge: ' ფარიკაობის უსაფრთხოების ტექნიკის დაცვის შემთხვევაში, ეს ერთ-ერთი ყველაზე უსაფრთხო სპორტის სახეობაა. ფარიკაობა ნაკლებად ტრავმულია, ვიდრე, მაგალითად ფეხბურთი.',
    ru: 'При условии соблюдения техники безопасности фехтование - один из самых неопасных видов спорта. Он менее травматичен чем, например, футбол.',
  },
  'accordeon-header-4': {
    en: "I don't have any fencing equipment. Do I need to buy it?",
    ge: 'მე არ მაქვს ფარიკაობის ინვენტარი. საჭიროა თუ არა მისი ყიდვა?',
    ru: 'У меня нет фехтовального инвентаря. Нужно ли его покупать?',
  },
  'accordeon-content-4': {
    en: 'For a trial class and the first month of classes, the club provides all the necessary equipment. After that, you can buy inventory in the club store or rent it.',
    ge: 'საცდელი გაკვეთილისა და მეცადინეობის პირველი თვისთვის, კლუბი უზრუნველყოფს ყველა საჭირო ინვენტარს. შემდგომ, შეგიძლიათ შეიძინოთ ინვენტარი კლუბის მაღაზიაში, ან იქირაოთ.',
    ru: 'Для пробного занятия и первого месяца занятий клуб предоставляет весь необходимый инвентарь. После Вы можете купить инвентарь в магазине клуба или взять его в аренду.',
  },
  'accordeon-header-5': {
    en: 'Is it necessary to attend three classes a week? Will I lag behind others if I walk less often than others?',
    ge: 'აუცილებელია თუ არა მეცადინეობაზე დასწრება კვირაში სამჯერ? ჩამოვრჩები თუ არა სხვებს, თუ სხვებზე იშვიათად ვივლი?',
    ru: 'Обязательно ли посещать три занятия в неделю? Отстану ли я от других, если буду ходить реже, чем остальные?',
  },
  'accordeon-content-5': {
    en: "No. There is a subscription in our club. You can come 3 times a week, it's 12-15 classes a month.",
    ge: 'არა. ჩვენს კლუბში მოქმედებს აბონიმენტი. შესაძლებელია კვირაში სამჯერ მოსვლა, ეს კი თვეში 12-15 მეცადინეობა გახლავთ.',
    ru: 'Нет. В нашем клубе действует абонемент. Можно приходить 3 раза в неделю, это 12-15 занятий в месяц. Пропущенные занятия всегда можно компенсировать за счет индивидуальных занятий с тренером.',
  },
  'accordeon-header-6': {
    en: 'What kind of weapons can you practice on?',
    ge: 'რა სახის იარაღითაა ვარჯიში შესაძლებელი?',
    ru: 'На каком виде оружия можно заниматься?',
  },
  'accordeon-content-6': {
    en: 'The club holds classes on three types of weapons: rapier, sword, saber.',
    ge: 'კლუბში მეცადინეობა ტარდება სამი სახის იარაღით: რაპირა, დაშნა, ხმალი.',
    ru: 'В клубе проводятся занятия на трех видах оружия: рапире, шпаге, сабле.',
  },

  //TO DO: добавить 7 аккордеон!

  address: {
    en: 'Address',
    ge: 'მისამართი',
    ru: 'Адрес',
  },
  'contact-us': {
    en: 'Contact us',
    ge: 'დაგვიკავშირდით',
    ru: 'Связаться с нами',
  },
}

const aboutPageTexts = {
  'about__page-title': {
    en: "Fencing Club 'Basa'",
    ge: "Fencing Club 'Basa'",
    ru: "Фехтовальный клуб 'BASA'",
  },
  'about-header_link-1': {
    en: 'Home Page',
    ge: 'მთავარ გვერდზე',
    ru: 'На главную',
  },
  'about-header_link-2': {
    en: 'Trial session',
    ge: 'საცდელი მეცადინეობა',
    ru: 'Пробное занятие',
  },
  'about-header_link-3': {
    en: 'Hobby Group',
    ge: 'ჰობი - ჯგუფი',
    ru: 'Хобби группа',
  },
  'submit-btn': {
    en: 'Sign up for a class',
    ge: 'დარეგისტრირდით კლასში',
    ru: 'Записаться на занятие',
  },
  mail: {
    en: 'E-mail',
    ge: 'ფოსტა',
    ru: 'Почта',
  },
  'about-header': {
    en: 'About our club',
    ge: 'ჩვენი კლუბის შესახებ',
    ru: 'О нашем клубе',
  },
  'about-text__item-1': {
    en: 'The BASA Club is one big family. We have a friendly international team of athletes and coaches.',
    ge: 'კლუბი “BASA” - ერთი დიდი ოჯახია. ჩვენთან სპორტსმენებისა და მწვრთელების მეგობრული და ინტერნაციონალური კოლექტივია.',
    ru: 'Клуб “BASA” — одна большая семья. У нас дружный интернациональный коллектив спортсменов и тренеров.',
  },
  'about-text__item-2': {
    en: 'The love of fencing unites us all. We train together and take part in competitions, travel together, celebrate birthdays and other holidays together.',
    ge: 'ჩვენ ყველას ფარიკაობისადმი სიყვარული გვაერთიანებს. ჩვენ ერთად ვვარჯიშობთ და ვიღებთ მონაწილეობას შეჯიბრებებში, ერთად ვმოგზაურობთ, ერთად ავღნიშნავთ დაბადების დღეებსა და სხვა დღესასწაულებს.',
    ru: 'Любовь к фехтованию объединяет всех нас. Мы вместе тренируемся и принимаем участие в соревнованиях, вместе путешествуем, вместе отмечаем дни рождения и другие праздники.',
  },
  'about-text__item-3': {
    en: 'Our athletes — children, juniors, adults and veterans — regularly perform and take prizes at local and international competitions.',
    ge: 'ჩვენი სპორტსმენები - ბავშვები, მოზარდები, ზრდასრულები და ვეტერანები  - რეგულარულად ასპარეზობენ და საპრიზო ადგილებს იკავებენ ადგილობრივ და საერთაშორისო შეჯიბრებებზე.',
    ru: 'Наши спортсмены — дети, юниоры, взрослые и ветераны — регулярно выступают и занимают призовые места на локальных и международных соревнованиях.',
  },
  'about-text__item-4': {
    en: 'In November 2022, we decided to launch an amateur project — a group for expats and residents in search of a hobby in Tbilisi who want to start fencing from scratch (for more information, see )',
    ge: '2022 წლის ნოემბერში მივიღეთ გადაწყვეტილება წამოგვეწყო სამოყვარულო პროექტი - ჯგუფი ექსპატებისა და რეზიდენტებისთვის, რომლებიც თბილისში ჰობის ძიებაში არიან, რომელთაც სურთ ფარიკაობა ნულიდან დაიწყონ. (დეტალური ინფორმაცია იხ. )',
    ru: 'В ноябре 2022 мы приняли решение запустить любительский проект — группу для экспатов и резидентов в поиске хобби в Тбилиси, которые хотят начать заниматься фехтованием с нуля (подробнее в разделе )',
  },
  'about-link-to-hobby': {
    en: 'Hobby Group',
    ge: 'ჰობი - ჯგუფი',
    ru: 'Хобби группа',
  },
  'about-text__item-5': {
    en: 'We are on  We will be glad to see you in our classes! We are sure that you will also love fencing as much as we love this wonderful sport.',
    ge: ' ჩვენ ვიმყოფებით  მიხარულნი ვიქნებით გიხილოთ ჩვენს მეცადინეობებზე! დარწმუნებულები ვართ, თქვენც ისევე შეგიყვარდებათ ფარიკაობა, როგორც ჩვენ გვიყვარს სპორტის ეს მშვენიერი სახეობა.',
    ru: 'Мы находимся на  Будем рады видеть Вас на наших занятиях! Уверены, Вы тоже полюбите фехтование так же, как любим этот прекрасный вид спорта мы.',
  },
  'about-text__item-5-link': {
    en: 'Arena 2 in Saburtalo (University Street, 6, 3rd floor).',
    ge: 'არენა 2 -ში” საბურთალოზე. (უნივერსიტეტის ქ. 6, მე-3 სართ).',
    ru: 'Арене 2 в Сабуртало (Университетская улица, д.6, 3 этаж).',
  },
  'about-text__item-6': {
    en: "Your Fencing Club 'BASA'",
    ge: 'თქვენი კლუბი “BASA”',
    ru: 'Ваш клуб “BASA”',
  },
  'about-slider__header': {
    en: 'Photos of our club',
    ge: 'ჩვენი კლუბის ფოტოები',
    ru: 'Фото нашего клуба',
  },
}

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


//========Мультиязычность==============


function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentTexts = homePageTexts;
      break;
    case "/html/about.html":
      currentTexts = aboutPageTexts;
      break;
      //TO DO: доделать остальные страницы!
    default:
      currentTexts = homePageTexts;
      break;
  }
}
checkPagePathName();

function changeLang() {
  for (const key in currentTexts) {
    let elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTexts[key][currentLang];
    }
  }
}
changeLang();

langButtons.forEach((btn => {
  btn.addEventListener('click', (event) => {
    currentLang = event.target.dataset.btn;
    btn.classList.add("lang-switcher__btn-active");
    changeLang();
  })
}))
