/**
 * TODO 9:
 * - Import semua method FruitController
 * - Refactor variable ke ES6 Variable
 *
 * @hint - Gunakan Destructing Object
 */

var {index, store, update, destroy} = require("./FruitController.js");

/**
  * NOTES:
  * - Fungsi main tidak perlu diubah
  * - Jalankan program: nodejs app.js
  */
const main = () => {
    console.log("Method index - Menampilkan Buah");
    index();
    console.log("\nMethod store - Menambahkan buah Starfruit");
    store("Starfruit");
    console.log("\nMethod update - Update data 0 menjadi Avocado");
    update(0, "Avocado");
    console.log("\nMethod destroy - Menghapus data 0");
    destroy(0);
};

main();