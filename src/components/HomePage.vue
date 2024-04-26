<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
    "
  >
    <h1>Hadeer</h1>

    <div style="display: flex; flex-direction: column">
      <Button
        label="Login"
        style="margin-bottom: 16px"
        @click="goToLogin"
      ></Button>
      <RouterLink to="/register"
        >Don't have an account? Register Now</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import Button from "primevue/button";

const goToLogin = () => {
  router.push("/login");
};
</script>
