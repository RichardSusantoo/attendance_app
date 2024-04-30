<template>
  <div class="menubar align-items-center mt-auto">
    <RouterLink to="/export">
      <i class="pi pi-file-export" style="color: white; font-size: 3rem" />
    </RouterLink>
    <RouterLink to="/presensi">
      <i class="pi pi-stop-circle" style="color: white; font-size: 3rem" />
    </RouterLink>
    <RouterLink to="/profil">
      <i class="pi pi-user" style="color: white; font-size: 3rem" />
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.menubar {
  display: flex;
  margin-bottom: 2vh;
  justify-content: space-around;
  gap: 1rem;
  padding: 0.5 rem;
  background-color: gray;
  border-radius: 10px;
  height: 10vh;
  width: 40%;
}
</style>
