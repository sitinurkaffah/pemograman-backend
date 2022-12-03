// import FruitController
// Melakukan destructing Object

const { index, store } = require("./FruitController.js");

const main = () => {
    index();
    store("Melon");
};

main();