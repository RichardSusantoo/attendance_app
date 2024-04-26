<template>
  <div
    class="container d-flex justify-content-around align-items-center vh-100"
  >
    <div class="w-50">
      <h1>Register</h1>
    </div>

    <div class="shadow-box">
      <div class="d-flex flex-column gap-2">
        <label for="nama" class="d-flex align-items-start">Nama</label>
        <InputText class="input" id="name" v-model="namaValue"></InputText>
      </div>

      <div class="d-flex flex-column gap-2">
        <label for="nim" class="d-flex align-items-start">NIM</label>
        <InputText class="input" id="nim" v-model="nimValue"></InputText>
      </div>

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

      <div class="d-flex justify-content-flex-start">
        <div class="d-flex flex-column">
          <label for="scan">Deteksi Wajah</label>
          <Button></Button>
        </div>
      </div>

      <div class="d-flex justify-content-end gap-2">
        <Button
          class="button"
          label="Cancel"
          severity="danger"
          @click="goBack"
        ></Button>
        <Button class="button" label="Submit"></Button>
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
