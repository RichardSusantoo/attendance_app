<template>
  <div
    class="container d-flex justify-content-around align-items-center vh-100"
  >
    <div class="w-50">
      <h1>Login</h1>
    </div>

    <div class="shadow-box">
      <div class="d-flex flex-column gap-2">
        <label for="email" class="d-flex align-items-start">Email</label>
        <InputText class="input" id="email" v-model="emailValue"></InputText>
      </div>

      <div class="d-flex flex-column gap-2">
        <label for="password" class="d-flex align-items-start">Password</label>
        <InputText
          class="input"
          id="password"
          v-model="passwordValue"
        ></InputText>
      </div>

      <div class="d-flex justify-content-end gap-2">
        <Button
          class="button"
          label="Cancel"
          severity="danger"
          @click="goBack"
        ></Button>
        <Button class="button" label="Login" @click="verifyLogin"></Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const goBack = () => {
  router.push("/");
};

const verifyLogin = () => {
  router.push("/presensi");
};
</script>

<style>
.input {
  border-radius: 20px;
}
.button {
  border-radius: 20px;
}

.shadow-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: white;
  box-shadow: -2px 8px 16px rgba(0, 0, 0, 0.15), 8px 0 16px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: 40%;
}
</style>
