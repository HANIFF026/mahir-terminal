// 1. Data Vote
const votes = { h2r: 0, r1: 0, cbr: 0, duke: 0, bmw: 0 };

// 2. Kumpulan Elemen DOM
const el = {
  total: document.querySelector("#total-votes"),
  leaderName: document.querySelector("#leader-name"),
  leaderStatus: document.querySelector("#leader-status"),
  feedback: document.querySelector("#feedback")
};

const bikes = ["h2r", "r1", "cbr", "duke", "bmw"];
const bikeNames = {
  h2r: "KAWASAKI H2R",
  r1: "YAMAHA R1",
  cbr: "HONDA CBR1000RR",
  duke: "DUCATI Panigale V4",
  bmw: "BMW S1000RR",
};

// 3. Update Dashboard & Progress Bar
function updateDashboard() {
  const total = Object.values(votes).reduce((a, b) => a + b, 0);
  el.total.textContent = total;

  bikes.forEach((bike) => {
    const count = votes[bike];
    const percent = total === 0 ? 0 : Math.round((count / total) * 100);

    document.querySelector(`#votes-${bike}`).textContent = count;
    document.querySelector(`#percent-${bike}`).textContent = `${percent}%`;
    document.querySelector(`#bar-${bike}`).style.width = `${percent}%`;
  });

  updateLeader(total);
}

// 4. Update Leaderboard
function updateLeader(total) {
  if (total === 0) {
    el.leaderName.textContent = "Belum Ada Pemenang";
    el.leaderStatus.textContent = "Belum ada vote yang masuk";
    return;
  }

  const sorted = bikes
    .map((b) => ({ name: bikeNames[b], count: votes[b] }))
    .sort((a, b) => b.count - a.count);

  if (sorted[0].count === sorted[1].count && sorted[0].count > 0) {
    el.leaderName.textContent = "Seri! 🤝";
    el.leaderStatus.textContent = `Persaingan ketat antara ${sorted[0].name} & ${sorted[1].name}`;
  } else {
    el.leaderName.textContent = sorted[0].name;
    el.leaderStatus.textContent = `Memimpin dengan ${sorted[0].count} vote! 🔥`;
  }
}

// 5. Dynamic Event Listeners untuk Tombol Vote
bikes.forEach((bike) => {
  document.querySelector(`#btn-${bike}`).addEventListener("click", () => {
    votes[bike]++;
    el.feedback.textContent = `✅ Kamu memilih ${bikeNames[bike]}!`;
    updateDashboard();
  });
});

// 6. Reset & Fullscreen
document.querySelector("#btn-reset").addEventListener("click", () => {
  bikes.forEach((b) => (votes[b] = 0));
  el.feedback.textContent = "🔄 Voting berhasil di-reset!";
  updateDashboard();
});

document.querySelector("#btn-fullscreen").addEventListener("click", () => {
  document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
});


// PENJELASAN KODE :

// Struktur Data (votes, bikes, bikeNames)
// votes: Objek untuk menyimpan jumlah skor voting masing-masing motor.

// bikes: Array daftar kunci ID ("h2r", "r1", dst.) yang digunakan untuk melakukan perulangan (looping).

// bikeNames: Objek kamus untuk mengubah ID singkat menjadi nama lengkap motor yang tampil di layar.

// 2. Efisiensi DOM Management (el)
// Variabel el menampung elemen-elemen HTML utama. Dengan menyimpannya di dalam objek di awal, browser tidak perlu mencari ulang elemen tersebut setiap kali ada perubahan, sehingga aplikasi berjalan lebih cepat.

// 3. Fungsi updateDashboard()
// Fungsi ini bertugas memperbarui tampilan UI setiap ada perubahan vote:

// Menghitung Total: Menggunakan Object.values(votes).reduce(...) untuk menjumlahkan seluruh nilai angka dalam objek votes.

// Perulangan forEach: Mengatur teks jumlah vote, angka persentase, dan lebar progress bar (style.width) untuk setiap motor secara otomatis berdasarkan kuncinya.

// 4. Logika Penentuan Pemenang (updateLeader)
// Kode mengambil data vote lalu mengurutkannya dari yang terbesar ke terkecil menggunakan .sort((a, b) => b.count - a.count).

// Kondisi Seri: Jika jumlah vote posisi pertama (sorted[0]) sama dengan posisi kedua (sorted[1]), status akan berubah menjadi "Seri! 🤝".

// Kondisi Menang: Jika tidak seri, posisi pertama otomatis ditampilkan sebagai Current Leader.

// 5. Event Listeners (Tombol Interaktif)
// Tombol Vote: Menggunakan perulangan bikes.forEach() untuk mendaftarkan fungsi klik ke semua tombol (#btn-h2r, #btn-r1, dst.). Saat diklik, nilai vote bertambah (votes[bike]++), pesan feedback muncul, dan updateDashboard() dipanggil.

// Tombol Reset: Mengembalikan semua nilai di objek votes menjadi 0.

// Tombol Fullscreen: Memanfaatkan API browser document.fullscreenElement untuk beralih ke mode layar penuh atau keluar dari layar penuh secara fleksibel.