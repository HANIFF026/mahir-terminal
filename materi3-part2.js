console.log("=============================");
console.log("MATERI3-PART2");
console.log("=============================");

const skill = ["python,html,css,javacript"];
console.log(skill)
// push = nambah item terakhir
// unshift = nambah item pertama
skill.push("tailwind");
skill.unshift("githup");
console.log(skill);
// pop = menghapus item terakhir
// shif = menghapus item pertama
skill.pop();
skill.pop();
skill.shift();
console.log(skill);
//  includes = cek apakah item ada di array atau tidak
const cektailwind = skill.includes("tailwind");
const cekReactjs = skill.includes("reactjs");
console.log({cektailwind,cekReactjs})

// mapping data dengan .map()
const dompetDigital = [100000,7500000,2500000,50000000]
console.log(dompetDigital)
const kursUSD = 17672;
const dompetDollar = dompetDigital.map(
    duitrupiah => {
        const nilaiUSD = (duitrupiah / kursUSD).toFixed(2);
        return `$ ${nilaiUSD}`;
    }
);
console.log(dompetDollar);
const filterDuit = dompetDigital.filter(
    (akumulator,duitrupiah) => akumulator + duitrupiah,
    0
)
console.log(filterDuit)
// AKUMULASI DATA DGN .REDUCE()
const totalDompetRupiah = dompetDigital.reduce(
    (akumulator,duitrupiah) =>akumulator + duitrupiah,
    0
)
console.log(totalDompetRupiah)
// method chaining = menggabungkan method2 yg sejenisnya
const namasiswa = "budi siregar";
// trim = menghapus  spasi di awal
// toUppercase = 
const formatnamasiswa = namasiswa.trim().toUpperCase().slice(0,4);
console.log(namasiswa,formatnamasiswa)
// method chaining di array
const totalmurahusd = dompetDigital.map(rupiah => rupiah/kursUSD)
    .filter(usd => usd < 100)
    .reduce((SubmitEvent, usd) => sum + usd,0);
    