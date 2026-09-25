console.log("==============================")
console.log("MATERI 3 PART 1- DATA MANIPULATION")
console.log("==============================")

// string manipulation
const namaSultan = 'Sri Sultan HamengKuBuwono X' ;
console.log({namaSultan});
const namaKecil = namaSultan.toLowerCase();
const namaBesar = namaSultan.toUpperCase();
console.log({namaSultan});
console.log({namaKecil, namaBesar});
const gelar = namaSultan.slice(11, 19); // index AWAL 11, INDEX AKHIR 19
console.log({gelar});
const nomorGelar = namaSultan.replace("X", "xII");
console.log({gelar,nomorGelar});
const cekSultan = namaSultan.includes(" Sultan");
if (cekSultan){
    console.log("ini benar nama sultan");
} else {
    console.log("ini bukan nama sultan");
}

// number manipulation
const hartaSultan = "300000000000 ";
const KonversiHarta =Number(hartaSultan);
console.log({hartaSultan, KonversiHarta});
const utangSultan =  "450000000";
const konversiUtang = Number(utangSultan);
console.log({utangSultan, konversiUtang});
const konversiUtangDuaKoma = konversiUtang.toFixed(2); // string
console.log({konversiUtangDuaKoma});
// math function utk perhitungan angka
// round() ,floor(),ceil()
const konversiUtangPembulatan = Math.ceil(konversiUtang);
console.log({konversiUtangPembulatan});
// date MANIPULATION
const saiki = new Date();
console.log({saiki});
const tahunini = saiki.getFullYear();
console.log({tahunini});
const bulanini = saiki.getMonth() + 1;
const tanggalini = saiki.getDate();
const hariini = saiki.getDay();
console.log({bulanini,tanggalini,hariini,tahunini});
const hariindo = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
const hariiniindo = hariindo[hariini];
console.log({hariiniindo});

// DAFTAR HARGA BELANJA
const cabai = 50000;
const bawangmerah = 46000;
const bawangputih = 60000;
const totalharga = cabai+ bawangmerah + bawangputih;
console.log(totalharga);

// objek.group
const bahanbangunan = [
    {nama : "semen" , kategori : " bahanBangunan"},
    {nama :"pasir", kategori : " bahanBangunan"},
    {nama :"minyak", kategori : " Bumbu"}
]
const hasil = Object.groupBy(bahanbangunan, item => item.bangunan);
console.log(hasil);

