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
    <div>
      <img
        src="../assets/hadeer-high-resolution-logo-transparent.png"
        width="200"
        class="mb-4"
      />
    </div>

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
import { onMounted } from "vue";

onMounted(() => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    router.push("/presensi");
  }
});

const goToLogin = () => {
  router.push("/login");
};
</script>
