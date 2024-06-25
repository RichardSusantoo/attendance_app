<template>
  <div
    class="container d-flex flex-column justify-content-space-around align-items-center vh-100"
  >
    <div class="menu_title">
      <h1><b>Export</b></h1>
    </div>

    <div class="shadow-box">
      <div class="d-flex flex-column gap-2">
        <label for="periode" class="d-flex align-items-start">Nama Kelas</label>
        <Dropdown
          v-model="selectedClass"
          :options="classNames"
          optionLabel="class_name"
          style="width: 20rem"
        ></Dropdown>
      </div>
    </div>

    <div class="presensi-button mt-auto">
      <Button class="button" @click="downloadExcel">
        <span>Download</span>
      </Button>
    </div>

    <MenuBar />
  </div>
</template>

<script setup>
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import MenuBar from "./MenuBar.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import * as XLSX from "xlsx";
import router from "@/router";

onMounted(() => {
  getClassNames();
  const userData = localStorage.getItem("userData");
  if (userData) {
    router.push("/presensi");
  } else {
    router.push("/");
  }
});

const exportToExcel = async (options) => {
  const heading = [options.headers];
  const workbook = XLSX.utils.book_new();
  const workSheet = XLSX.utils.json_to_sheet([]);
  XLSX.utils.sheet_add_aoa(workSheet, heading);

  XLSX.utils.sheet_add_json(workSheet, options.data, {
    origin: "A2",
    skipHeader: true,
  });
  XLSX.utils.book_append_sheet(workbook, workSheet, "Sheet1");
  const timestamps = +new Date();
  XLSX.writeFile(workbook, `${options.filename}_${timestamps}.xlsx`);
};

const selectedClass = ref();
const classNames = ref();
const userData = JSON.parse(localStorage.getItem("userData"));

const userNim = userData?.nim;

const getClassNames = async () => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:5000/getclassnames?nim=${userNim}`
    );
    classNames.value = res.data.data;
  } catch (err) {
    console.log(err);
    console.error("Error fetching class schedule:", err);
  }
};

const downloadExcel = async () => {
  try {
    const res = await axios.get(
      `http://localhost:5000/fetch_attendance?nim=${userNim}&class_name=${selectedClass.value.class_name}`
    );
    const data = res.data.data.map((data) => {
      return {
        name: data.fullname,
        nim: data.nim,
        className: data.class_name,
        attendanceDate: data.attendance_date,
      };
    });

    exportToExcel({
      headers: ["Name", "NIM", "Class Name", "Attendance Date"],
      data,
      filename: "attendance-data",
    });
  } catch (err) {
    console.log(err);
    console.error("Error fetching attendance data:", err);
  }
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
</style>
