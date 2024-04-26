<template>
  <div
    class="container d-flex flex-column justify-content-space-around align-items-center vh-100"
  >
    <div class="menu_title">
      <h1><b>Profil</b></h1>
    </div>

    <div class="shadow-box">
      <div class="d-flex flex-column profil-user w-50">
        <h1 class="align-self-start">Richard Susanto</h1>
        <p class="align-self-start">0123456789</p>

        <div class="d-flex flex-column gap-2">
          <label for="email" class="d-flex align-items-start">Email</label>
          <InputText
            class="input"
            id="email"
            disabled
            v-model="userEmail"
          ></InputText>
        </div>

        <div class="d-flex flex-column gap-2">
          <label for="program-studi" class="d-flex align-items-start"
            >Program Studi</label
          >
          <InputText
            class="input"
            id="program-studi"
            disabled
            v-model="userProgramStudi"
          ></InputText>
        </div>

        <div class="d-flex flex-column gap-2">
          <label for="jurusan" class="d-flex align-items-start">Jurusan</label>
          <InputText
            class="input"
            id="jurusan"
            disabled
            v-model="userJurusan"
          ></InputText>
        </div>
      </div>

      <div class="profil-buttons d-flex flex-column">
        <Button class="button" label="Edit Profil" />
        <Button class="button" label="Logout" severity="danger" />
      </div>
    </div>

    <MenuBar></MenuBar>
  </div>
</template>

<script setup>
import MenuBar from "./MenuBar.vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
</script>

<style>
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
  justify-content: space-between;
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
