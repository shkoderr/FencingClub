<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://kit.fontawesome.com/a6979ee88b.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="css/style.css" />
    <title>BASA Fencing Club</title>
    <?php wp_head(); ?>
  </head>
  <body>
    <!-- Логотип и навигация по сайту -->
    <header class="header">
      <img class="header__img" src="assets/images/pexels-artem-podrez-5941996.jpg" alt="Изображение фехтовальщиков">
      <div class="container">
        <div class="header__inner">
          <div class="logo">
            <a href="<?= home_url(); ?>">
              <?php the_custom_logo(); ?>
            </a>
            <h2 class="club_name">Фехтовальный клуб "BASA"</h2>
          </div>
          <nav class="menu">
            <a class="nav__link" href="html/about.html">О нас</a>
            <a class="nav__link" href="html/trial-session.html">Пробное занятие</a>
            <a class="nav__link" href="html/hobby-group.html">Хобби группа</a>
          </nav>
        </div>
      </div>
    </header>

       <!-- Запись на занятия -->
    <section class="section section-sign">
      <div class="container container-sign">
        <a href="https://mail.google.com/mail" target="_blank"
          ><button class="submit-btn" type="submit">Записаться на занятие <br> <strong class="price">50 &#8382</strong></button></a
        >

        <div class="contacts">
          <a class="contacts__item" href="tel:+995-597-757-512">
            <i class="fa-solid fa-phone"></i>
            <span>+995-597-757-512</span>
          </a>
          <a class="contacts__item" href="https://mail.google.com/mail" target="_blank">
            <i class="fa-solid fa-envelope"></i>
            <span>Почта</span>
          </a>
          <a class="contacts__item" href="https://www.facebook.com/" target="_blank">
            <i class="fa-brands fa-facebook-f"></i>
            <span>Facebook</span>
          </a>
          <a class="contacts__item" href="https://t.me/beergamottt" target="_blank">
            <i class="fa-solid fa-paper-plane"></i>
            <span>Telegram</span>
          </a>
        </div>
      </div>
    </section>