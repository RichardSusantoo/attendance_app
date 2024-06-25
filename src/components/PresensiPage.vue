<template>
  <div
    class="container d-flex flex-column justify-content-space-around align-items-center vh-100"
  >
    <div class="menu_title">
      <h1><b>Presensi</b></h1>
    </div>

    <div class="shadow-box" v-if="data">
      <div class="kelas1">
        <h1 v-if="data[0]?.class_name">{{ data[0]?.class_name }}</h1>
        <p v-else>No Class Today</p>
        <h2 v-if="data[0]?.class_time">{{ data[0]?.class_time }}</h2>
        <p v-if="data.length > 0">
          Attendance Status :
          <span
            :class="{
              red: !isMarked(data[0]?.status),
              green: isMarked(data[0]?.status),
            }"
            >{{ data[0]?.status }}</span
          >
        </p>
      </div>

      <div class="kelas2">
        <h1 v-if="data[1]?.class_name">{{ data[1]?.class_name }}</h1>
        <p v-else>No Class Today</p>
        <h2 v-if="data[1]?.class_time">{{ data[1]?.class_time }}</h2>

        <p v-if="data.length > 1">
          Attendance Status :
          <span
            :class="{
              red: !isMarked(data[1]?.status),
              green: isMarked(data[1]?.status),
            }"
            >{{ data[1]?.status }}</span
          >
        </p>
      </div>
    </div>

    <div class="presensi-button mt-auto">
      <Button @click="markAttendance">
        <span>Presensi</span>
      </Button>
    </div>

    <MenuBar />
  </div>
</template>

<script setup>
import Button from "primevue/button";
import MenuBar from "./MenuBar.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import router from "@/router";

onMounted(() => {
  getJadwal();
  const userData = localStorage.getItem("userData");
  if (userData) {
    router.push("/presensi");
  } else {
    router.push("/");
  }
});

const data = ref();
const userData = JSON.parse(localStorage.getItem("userData"));

const userNim = userData?.nim;

const markAttendance = () => {
  const path = "http://127.0.0.1:5000/mark-attendance";
  axios
    .get(path)
    .then((response) => {
      alert(response.data);
      getJadwal();
    })
    .catch((err) => {
      console.log(err);
    });
};

const getJadwal = async () => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/jadwalkelas?nim=${userNim}`
    );
    data.value = res.data.data;
  } catch (err) {
    console.log(err);
    console.error("Error fetching class schedule:", err);
  }
};

const isMarked = (status) => {
  return status === "Marked";
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

.not-marked {
  background-color: #ffcccc; /* Red */
}

.marked {
  background-color: #ccffcc; /* Green */
}

.red {
  color: #ff0000; /* Red */
}

.green {
  color: #008000; /* Green */
}
</style>
