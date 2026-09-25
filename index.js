// tugas harian

// DATA 
const studentName = "aHMaD FAuZaN";
const ageText = "17 tahun";
const scoreText = "85.566"; // gunakan titik untuk desimal
const registrationText = "21-08-2026";

// CLEAN THE NAME
const words = studentName.trim().toLowerCase().split(" ");
const cleanWords = [];

// Hapus titik koma di ujung for, dan ganti 'o' jadi '0'
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
        const formattedWord = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
        cleanWords.push(formattedWord);
    }
}
const cleanName = cleanWords.join(" ");

// buat username (ahmad.fauzi)
const username = cleanName.toLowerCase().split(" ").join(".");

// part 2 analyze name
const containsAhmad = cleanName.includes("Ahmad");
const first5Chars = cleanName.slice(0, 5);
const replacedName = cleanName.replace("Ahmad", "Hanif");

// 🧩 PART 3 — 🎂 Process the Age
const age = parseInt(ageText);
const currentYear = new Date().getFullYear(); // Y kapital
const birthYear = currentYear - age;

// 🧩 PART 4 — 📊 Process the Score
// ==========================================
const score = parseFloat(scoreText);
const formattedScore = score.toFixed(2);
const roundScore = Math.round(score);
const floorScore = Math.floor(score);
const ceilScore = Math.ceil(score);

// ==========================================
// 🧩 PART 5 — 🏆 Determine the Grade
// ==========================================
let grade = "";
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "E";
}

// ==========================================
// 🧩 PART 6 — 📅 Process Registration Date
// ==========================================
const regParts = registrationText.split("-");
const regDay = Number(regParts[0]);
const regMonth = Number(regParts[1]);
const regYear = Number(regParts[2]);

// ==========================================
// 🧩 PART 7 & 8 — ⏰ Date & Time + Formatter
// ==========================================
const now = new Date();
const nowYear = now.getFullYear();
const nowMonth = now.getMonth() + 1;
const nowDate = now.getDate();
const nowDay = now.getDay();
const nowHours = String(now.getHours()).padStart(2, "0");
const nowMinutes = String(now.getMinutes()).padStart(2, "0");
const currentTimeFormatted = `${nowHours}:${nowMinutes}`;

// Function Formatter Date (DD/MM/YYYY)
function formatDate(date) {
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const y = String(date.getFullYear());
    return `${d}/${m}/${y}`;
}

const reportDate = formatDate(now);
const regDateFormatted = `${String(regDay).padStart(2, "0")}/${String(regMonth).padStart(2, "0")}/${regYear}`;

// ==========================================
// 🧩 PART 9 — 🎲 Lucky Dice
// ==========================================
const dice = Math.floor(Math.random() * 6) + 1;
let diceResult = "";
if (dice === 6) {
    diceResult = "🔥 JACKPOT!";
} else if (dice === 1) {
    diceResult = "💀 BAD LUCK!";
} else {
    diceResult = "😎 GOOD LUCK!";
}

// ==========================================
// ⭐ BONUS KREATIVITAS (+5 POIN)
// ==========================================
// 1. Generate Email Siswa Otomatis
const studentEmail = `${username}@student.hsi.id`;

// 2. Status Kelulusan
const statusLulus = score >= 70 ? "✅ LULUS" : "❌ BELUM LULUS";

// ==========================================
// 🧩 PART 10 — 🖥️ FINAL REPORT
// ==========================================
console.log("╔════════════════════════════════════╗");
console.log("║      🎓 STUDENT DATA PROCESSOR     ║");
console.log("╚════════════════════════════════════╝");

console.log("👤 STUDENT");
console.log("────────────────────────────────────");
console.log(`Original Name : "${studentName}"`);
console.log(`Clean Name    : ${cleanName}`);
console.log(`Username      : ${username}`);
console.log(`Email (Bonus) : ${studentEmail}`);

console.log("\n🔎 NAME ANALYSIS");
console.log("────────────────────────────────────");
console.log(`Contains Ahmad : ${containsAhmad}`);
console.log(`First 5 chars  : ${first5Chars}`);
console.log(`Replacement    : ${replacedName}`);

