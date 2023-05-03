    <?php 
    /*
    Template Name: Хобби группа
    */
    get_header(); ?>
    <!-- Хобби-группа -->
    <section class="section section-hobby">
      <div class="container">
        <h2 class="section-header">Найти хобби в новом для себя городе? Запросто!</h2>
        <article class="hobby-text">
          <p class="about-text__item">
            В ноябре 2022 мы запустили новый проект — любительскую группу для взрослых фехтовальщиков.
          </p>
          <p class="about-text__item">
            Приглашаем всех желающих присоединиться к занятиям в группе начинающих взрослых. Вид оружия — шпага.
          </p>
          <ul class="benefits__list">
            <li class="benefits__item">Замечательный интернациональный коллектив.</li>
            <li class="benefits__item">Любой возраст. Любой уровень.</li>
            <li class="benefits__item">Групповые занятия.</li>
          </ul>
          <p class="about-text__item">
            Стоимость абонемента — <strong>200 GEL/месяц</strong>. Тренировки проводятся три раза в неделю.
          </p>
          <p class="about-text__item">
            Все тренировки начинаются с разминки и заканчиваются кул-дауном. Мы следим за здоровьем и комфортом наших
            учеников.
          </p>
        </article>
        <article class="hobby-text">
          <h2 class="section-header">
            Комплексный подход. <br />
            В программе:
          </h2>
          <ul class="benefits__list">
            <li class="benefits__item">Передвижения</li>
            <li class="benefits__item">Работа на мишенях.</li>
            <li class="benefits__item">Парные упражнения.</li>
            <li class="benefits__item">Теоретические занятия (видеоанализ).</li>
            <li class="benefits__item">Конечно же, фехтование. Много-много спарринга!</li>
            <li class="benefits__item">Вы сможете участвовать в настоящих соревнованиях!</li>
          </ul>
        </article>

        <h2 class="personal-prompt">Также вы можете записаться на индивидуальные занятия</h2>
      </div>
      <div class="submit__personal">
        <a href="./personal.html"
          ><button class="submit-btn submit-btn-personal" type="submit">Индивидуальные уроки</button></a
        >
      </div>
    </section>

    <!-- Слайдер с фото -->
    <section class="section section-slider">
      <div class="container">
        <h2 class="section-header">Фото нашего клуба</h2>
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/images/Hobby-group/1.jpg" alt="fencers_photo" class="slider__img">
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/Hobby-group/2.jpg" alt="fencers_photo" class="slider__img">
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/Hobby-group/3.jpg" alt="fencers_photo" class="slider__img">
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/Hobby-group/4.jpg" alt="fencers_photo" class="slider__img">
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/Hobby-group/5.jpg" alt="fencers_photo" class="slider__img">
            </div>
            <div class="swiper-slide">
              <img src="../assets/images/Hobby-group/6.jpg" alt="fencers_photo" class="slider__img">
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container container-footer">
        <div class="map">
          <iframe
            class="map_snippet"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47636.27978741548!2d44.692631137967716!3d41.73632300140282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044733160915359%3A0xe361bca9b8c1ca2e!2zRmVuY2luZyBDbHViIEJBU0EgLSDhg6Thg5Dhg6Dhg5jhg5nhg5Dhg53hg5Hhg5jhg6Eg4YOQ4YOZ4YOQ4YOT4YOU4YOb4YOY4YOQIOGDkeGDkOGDoeGDkA!5e0!3m2!1sru!2sge!4v1679406975912!5m2!1sru!2sge"
            width="300"
            height="300"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div class="address">
          <h3 class="footer__title">Адрес</h3>
          <p>Arena 2, 6 University St, Tbilisi, Georgia</p>
          <img class="footer__logo" src="../assets/images/fencing-symbol-svgrepo-com.svg" alt="" />
        </div>

        <div class="footer-contacts">
          <h3 class="footer__title">Связаться с нами</h3>
          <div class="footer-contacts__item">
            <a class="footer-contacts__link" href="tel:+995-597-757-512">
              <i class="fa-solid fa-phone"></i>
              <span class="footer-contacts__title">+995-597-757-512</span>
            </a>
          </div>
          <div class="footer-contacts__item">
            <a class="footer-contacts__link" href="https://mail.google.com/mail" target="_blank">
              <i class="fa-solid fa-envelope"></i>
              <span class="footer-contacts__title">E-mail</span>
            </a>
          </div>
          <div class="footer-contacts__item">
            <a class="footer-contacts__link" href="https://www.facebook.com/" target="_blank">
              <i class="fa-brands fa-facebook-f"></i>
              <span class="footer-contacts__title">Facebook</span>
            </a>
          </div>
          <div class="footer-contacts__item">
            <a class="footer-contacts__link" href="https://t.me/beergamottt" target="_blank">
              <i class="fa-solid fa-paper-plane"></i>
              <span class="footer-contacts__title">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>

    
    <script src="../assets/swiper/swiper-bundle.min.js"></script>
    <script src="../js/main.js"></script>
    <script src="https://kit.fontawesome.com/a6979ee88b.js" crossorigin="anonymous"></script>
  </body>
</html>
