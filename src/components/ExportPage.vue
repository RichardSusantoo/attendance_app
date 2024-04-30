<template>
  <div
    class="container d-flex flex-column justify-content-space-around align-items-center vh-100"
  >
    <div class="menu_title">
      <h1><b>Export</b></h1>
    </div>

    <div class="shadow-box">
      <div class="d-flex flex-column gap-2">
        <label for="periode" class="d-flex align-items-start">Periode</label>
        <Calendar
          id="periode"
          v-model="periode"
          selection-mode="range"
        ></Calendar>
      </div>
    </div>

    <div class="presensi-button mt-auto">
      <Button class="button">
        <span>Download</span>
      </Button>
    </div>

    <MenuBar />
  </div>
</template>

<script setup>
import Button from "primevue/button";
import MenuBar from "./MenuBar.vue";
import Calendar from "primevue/calendar";
import { ref } from "vue";

const periode = ref();
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

.shadow-box {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  padding: 1.5rem;
  background-color: white;
  box-shadow: -2px 8px 16px rgba(0, 0, 0, 0.15), 8px 0 16px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: 90%;
}
</style>