console.log("\n🎂 AGE");
console.log("────────────────────────────────────");
console.log(`Age Text       : ${ageText}`);
console.log(`Age            : ${age}`);
console.log(`Birth Year     : ${birthYear}`);

console.log("\n📊 SCORE");
console.log("────────────────────────────────────");
console.log(`Original Score : ${score}`);
console.log(`Formatted      : ${formattedScore}`);
console.log(`Round          : ${roundScore}`);
console.log(`Floor          : ${floorScore}`);
console.log(`Ceil           : ${ceilScore}`);
console.log(`Grade          : ${grade}`);
console.log(`Status (Bonus) : ${statusLulus}`);

console.log("\n📅 REGISTRATION");
console.log("────────────────────────────────────");
console.log(`Date           : ${regDateFormatted}`);

console.log("\n🕐 REPORT GENERATED");
console.log("────────────────────────────────────");
console.log(`Date           : ${reportDate}`);
console.log(`Time           : ${currentTimeFormatted}`);

console.log("\n🎲 LUCKY DICE");
console.log("────────────────────────────────────");
console.log(`Dice           : ${dice}`);
console.log(`Result         : ${diceResult}`);

console.log("╔════════════════════════════════════╗");
console.log("║       🚀 PROCESS COMPLETE!         ║");
console.log("╚════════════════════════════════════╝");

// penjelasan materi
// Pembersihan Nama & Pembuatan Username

// trim() membuang spasi kosong di awal dan akhir teks.

// toLowerCase() mengecilkan semua huruf, lalu split(" ") memotong teks menjadi array kata per kata.

// Perulangan for memformat huruf depan setiap kata menjadi huruf besar menggunakan toUpperCase(), lalu menggabungkannya kembali dengan join(" ") menjadi "Ahmad Fauzi".

// split(" ").join(".") mengganti spasi antar kata menjadi tanda titik untuk membuat format username "ahmad.fauzi".

// 2. Analisis String

// includes("Ahmad") memeriksa apakah nama tersebut mengandung kata tertentu (menghasilkan nilai boolean true atau false).

// slice(0, 5) memotong dan mengambil 5 karakter pertama dari teks.

// replace("Ahmad", "Hanif") mengganti kata lama dengan kata baru.

// 3. Pengolahan Umur & Tahun Lahir

// parseInt("17 tahun") mengekstrak angka 17 dari dalam string dan mengabaikan teks setelahnya.

// new Date().getFullYear() mengambil tahun sistem saat ini secara otomatis (misal: 2026), lalu dikurangi umur untuk mendapatkan estimasi tahun lahir.

// 4. Pengolahan Nilai & Pembulatan

// parseFloat("85.566") mengubah teks menjadi angka desimal murni.

// toFixed(2) membatasi tampilan desimal menjadi tepat 2 angka di belakang koma (85.57).

// Math.round() membulatkan ke angka terdekat (86).

// Math.floor() membulatkan selalu ke bawah (85).

// Math.ceil() membulatkan selalu ke atas (86).

// 5. Logika Percabangan (Penentuan Grade & Kelulusan)

// Pernyataan if / else if / else membandingkan nilai numerik untuk mengelompokkan siswa ke dalam kategori huruf (A, B, C, D, atau E).

// Operator ternary score >= 70 ? ... : ... menentukan status kelulusan secara ringkas.

// 6. Pemrosesan & Format Tanggal

// split("-") memotong string tanggal registrasi, lalu Number() mengubah bagian teks tanggal, bulan, dan tahun menjadi angka.

// getMonth() + 1 menambahkan nilai 1 karena indeks bulan pada objek Date JavaScript dimulai dari 0 (Januari = 0).

// padStart(2, "0") memastikan angka tanggal, bulan, jam, atau menit selalu tampil 2 digit (contoh: angka 8 diubah menjadi "08").

// Fungsi formatDate(date) membungkus logika di atas agar pembuatan format DD/MM/YYYY bisa dipakai berulang kali.

// 7. Pengacakan Angka (Lucky Dice)

// Math.random() * 6 menghasilkan angka desimal acak dari 0 hingga 5.99.

// Math.floor(...) + 1 membulatkan ke bawah dan menambahkan 1 sehingga menghasilkan bilangan bulat acak antara 1 sampai 6.