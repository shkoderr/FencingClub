const headers = document.querySelectorAll('.accordeon__header')

const langButtons = document.querySelectorAll('[data-btn]')
const allLangs = ['en', 'ru', 'ge']
let currentLang = localStorage.getItem('language') || cheсkBrowserLanguage() || 'ru'

const currentPathName = window.location.pathname
let currentTextObject = {}

const homePageTexts = {
  'home__page-title': {
    en: "Fencing Academy “BASA”",
    ge: "Fencing Academy “BASA”",
    ru: "Фехтовальный клуб “BASA”",
  },
  'home-header_link-1': {
    en: 'About us',
    ge: 'ჩვენს შესახებ',
    ru: 'О нас',
  },
  'home-header_link-2': {
    en: 'Trial class',
    ge: 'საცდელი მეცადინეობა',
    ru: 'Пробное занятие',
  },
  'home-header_link-3': {
    en: 'Hobby-Group',
    ge: 'ჰობი-ჯგუფი',
    ru: 'Хобби-группа',
  },
  'submit-btn': {
    en: 'Sign up for a trial class',
    ge: 'დარეგისტრირდით კლასში',
    ru: 'Записаться на занятие',
  },
  'cost': {
    en: '50 Gel/person',
    ge: '50 ლარი',
    ru: '50 Gel/чел',
  },
  'mail': {
    en: 'E-mail',
    ge: 'ფოსტა',
    ru: 'Почта',
  },
  'home-description-about': {
    en: 'Fencing Academy “BASA” are like one big family, not just colleagues. We all have a love for fencing. Together we train and take part in competitions.',
    ge: 'კლუბი “BASA” - ერთი დიდი ოჯახია. ჩვენთან სპორტსმენებისა და მწვრთელების მეგობრული და ინტერნაციონალური კოლექტივია. ჩვენ ყველას ფარიკაობისადმი სიყვარული გვაერთიანებს.',
    ru: 'Клуб “BASA” — одна большая семья. У нас дружный интернациональный коллектив спортсменов и тренеров. Любовь к фехтованию — это то, что всех нас объединяет.',
  },
  'learn-more-about': {
    en: 'Learn more',
    ge: 'მეტი რომ გაიგოთ',
    ru: 'Узнать больше',
  },
  'learn-more-hobby': {
    en: 'Learn more',
    ge: 'მეტი რომ გაიგოთ',
    ru: 'Узнать больше',
  },
  'about-us': {
    en: 'About us',
    ge: 'ჩვენს შესახებ',
    ru: 'О нас',
  },
  'hobby-group': {
    en: 'Hobby-Group',
    ge: 'ჰობი-ჯგუფი',
    ru: 'Хобби-группа',
  },
  'home-description-hobby': {
    en: 'Picking up a new hobby in Tbilisi? In November 2022 we launched a new project — Hobby-group for senior fencers.',
    ge: 'იპოვნო ჰობი შენთვის ახალ ქალაქში? ძალზედ მარტივია! 2022 წელს წამოვიწყეთ ახალი პროექტი - სამოყვარულო ჯგუფი ზრდასრული მოფარიკავეებისთვის.',
    ru: 'Найти хобби в новом для себя городе? Запросто! В ноябре 2022 мы запустили новый проект — любительскую группу для взрослых фехтовальщиков.',
  },
  FAQ: {
    en: 'FAQ',
    ge: 'ხშირად დასმული კითხვები',
    ru: 'Часто задаваемые вопросы',
  },
  'accordeon-header-1': {
    en: "I want my kid/children go fencing. Is there any kids class?",
    ge: 'მინდა ჩემი შვილი/ შვილები ფარიკაობით დაკავევდნენ. გაქვთ თუ არა საბავშვო ჯგუფი?',
    ru: 'Я хочу, чтобы мой ребенок/дети занимались фехтованием. Есть ли у вас детская группа?',
  },
  'accordeon-content-1': {
    en: "This site is mostly about our senior project. Of course, we have kids groups too and excellent children’s coaches. Please send us a message or call us to sign up for a trial class.",
    ge: 'ეს საიტი ეძღვნება ზრდასრულთა პროექტს. რა თქმა უნდა, კლუბში გვაქვს საბავშვო ჯგუფები სხვადასხვა ასაკისთვის და გვყავს საოცარი ბავშვთა მწვრთნელები. გთხოვთ მოგვწეროთ პირადი შერყობინება ან დაგვირეკოთ, რათა ჩაეწეროთ საცდელ მეცადინეობაზე.',
    ru: 'Этот сайт посвящен взрослому проекту. Конечно, у нас в клубе есть детские группы для разных возрастов и замечательные детские тренеры. Пожалуйста, напишите нам личное сообщение или позвоните, чтобы записаться на пробное занятие.',
  },
  'accordeon-header-2': {
    en: "I’m not a first-timer. I used to fence before. Can I join?",
    ge: 'ახალბედა არ ვარ, ადრე ვვარჯიშობდი ფარიკაობაში. არის კლუბში ჩემთვის შესაფერისი ჯგუფი?',
    ru: 'Я не новичок, раньше уже занимался фехтованием. Есть ли в клубе группа для меня?',
  },
  'accordeon-content-2': {
    en: 'Sure! Our experienced coaches will help you choose a group according to your level and experience.',
    ge: 'რა თქმა უნდა! მობრძანდით, ჩვენი გამოცდილი მწვრთნელები დაგეხმარებიან ჯგუფის შერჩევაში და თქვენზე მორგებული პროგრამის შედგენაში, თქვენი გამოცდილებისა და სურვილების მიხედვით.',
    ru: 'Конечно! Приходите, наши опытные тренеры помогут Вам выбрать группу и составить удобную программу для Вас в зависимости от опыта и пожеланий.',
  },
  'accordeon-header-3': {
    en: 'Is fencing a safe sport?',
    ge: 'უსაფრთხოა თუ არა ფარიკაობაში ვარჯიში?',
    ru: 'Безопасно ли заниматься фехтованием?',
  },
  'accordeon-content-3': {
    en: 'If you follow simple rules, fencing is one of the safest sports. It’s even less dangerous than football.',
    ge: ' ფარიკაობის უსაფრთხოების ტექნიკის დაცვის შემთხვევაში, ეს ერთ-ერთი ყველაზე უსაფრთხო სპორტის სახეობაა. ფარიკაობა ნაკლებად ტრავმულია, ვიდრე, მაგალითად ფეხბურთი.',
    ru: 'При условии соблюдения техники безопасности фехтование - один из самых неопасных видов спорта. Он менее травматичен чем, например, футбол.',
  },
  'accordeon-header-4': {
    en: "I have no fencing equipment. Shall I buy it to join classes?",
    ge: 'მე არ მაქვს ფარიკაობის ინვენტარი. საჭიროა თუ არა მისი ყიდვა?',
    ru: 'У меня нет фехтовального инвентаря. Нужно ли его покупать?',
  },
  'accordeon-content-4': {
    en: 'For a trial class and first month of regular classes you will be given a spare equipment. Later you can buy suit and sword in our club’s shop or rent it.',
    ge: 'საცდელი გაკვეთილისა და მეცადინეობის პირველი თვისთვის, კლუბი უზრუნველყოფს ყველა საჭირო ინვენტარს. შემდგომ, შეგიძლიათ შეიძინოთ ინვენტარი კლუბის მაღაზიაში, ან იქირაოთ.',
    ru: 'Для пробного занятия и первого месяца занятий клуб предоставляет весь необходимый инвентарь. После Вы можете купить инвентарь в магазине клуба или взять его в аренду.',
  },
  'accordeon-header-5': {
    en: 'Do I have to come 3 times a week? Will I quickly fall behind if I visit less classes?',
    ge: 'აუცილებელია თუ არა მეცადინეობაზე დასწრება კვირაში სამჯერ? ჩამოვრჩები თუ არა სხვებს, თუ სხვებზე იშვიათად ვივლი?',
    ru: 'Обязательно ли посещать три занятия в неделю? Отстану ли я от других, если буду ходить реже, чем остальные?',
  },
  'accordeon-content-5': {
    en: "No. We have a monthly fee, and only you decide how many training to visit. The maximum is 3 times a week (12-15 classes/month). If you miss some group lessons, you can always compensate the lag with individual lessons.",
    ge: 'არა. ჩვენს კლუბში მოქმედებს აბონიმენტი. შესაძლებელია კვირაში სამჯერ მოსვლა, ეს კი თვეში 12-15 მეცადინეობა გახლავთ.',
    ru: 'Нет. В нашем клубе действует абонемент. Можно приходить 3 раза в неделю, это 12-15 занятий в месяц. Пропущенные занятия всегда можно компенсировать за счет индивидуальных занятий с тренером.',
  },
  'accordeon-header-6': {
    en: 'What weapons can I fence?',
    ge: 'რა სახის იარაღითაა ვარჯიში შესაძლებელი?',
    ru: 'На каком виде оружия можно заниматься?',
  },
  'accordeon-content-6': {
    en: 'Foil, épée and sabre',
    ge: 'კლუბში მეცადინეობა ტარდება სამი სახის იარაღით: რაპირა, დაშნა, ხმალი.',
    ru: 'В клубе проводятся занятия на трех видах оружия: рапире, шпаге, сабле.',
  },
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
  title: {
    en: 'About us',
    ge: 'ჩვენს შესახებ',
    ru: 'О нас',
  },
  'about__page-title': {
    en: "Fencing Academy “BASA”",
    ge: "Fencing Academy “BASA”",
    ru: "Фехтовальный клуб “BASA”",
  },
  'about-header_link-1': {
    en: 'Home Page',
    ge: 'მთავარ გვერდზე',
    ru: 'На главную',
  },
  'about-header_link-2': {
    en: 'Trial class',
    ge: 'საცდელი მეცადინეობა',
    ru: 'Пробное занятие',
  },
  'about-header_link-3': {
    en: 'Hobby-Group',
    ge: 'ჰობი-ჯგუფი',
    ru: 'Хобби-группа',
  },
  'submit-btn': {
    en: 'Sign up for a trial class',
    ge: 'დარეგისტრირდით კლასში',
    ru: 'Записаться на занятие',
  },
  'cost': {
    en: '50 Gel/person',
    ge: '50 ლარი',
    ru: '50 Gel/чел',
  },
  'mail': {
    en: 'E-mail',
    ge: 'ფოსტა',
    ru: 'Почта',
  },
  'about-header': {
    en: 'About us',
    ge: 'ჩვენი კლუბის შესახებ',
    ru: 'О нашем клубе',
  },
  'about-text__item-1': {
    en: 'Fencing Academy “BASA” are like one big family, not just colleagues.',
    ge: 'კლუბი “BASA” - ერთი დიდი ოჯახია. ჩვენთან სპორტსმენებისა და მწვრთელების მეგობრული და ინტერნაციონალური კოლექტივია.',
    ru: 'Клуб “BASA” — одна большая семья. У нас дружный интернациональный коллектив спортсменов и тренеров.',
  },
  'about-text__item-2': {
    en: 'We all have a love for fencing. Together we train and take part in competitions. Together we travel and celebrate holidays and special occasions.',
    ge: 'ჩვენ ყველას ფარიკაობისადმი სიყვარული გვაერთიანებს. ჩვენ ერთად ვვარჯიშობთ და ვიღებთ მონაწილეობას შეჯიბრებებში, ერთად ვმოგზაურობთ, ერთად ავღნიშნავთ დაბადების დღეებსა და სხვა დღესასწაულებს.',
    ru: 'Любовь к фехтованию объединяет всех нас. Мы вместе тренируемся и принимаем участие в соревнованиях, вместе путешествуем, вместе отмечаем дни рождения и другие праздники.',
  },
  'about-text__item-3': {
    en: 'Our fencers — kids, juniors, seniors and veterans — participate in local and international competitions and win a lot of medals.',
    ge: 'ჩვენი სპორტსმენები - ბავშვები, მოზარდები, ზრდასრულები და ვეტერანები  - რეგულარულად ასპარეზობენ და საპრიზო ადგილებს იკავებენ ადგილობრივ და საერთაშორისო შეჯიბრებებზე.',
    ru: 'Наши спортсмены — дети, юниоры, взрослые и ветераны — регулярно выступают и занимают призовые места на локальных и международных соревнованиях.',
  },
  'about-text__item-4': {
    en: 'In November 2022 we launched a new project — fencing classes for amateurs/ beginners who are seeking new hobby in Tbilisi (for more details see section "Hobby-Group").',
    ge: '2022 წლის ნოემბერში მივიღეთ გადაწყვეტილება წამოგვეწყო სამოყვარულო პროექტი - ჯგუფი ექსპატებისა და რეზიდენტებისთვის, რომლებიც თბილისში ჰობის ძიებაში არიან, რომელთაც სურთ ფარიკაობა ნულიდან დაიწყონ. (დეტალური ინფორმაცია იხ "ჰობი-ჯგუფი".)',
    ru: 'В ноябре 2022 мы приняли решение запустить любительский проект — группу для экспатов и резидентов в поиске хобби в Тбилиси, которые хотят начать заниматься фехтованием с нуля (подробнее в разделе "Хобби-группа").',
  },
  'about-text__item-5': {
    en: 'We are located in Saburtalo at Arena 2 (6 University street, 3rd storey). We are always glad to see you at our venue! We are sure you will love fencing as we do!',
    ge: 'ჩვენ ვიმყოფებით არენა 2 -ში” საბურთალოზე. (უნივერსიტეტის ქ. 6, მე-3 სართ). მიხარულნი ვიქნებით გიხილოთ ჩვენს მეცადინეობებზე! დარწმუნებულები ვართ, თქვენც ისევე შეგიყვარდებათ ფარიკაობა, როგორც ჩვენ გვიყვარს სპორტის ეს მშვენიერი სახეობა.',
    ru: 'Мы находимся на Арене 2 в Сабуртало (Университетская улица, д.6, 3 этаж). Будем рады видеть Вас на наших занятиях! Уверены, Вы тоже полюбите фехтование так же, как любим этот прекрасный вид спорта мы.',
  },
  'about-text__item-6': {
    en: "Yours Sincerely, Fencing Academy “BASA”",
    ge: 'თქვენი კლუბი “BASA”',
    ru: 'Ваш клуб “BASA”',
  },
  'about-slider__header': {
    en: 'Photos of our Academy',
    ge: 'ჩვენი კლუბის ფოტოები',
    ru: 'Фото нашего клуба',
  },
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

const hobbyPageTexts = {
  title: {
    en: 'Hobby Group',
    ge: 'ჰობი - ჯგუფი',
    ru: 'Хобби группа',
  },
  'hobby-title': {
    en: "Fencing Academy “BASA”",
    ge: "Fencing Academy “BASA”",
    ru: "Фехтовальный клуб “BASA”",
  },
  'hobby-header_link-1': {
    en: 'Home Page',
    ge: 'მთავარ გვერდზე',
    ru: 'На главную',
  },
  'hobby-header_link-2': {
    en: 'About us',
    ge: 'ჩვენს შესახებ',
    ru: 'О нас',
  },
  'hobby-header_link-3': {
    en: 'Trial class',
    ge: 'საცდელი მეცადინეობა',
    ru: 'Пробное занятие',
  },
  'submit-btn': {
    en: 'Sign up for a trial class',
    ge: 'დარეგისტრირდით კლასში',
    ru: 'Записаться на занятие',
  },
  'cost': {
    en: '50 Gel/person',
    ge: '50 ლარი',
    ru: '50 Gel/чел',
  },
  'mail': {
    en: 'E-mail',
    ge: 'ფოსტა',
    ru: 'Почта',
  },
  'hobby-header': {
    en: 'Picking up a new hobby in Tbilisi?',
    ge: 'იპოვნო ჰობი შენთვის ახალ ქალაქში? ძალზედ მარტივია!',
    ru: 'Найти хобби в новом для себя городе? Запросто!',
  },
  'hobby-text-1': {
    en: 'In November 2022 we launched a new project — Hobby-group for senior fencers.',
    ge: '2022 წელს წამოვიწყეთ ახალი პროექტი - სამოყვარულო ჯგუფი ზრდასრული მოფარიკავეებისთვის.',
    ru: 'В ноябре 2022 мы запустили новый проект — любительскую группу для взрослых фехтовальщиков.',
  },
  'hobby-text-2': {
    en: 'We are inviting all interested to join our classes for beginners/amateurs. Primary weapon — épée.',
    ge: 'ვიწვევთ ყველა მსურველს შემოუერთდეს დამწყებ ზრდასრულთა ჯგუფის მეცადინეობებს. იარაღის სახეობა - დაშნა.',
    ru: 'Приглашаем всех желающих присоединиться к занятиям в группе начинающих взрослых. Вид оружия — шпага.',
  },
  'hobby-text-3': {
    en: 'Monthly fee — 200 GEL. Trainings are held 3 times a week.',
    ge: 'ერთთვიანი აბონიმენტის ღირებულება - 200 ლარი. ვარჯიში ტარდება სამჯერ კვირაში.',
    ru: 'Стоимость абонемента — 200 GEL/месяц. Тренировки проводятся три раза в неделю.',
  },
  'hobby-text-4': {
    en: 'We start every training with a warm-up and finish it with a cool-down. We value the safety and comfort of our students.',
    ge: 'ყველა ვარჯიში მოთელვით იწყება და მთავრდება ქულდაუნით. ჩვენ თვალ-ყურს ვადევნებთ  ჩვენი მოსწავლეების ჯანმრთელობასა და კომფორტს.',
    ru: 'Все тренировки начинаются с разминки и заканчиваются кул-дауном. Мы следим за здоровьем и комфортом наших учеников.',
  },
  'hobby-benefits': {
    en: 'Our regular trainings include:',
    ge: 'კომპლექსური მიდგომა. პროგრამაშია:',
    ru: 'Комплексный подход. В программе:',
  },
  'benefits-text-1': {
    en: 'Great international team',
    ge: 'შესანიშნავი ინტერნაციონალური კოლექტივი',
    ru: 'Замечательный интернациональный коллектив',
  },
  'benefits-text-2': {
    en: 'Any age. Any level',
    ge: 'ნებისმიერი ასაკი. ნებისმიერი დონე',
    ru: 'Любой возраст. Любой уровень',
  },
  'benefits-text-3': {
    en: 'Group lessons',
    ge: 'ჯგუფური მეცადინეობა',
    ru: 'Групповые занятия',
  },
  'benefits-text-4': {
    en: 'Footwork',
    ge: 'გადაადგილება',
    ru: 'Передвижения',
  },
  'benefits-text-5': {
    en: 'Target exercises',
    ge: 'სამიზნეზე მუშაობა',
    ru: 'Работа на мишенях',
  },
  'benefits-text-6': {
    en: 'Paired drills',
    ge: 'წყვილების ვარჯიშები',
    ru: 'Парные упражнения',
  },
  'benefits-text-7': {
    en: 'Video analysis',
    ge: 'თეორიული მეცადინეობა (ვიდეოანალიზი)',
    ru: 'Теоретические занятия (видеоанализ)',
  },
  'benefits-text-8': {
    en: 'Surely, fencing! Really a lot of fencing!',
    ge: 'რაღა თქმა უნდა - ფარიკაობა. ბევრი, ბევრი სპარინგი!',
    ru: 'Конечно же, фехтование. Много-много спарринга!',
  },
  'benefits-text-9': {
    en: 'You can also take part in real competitions!',
    ge: 'თქვენ შეგეძლებათ ნამდვილ შეჯიბრებებში მონაწილეობის მიღება!',
    ru: 'Вы сможете участвовать в настоящих соревнованиях!',
  },
  'personal-prompt': {
    en: 'Individual (1-on-1) lessons are also available',
    ge: 'ასევე შეგიძლიათ ჩაეწეროთ ინდივიდუალურ მეცადინეობაზე',
    ru: 'Также вы можете записаться на индивидуальные занятия',
  },
  'submit-personal': {
    en: 'Individual lessons',
    ge: 'ინდივიდუალური გაკვეთილები',
    ru: 'Индивидуальные уроки',
  },
  'hobby-photos': {
    en: 'Photos of our Academy',
    ge: 'ჩვენი კლუბის ფოტოები',
    ru: 'Фото нашего клуба',
  },
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

const personalPageTexts = {
  title: {
    en: 'Individual lessons',
    ge: 'ინდივიდუალური გაკვეთილები',
    ru: 'Индивидуальные уроки',
  },
  'page-title': {
    en: "Fencing Academy “BASA”",
    ge: "Fencing Academy “BASA”",
    ru: "Фехтовальный клуб “BASA”",
  },
  'back-to-hobby': {
    en: 'Back to the Hobby-Group',
    ge: 'დაბრუნება ჰობი-ჯგუფში',
    ru: 'Назад в Хобби-группу',
  },
  'personal-header': {
    en: 'Individual lessons (by arrangement with coach)',
    ge: 'ინდივიდუალური გაკვეთილები (მწვრთნელთან შეთანხმებით)',
    ru: 'Индивидуальные уроки (по договоренности с тренером)',
  },
  'personal-text-1': {
    en: 'A highly effective and extremely interesting way of learning basic fencing skills: blade work, distance choice, tactics etc. one-on-one with a professional coach.',
    ge: 'ძალიან ეფექტური და უჩვეულოდ საინტერესო ხერხია ფარიკაობის საფუძვლების დასაუფლებლად: იარაღის ფლობაზე მუშაობა, სწორი დისტანციის შერჩევა და სხვა ფარიკაობის ასპექტები - და ეს ყველაფერი პროფესიონალ მწვრთნელთან პირისპირ.',
    ru: 'Очень эффективный и необычайно интересный способ научиться азам фехтования: работе с клинком, выбору    правильной дистанции и другим фехтовальным аспектам один на один с профессиональным тренером.',
  },
  'personal-text-2': {
    en: 'Very useful especially for beginners and new-comers. Coach will make an individual programme for every student according to his/her characteristics and schedule.',
    ge: 'იკ განსაკუთრებით სასარგებლოა დამწყებ სპორტმენ-მოყვარულთათვის. ინდივიდუალური მიდგომა. მწვრთნელი ადგენს მეცადინეობის პროგრამას სპორტსმენის ინდივიდუალური მახასიათებლებისა და მისი განრიგის გათვალისწინებით.',
    ru: 'Особенно полезны для начинающих спортсменов-любителей. Индивидуальный подход. Тренер составляет программу уроков с учетом индивидуальных особенностей и расписания спортсмена.',
  },
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

const trialPageTexts = {
  title: {
    en: 'Trial class',
    ge: 'სასამართლო სხდომა',
    ru: 'Пробное занятие',
  },
  'page-title': {
    en: "Fencing Academy “BASA”",
    ge: "Fencing Academy “BASA”",
    ru: "Фехтовальный клуб “BASA”",
  },
  'trial-header_link-1': {
    en: 'Home Page',
    ge: 'მთავარ გვერდზე',
    ru: 'На главную',
  },
  'trial-header_link-2': {
    en: 'About us',
    ge: 'ჩვენს შესახებ',
    ru: 'О нас',
  },
  'trial-header_link-3': {
    en: 'Hobby-Group',
    ge: 'ჰობი-ჯგუფი',
    ru: 'Хобби-группа',
  },
  'submit-btn': {
    en: 'Sign up for a trial class',
    ge: 'დარეგისტრირდით კლასში',
    ru: 'Записаться на занятие',
  },
  'cost': {
    en: '50 Gel/person',
    ge: '50 ლარი',
    ru: '50 Gel/чел',
  },
  'mail': {
    en: 'E-mail',
    ge: 'ფოსტა',
    ru: 'Почта',
  },
  'trial-header': {
    en: 'Never tried fencing before?',
    ge: 'როგორ გავიგოთ, რამდენად მოგვწონს და რამდენად შესაფერისია ჩვენთვის ფარიკაობა?',
    ru: 'Как понять, насколько фехтование Вам нравится и подходит?',
  },
  'trial-text-1': {
    en: 'Come to our trial class with your friends and relatives!',
    ge: ' ჩვენი კლუბი გთავაზობთ უნიკალურ შესაძლებლობას მოსინჯოთ თქვენი თავი ფარიკაობაში! მობრძანდით ჩვენთან საცდელ მეცადინეობაზე და მოიყვანეთ მეგობრები და ნათესავები.',
    ru: 'Наш клуб предоставляет Вам уникальную возможность попробовать себя в фехтовании! Приходите к нам на пробное занятие и приводите друзей и родственников.',
  },
  'trial-text-2': {
    en: 'Our trial class is 50 GEL/person. Duration: 40 min.',
    ge: 'საცდელი მეცადინეობის ღირებულება - 50 ლარი 1 ადამიანი. მეცადინეობის ხანგრძლივობა 45 წუთია.',
    ru: 'Стоимость занятия — 50 Gel/чел. Пробное занятие длится 45 минут.',
  },
  'trial-text-3': {
    en: 'Professional coach with tell you about fencing, answer your questions, teach you how to move in fencing position, hold weapon and lunge/hit.',
    ge: 'პროფესიონალი მწვრთნელი მოგიყვებათ კლუბისა და ფარიკაობის შესახებ, უპასუხებს თქვენს ნებისმიერ შეკითხვას და გაჩვენებთ როგორ დაიჭიროთ სწორად იარაღი და იმოძრაოთ ფარიკაობის დგომით.',
    ru: 'Профессиональный тренер расскажет Вам о клубе и фехтовании, ответит на любые Ваши вопросы и покажет Вам, как правильно держать оружие и двигаться в фехтовальной стойке.',
  },
  'trial-text-4': {
    en: 'Real bouts with real swords and fencing suits against experienced opponents included! Fencing is fun!',
    ge: 'საცდელი მეცადინეობის კულმინაცია - ნამდვილი შერკინება დაშნით, რეალურ მეტოქესთან. გამოსცადეთ ფარიკაობის ორთაბრძოლით გამოწვეული ცოცხალი, ნამდვილი ემოციები!',
    ru: 'Кульминация пробного занятия — настоящий бой на шпаге с реальным соперником. Испытайте живые неподдельные эмоции от фехтовального поединка!',
  },
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
if (typeof Swiper !== 'undefined') {
  const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    grabCursor: true,
    direction: 'horizontal',
    loop: true,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
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
        spaceBetween: 10,
      },

      990: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  })
}

//========Мультиязычность==============

function checkPagePathName() {
  currentLang = localStorage.getItem('language') || cheсkBrowserLanguage() || 'ru';

  if (currentPathName.includes('index.html')) {
    currentTexts = homePageTexts
  } else if (currentPathName.includes('about.html')) {
    currentTexts = aboutPageTexts
  } else if (currentPathName.includes('hobby-group.html')) {
    currentTexts = hobbyPageTexts
  } else if (currentPathName.includes('personal.html')) {
    currentTexts = personalPageTexts
  } else if (currentPathName.includes('trial-session.html')) {
    currentTexts = trialPageTexts
  } else {
    currentTexts = hobbyPageTexts
  }
}
checkPagePathName()

function changeLang() {
  checkPagePathName();

  for (const key in currentTexts) {
    let elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTexts[key][currentLang];

      const urlParams = new URLSearchParams(window.location.search);
      if (currentLang !== 'ru' && currentPathName.includes('index.html')) {
        urlParams.set('hideRussianQuestion', 'true');
      } else {
        urlParams.delete('hideRussianQuestion');
      }
      window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);

      removeBlock();
    }
  }

  localStorage.setItem('language', currentLang);
}

