console.log("===========================");
console.log(" HSI STUDENT MANAGENT ");
console.log("Student CRUD Operations");
console.log("===========================");
let students = []; //nampung data
localStorage.setItem(`total siswa`, 70);
localStorage.setItem(`nama kelas`, `xii coders 1`);
const namaLKelas = localStorage.getItem(`nama kelas`);
const totalSiswa = localStorage.getItem(`total siswa`);
console.log(`Nama Kelas: ${namaLKelas}`);
console.log(`Total Siswa: ${totalSiswa}`);

// localStorage.clear(); menghapus semua data di localStorage
localStorage.removeItem(`total siswa`);
localStorage.removeItem(`nama kelas`);
console.log(`localStorage.removeItem('total siswa')`);
console.log(`localStorage.removeItem('nama kelas')`);

// data budi
// const siswaBudi = {
//   nama: `Budi`,
//   score: 89,
// };
// students.push(siswaBudi);

// const siswaAni = {
//   nama: `ani`,
//   score: 99,
// };
// students.push(siswaAni);
// console.log({ students });

// // JSON.stringify() = mengubah objeck menjadi string
// const studentsdata = JSON.stringify(students);
// localStorage.setItem(`hsiStudents`, studentsdata);

// .clear() dan set students = [] utk test ujicoba
// localStorage.clear();
// students = [];
// console.log({students});
const studentsList = document.getElementById(`studentList`);
const studentsForm = document.getElementById(`studentForm`);
const studentsName = document.getElementById(`studentName`);
const studentsScore = document.getElementById(`studentScore`);
studentsForm.addEventListener(`submit`, (e) => {
  e.preventDefault(); // Mencegah form reload

  const newStudent = {
    nama: studentsName.value,
    score: studentsScore.value
  };

  students.push(newStudent);
  
  // Perbaikan: Pakai nama variabel baru (misal: studentData)
  // json.parse() = mengubah string menjadi object
  // maksud `|| []` adl jika data localstorage kosong,maka set students = []
  const studentData = JSON.stringify(students) || [];
  localStorage.setItem(`hsiStudents`, studentData);
  
  // Reset input form setelah submit
  studentsName.value = '';
  studentsScore.value = '';

  generatesStudentsList();
});

function generatesStudentsList() {
  // Perbaikan: Ambil data dari localStorage dan simpan ke variabel students
  const storedData = localStorage.getItem(`hsiStudents`);
  if (storedData) {
    students = JSON.parse(storedData);
  }

  studentsList.innerHTML = ``; // Reset isi HTML

  if (students.length === 0) {
    studentsList.innerHTML = `<p>data masih kosong</p>`;
  } else {
    console.log(`generate data siswa ke list`);
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      studentsList.innerHTML += `
        <div class="student-item">
          <div class="student-name">
              <span class="student-number"> ${i + 1}</span>
              ${student.nama}
          </div>
          <div class="score">${student.score}</div>
          <div class="action-buttons">
              <button class="edit-btn" type="button">✏️ Ubah</button>
              <button class="delete-btn" type="button">🗑️ Hapus</button>
          </div>
        </div>
      `;
    }
  }
}

// Load awal saat halaman dibuka
generatesStudentsList();  