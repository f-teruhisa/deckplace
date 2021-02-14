<template>
  <div>
    <PreLoader />
    <HeaderHero />
    <Features />
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
import PreLoader from "../components/home/PreLoader";
import HeaderHero from "../components/home/HeaderHero";
import Features from "../components/home/Feature";
import Footer from "../components/home/Footer";
import BackToTop from "../components/home/BackToTop";

export default {
  components: {
    PreLoader,
    HeaderHero,
    Features,
    Footer,
    BackToTop
  }
};
</script>
