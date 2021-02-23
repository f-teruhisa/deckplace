<template>
  <div class="login">
    <div class="container relative">
      <div class="row">
        <div class="w-full lg:">
          <div class="pt-32 mb-12 text-center lg:pt-48 header-hero-content">
            <img
              src="assets/images/google_signin_button.png"
              class="m-auto mb-3"
              data-wow-duration="1.3s"
              data-wow-delay="1.1s"
              v-on:click="login()"
            />
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "../../components/BackButton";
import axios from "../../util/axios";

export default {
  components: {
    BackButton
  },
  name: "logIn",
  methods: {
    async login() {
      const result = await axios
        .post("/api/v1/users/auth/google_oauth2", {})
        .catch(e => {
          console.error(e);
        });
      if (result.data.state) {
        // Redirect with result
        this.$router.push("/home");
      }
    }
  }
};
</script>
