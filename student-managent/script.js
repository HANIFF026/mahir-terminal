// 1. Ambil data dari LocalStorage
let students = JSON.parse(localStorage.getItem(`hsi_students`)) || [];

// 2. Deklarasi DOM Utama
const studentForm = document.getElementById(`studentForm`);
const studentNameInput = document.getElementById(`studentName`);
const studentScoreInput = document.getElementById(`studentScore`);
const formTitle = document.getElementById(`formTitle`);
const btnSubmit = document.getElementById(`btnSubmit`);
const btnCancel = document.getElementById(`btnCancel`);
const totalStudentsEl = document.getElementById('totalStudents');
const averageScoreEl = document.getElementById('averageScore');
const alertMessage = document.getElementById('alertMessage');
const editIndexInput = document.getElementById('editIndex');
const studentList = document.getElementById('studentList');

// 3. Deklarasi DOM Custom Modal Delete
const customModal = document.getElementById('customModal');
const modalMessage = document.getElementById('modalMessage');
const btnCancelDelete = document.getElementById('btnCancelDelete');
const btnConfirmDelete = document.getElementById('btnConfirmDelete');

let deleteIndexTarget = null; // Menyimpan indeks siswa yang akan dihapus

// Fungsi Notifikasi Toast Sederhana
function showAlert(message) {
    alertMessage.textContent = message;
    alertMessage.classList.remove(`hidden`);
    setTimeout(() => {
        alertMessage.classList.add(`hidden`);
    }, 3000);
} 

// Menyimpan ke LocalStorage
function saveToLocalStorage() {
   localStorage.setItem(`hsi_students`, JSON.stringify(students));
}

// Render Tampilan List Siswa (Optimasi DocumentFragment untuk efisiensi CPU)
function renderUI() {
  studentList.innerHTML = '';

  if (students.length === 0) {
    studentList.innerHTML = '<p style="text-align:center; color:#8e8e93; padding:12px;">Belum ada data siswa.</p>';
  } else {
    const fragment = document.createDocumentFragment();
    students.forEach((student, index) => {
      const item = document.createElement('div');
      item.className = 'student-item';
      item.innerHTML = `
        <div class="student-info">
          <strong>${student.name}</strong>
          <span>Nilai: ${student.score}</span>
        </div>
        <div class="student-actions">
          <button class="btn-edit" onclick="editStudent(${index})">Edit</button>
          <button class="btn-delete" onclick="deleteStudent(${index})">Hapus</button>
        </div>
      `;
      fragment.appendChild(item);
    });
    studentList.appendChild(fragment);
  }

  updateStats();
}

// Update Statistik
function updateStats() {
  const total = students.length;
  totalStudentsEl.textContent = total;

  if (total === 0) {
    averageScoreEl.textContent = '0';
    return;
  }

  const sum = students.reduce((acc, curr) => acc + Number(curr.score), 0);
  const avg = (sum / total).toFixed(1);
  averageScoreEl.textContent = avg;
}

// Reset Form Tambah / Edit
function resetForm() {
  studentForm.reset();
  editIndexInput.value = '';
  formTitle.textContent = '➕ Tambah Siswa';
  btnSubmit.textContent = '➕ Tambah Siswa';
  btnCancel.classList.add('hidden');
}

// Event Submit Form (Tambah & Edit)
studentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = studentNameInput.value.trim();
  const score = parseInt(studentScoreInput.value);
  const editIndex = editIndexInput.value;

  if (editIndex === '') {
    students.push({ name, score });
    showAlert('✅ Data siswa berhasil ditambahkan!');
  } else {
    students[editIndex] = { name, score };
    showAlert('🔄 Data siswa berhasil diperbarui!');
  }

  saveToLocalStorage();
  renderUI();
  resetForm();
});

// Fungsi Persiapan Edit
window.editStudent = function(index) {
  const student = students[index];
  studentNameInput.value = student.name;
  studentScoreInput.value = student.score;
  editIndexInput.value = index;

  formTitle.textContent = '✏️ Edit Siswa';
  btnSubmit.textContent = '💾 Simpan Perubahan';
  btnCancel.classList.remove('hidden');
};

btnCancel.addEventListener('click', resetForm);

// --- LOGIKA MODAL DELETE SMOOTH & LIGHTWEIGHT ---

// Buka Modal Hapus dengan 2 Frame Rendering agar transisi CSS berjalan mulus
window.deleteStudent = function(index) {
  deleteIndexTarget = index;
  modalMessage.textContent = `Apakah kamu yakin ingin menghapus data "${students[index].name}"?`;
  
  // Tampilkan elemen terlebih dahulu
  customModal.style.display = 'flex';
  
  // Berikan 1 frame jeda agar browser sempat membaca gaya display sebelum memicu kelas active
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      customModal.classList.add('active');
    });
  });
};

// Tutup Modal dengan penundaan sesuai durasi transisi CSS (200ms)
function closeModal() {
  customModal.classList.remove('active');
  
  // Tunggu transisi fade-out selesai sebelum mereset display
  setTimeout(() => {
    customModal.style.display = 'none';
    deleteIndexTarget = null;
  }, 200);
}

// Event Tombol Batal pada Modal
btnCancelDelete.addEventListener('click', closeModal);

// Event Tombol Eksekusi Hapus pada Modal
btnConfirmDelete.addEventListener('click', () => {
  if (deleteIndexTarget !== null) {
    students.splice(deleteIndexTarget, 1);
    saveToLocalStorage();
    renderUI();
    showAlert('🗑️ Data siswa berhasil dihapus!');
    closeModal();
  }
});

// Render awal aplikasi
renderUI();