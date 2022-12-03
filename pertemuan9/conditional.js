const nilai = 95;
let grade = "";

if (nilai > 90) {
    grade = "A";
} else if (nilai > 80) {
    grade = "B";
} else {
    grade = "C";
}

console.log(`Grade Anda: ${grade}`);

const age = 23;

// if (age > 23) {
//     console.log("Sudah Dewasa");
// } else {
//     console.log("Belum Dewasa");
// }

// menggunakan short conditional (ternany operator)
age > 23 ? console.log("Sudah Dewasa") : console.log("Belum Dewasa");