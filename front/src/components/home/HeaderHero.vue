<!--====== HEADER PART START ======-->
<template>
  <header class="header-area">
  <div class="navbar-area">
    <div class="container relative">
      <div class="row">
        <div class="w-full">
          <nav class="flex items-center justify-between navbar navbar-expand-lg">
            <a class="mr-4 navbar-brand" href="index.html">
              <img src="assets/images/logo.svg" alt="Logo" class="w-40">
            </a>

            <div class="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none" id="navbarOne">
              <ul id="nav" class="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
              </ul>
            </div> <!-- navbar collapse -->
          </nav> <!-- navbar -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </div> <!-- navbar area -->

  <div id="home" class="header-hero" style="background-image: url(assets/images/banner-bg.svg)">
    <div class="container">
      <div class="justify-center row">
        <div class="w-full lg:w-2/3">
          <div class="pt-32 mb-12 text-center lg:pt-48 header-hero-content">
            <h2 class="mb-3 text-4xl font-bold text-white header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">Deck Place</h2>
            <p class="mb-8 text-white text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">デュエル・マスターズ プレイス専用<br />デッキ保管庫(※非公式)</p>
            <LoginButton />
          </div> <!-- header hero content -->
        </div>
      </div> <!-- row -->
      <div class="justify-center row">
        <div class="w-full lg:w-2/3">
          <div class="text-center header-hero-image wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
            <img src="assets/images/header-hero.png" alt="hero">
          </div> <!-- header hero image -->
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
    <div id="particles-1" class="particles"></div>
  </div> <!-- header hero -->
  </header>
</template>
<!--====== HEADER PART ENDS ======-->
<script>
import LoginButton from "@/components/LoginButton";
export default {
  components: {LoginButton}
}
</script>