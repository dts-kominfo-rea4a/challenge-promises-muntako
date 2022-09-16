const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    // gunakan kata await untuk mendapatkan "data" hasil resolve-nya
    const ixx = await promiseTheaterIXX();
    const vgc = await promiseTheaterVGC();
    let counter = 0;
    return new Promise((resolve) => {      
        counter += ixx.filter((item) => item.hasil === emosi).length;
        counter += vgc.filter((item) => item.hasil === emosi).length;
        resolve(counter);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