changeLang()

langButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    currentLang = event.target.dataset.btn
    localStorage.setItem('language', event.target.dataset.btn)
    resetActiveClass(langButtons, 'lang-switcher__btn-active')
    btn.classList.add('lang-switcher__btn-active')
    if (currentLang !== 'ru' && currentPathName.includes('index.html')) {
      localStorage.setItem('hideRussianQuestion', 'true')
    } else {
      localStorage.removeItem('hideRussianQuestion')
    }
    removeBlock()
    changeLang()
  })

  //TODO: вынести в отдельный метод при рефакторинге!

  //btn.addEventListener('touchstart', (event) => {
  //  currentLang = event.target.dataset.btn
  //  localStorage.setItem('language', event.target.dataset.btn)
  //  resetActiveClass(langButtons, 'lang-switcher__btn-active')
  //  btn.classList.add('lang-switcher__btn-active')
  //  if (currentLang !== 'ru' && currentPathName.includes('index.html')) {
  //    localStorage.setItem('hideRussianQuestion', 'true')
  //  } else {
  //    localStorage.removeItem('hideRussianQuestion')
  //  }
  //  removeBlock()
  //  changeLang()
  //})
  
  setActiveButton();
})

function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass)
  })
}

function removeBlock() {
  const russianQuestion = document.getElementById('russian_question');
  if (russianQuestion) {
    const urlParams = new URLSearchParams(window.location.search);
    const hideRussianQuestion = urlParams.get('hideRussianQuestion');

    if (hideRussianQuestion === 'true') {
      russianQuestion.style.display = 'none';
    } else {
      russianQuestion.style.display = 'block';
    }
  }
}


function setActiveButton() {
  currentLang = localStorage.getItem('language') || cheсkBrowserLanguage() || 'ru';

  switch (currentLang) {
    case 'ru':
      document.querySelector('[data-btn="ru"]').classList.add('lang-switcher__btn-active')
      break
    case 'en':
      document.querySelector('[data-btn="en"]').classList.add('lang-switcher__btn-active')
      break
    case 'ge':
      document.querySelector('[data-btn="ge"]').classList.add('lang-switcher__btn-active')
      break
    default:
      document.querySelector('[data-btn="ru"]').classList.add('lang-switcher__btn-active')
      break
  }
}
setActiveButton()

function cheсkBrowserLanguage() {
  const navLang = navigator.language.slice(0, 2).toLowerCase()
  const result = allLangs.some((elem) => {
    return elem === navLang
  })

  if (result) {
    return navLang
  }
}