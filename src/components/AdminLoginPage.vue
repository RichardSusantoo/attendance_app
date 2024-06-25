<template>
  <div
    class="container d-flex justify-content-around align-items-center vh-100"
  >
    <div class="w-50">
      <div>
        <img
          src="../assets/hadeer-high-resolution-logo-transparent.png"
          width="200"
          class="mb-4"
        />
      </div>
      <h1>Admin Login</h1>
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
          type="password"
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
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { onMounted } from "vue";

onMounted(() => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    router.push("/admin/profil");
  }
});

const emailValue = ref();
const passwordValue = ref();

async function verifyLogin() {
  try {
    const response = await fetch("http://127.0.0.1:5000/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue.value,
        password: passwordValue.value,
      }),
    });

    const data = await response.json();

    if (data.status === "success") {
      localStorage.setItem("userData", JSON.stringify(data.user));
      router.push("/admin/profil");
    } else {
      console.log(data);
      console.log(passwordValue.value);
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    console.log(passwordValue.value);
  }
}

const goBack = () => {
  router.push("/admin");
};
</script>

<style scoped>
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
