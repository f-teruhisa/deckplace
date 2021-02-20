<template>
  <div class="login">
    <div class="container relative">
      <div class="row">
        <div class="w-full lg:">
          <div class="pt-32 mb-12 text-center lg:pt-48 header-hero-content">
            <h2
              class="mb-3 text-2xl text-black header-title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              ログイン
            </h2>
            <form>
              <div>{{ this.message }}</div>
              <input
                type="email"
                class="w-full py-4 pl-6 pr-40 mb-3 duration-300 border-2 rounded focus:border-theme-color focus:outline-none"
                v-model="email"
                placeholder="メールアドレス"
              />
              <input
                type="password"
                class="w-full py-4 pl-6 pr-40 mb-3 duration-300 border-2 rounded focus:border-theme-color focus:outline-none"
                v-model="password"
                placeholder="パスワード"
              />
              <button
                class="main-btn gradient-btn gradient-btn-2 mb-3 wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="1.1s"
                v-on:click="login()"
              >
                ログイン
              </button>
            </form>
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "../../components/BackButton";

export default {
  components: {
    BackButton
  }
};
</script>
