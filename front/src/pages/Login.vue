<template>
  <div>
    <Header />
    <Form />
  </div>
</template>

<script>
import Form from "../components/login/Form";
import Header from "../components/Header"

export default {
  components: {
    Form,
    Header
  }
};
</script>