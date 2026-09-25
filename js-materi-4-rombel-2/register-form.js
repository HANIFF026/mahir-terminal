console.log('>>>> JS EVENT FORMS <<<<');
const nameInput = document.getElementById('nameInput');
const nameInfo = document.getElementById('nameInfo');
// konten area preview
const previewName = document.getElementById('previewName');
const previewClass = document.getElementById('previewClass');
const previewStatus = document.getElementById('previewStatus');
const previewInterest = document.getElementById('previewInterest');
const previewReason = document.getElementById('previewReason');
const message = document.getElementById('message');

console.log(nameInput);
nameInput.addEventListener('input', function() {
    const name = nameInput.value; // ambil inputan user ketik
    console.log(`User menginput nama: ${name}`);
    nameInfo.textContent = `窓 Halo, ${name}`;
    previewName.textContent = name;
});

const classSelect = document.getElementById('classSelect');
console.log(classSelect);
classSelect.addEventListener('change', function() {
    const className = classSelect.value;
    console.log(`User memilih kelas: ${className}`);
    previewClass.textContent = className;
});

const agreementCheckbox = document.getElementById('agreement');
console.log(agreementCheckbox);
agreementCheckbox.addEventListener('change', function() {
    const isChecked = agreementCheckbox.checked; // ambil status checknya
    console.log({ isChecked }); // boolean
    previewStatus.textContent = isChecked ? 'Siap' : 'Belum Siap';
    // if (isChecked) {
    //     previewStatus.textContent = 'Siap';
    // } else {
    //     previewStatus.textContent = 'Belum Siap';
    // }
});

// DOMContentLoaded adalah event yang dijalankan setelah seluruh element HTML terload.
// Umumnya digunakan untuk menginisialisasi element-element dan event handler.
document.addEventListener('DOMContentLoaded', function() {
    alert('Welcome to Coders Club!');
});

const reasonInput = document.getElementById('reasonInput');
console.log(reasonInput);
reasonInput.addEventListener('keydown', function(e) {
    console.log(`User menginput key: ${e.key}`);
    const reason = reasonInput.value;
    previewReason.textContent = reason;
    const characterCount = document.getElementById('characterCount');
    const totalCounter = reason.length;
    characterCount.textContent = totalCounter;
    // Logika perubahan warna indicator
    if (totalCounter >= 90) {
      characterCount.style.color = "red"; // Kritis (Sisa 10 karakter)
    } else if (totalCounter >= 70) {
      characterCount.style.color = "orange"; // Peringatan (Sisa 30 karakter)
    } else {
      characterCount.style.color = "inherit"; // Normal (Kembali ke warna asli bawaan CSS)
    }
});

const registrationForm = document.getElementById(`registrationForm`);
const resetButton = document.getElementById(`resetButton`);
resetButton.addEventListener(`click`, function(){
    registrationForm.reset(); //reset seluruh inputan
    previewName.textContent = 'Belum diisi';
    previewClass.textContent = 'Belum dipilih';
    previewInterest.textContent = 'Belum dipilih';
    previewReason.textContent = 'Belum ada alasan...';
    previewStatus.textContent = '⏳ Belum siap dikirim';
    message.textContent = '👋 Silakan isi form pendaftaran.';
});

// event submit adl event yg  dijalankan  form yg blm submt
registrationForm.addEventListener(`submit`, function(e){
    e.preventDefault(); // mencegah form submit secara default
    const confirmDialog = confirm(`apakah anda yakin melanjutkan`);
    if(!confirmDialog)  {
        // jika user tdk menkonfirmasi
        console.log(`user membatalkan pendaftaran`);
        return;//menghentikan proses submit
        
    }
    // jika user mengkonfirmasi
        console.log(`user mengkonfirmasi pendaftaran`);
    const successMessage = document.getElementById(`successMessage`);
    successMessage.style.display = `block`;
    registrationForm.style.display = `none`;
})