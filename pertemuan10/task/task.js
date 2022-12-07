/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
// producing promise
const showDownload = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Download Selesai!");
        }, 3000);
    });
};

/**
   * Fungsi untuk download file
   * @param {function} callback - Function callback show
   */
const download = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hasil Download: windows-10.exe");
        }, 5000);
    });
};

/**
   * TODO:
   * - Refactor callback ke Promise atau Async Await
   * - Refactor function ke ES6 Arrow Function
   * - Refactor string ke ES6 Template Literals
   */

// consuming promise
const main = async () => {
    console.log(await showDownload());
    console.log(await download());
};

main();
