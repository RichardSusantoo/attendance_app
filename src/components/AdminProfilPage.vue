<template>
  <div
    class="container d-flex flex-column justify-content-space-around align-items-center vh-100"
  >
    <div class="menu_title">
      <h1><b>Profil</b></h1>
    </div>

    <div class="shadow-box">
      <div class="d-flex flex-column profil-user w-50">
        <h1 class="align-self-start">{{ fullname }}</h1>
        <p class="align-self-start">{{ userNim }}</p>

        <div class="d-flex flex-column gap-2">
          <label for="email" class="d-flex align-items-start">Email</label>
          <InputText
            class="input"
            id="email"
            disabled
            v-model="userEmail"
          ></InputText>
        </div>
      </div>

      <div class="profil-buttons d-flex flex-column">
        <Button
          class="button"
          label="Logout"
          severity="danger"
          @click="logout"
        />
      </div>
    </div>

    <AdminMenuBar></AdminMenuBar>
  </div>
</template>

<script setup>
import AdminMenuBar from "./AdminMenuBar.vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import axios from "axios";
import { ref } from "vue";
import { onMounted } from "vue";
import router from "@/router";

onMounted(() => {
  getProfil();
  const userData = localStorage.getItem("userData");
  if (userData) {
    router.push("/admin/profil");
  } else {
    router.push("/");
  }
});

const userData = JSON.parse(localStorage.getItem("userData"));

const fullname = userData?.fullname;
const userNim = userData?.nim;
const userEmail = userData?.email;

const profilData = ref();

const logout = () => {
  localStorage.removeItem("userData");
  router.push("/admin");
};

const getProfil = () => {
  axios
    .get(`http://127.0.0.1:5000/users?nim=${userNim}`)
    .then((resp) => {
      if (resp.data) {
        profilData.value = resp.data[0];

        console.log(profilData.value);
      } else {
        console.error(resp.data);
        alert("Invalid user data");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Error fetching user data");
    });
};
</script>

<style scoped>
.input {
  border-radius: 20px;
}
.button {
  border-radius: 20px;
}

.menu_title {
  margin-bottom: 15vh;
}

.profil-buttons {
  justify-content: end;
}

.shadow-box {
  display: flex;
  justify-content: space-between !important;
  gap: 1rem;
  padding: 1.5rem;
  background-color: white;
  box-shadow: -2px 8px 16px rgba(0, 0, 0, 0.15), 8px 0 16px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: 90%;
}
</style>
