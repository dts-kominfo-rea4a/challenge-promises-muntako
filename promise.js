const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    // gunakan kata await untuk mendapatkan "data" hasil resolve-nya
    const ixx = await promiseTheaterIXX();
    const vgc = await promiseTheaterVGC();
    let jumlahEmosi = 0;

    return new Promise((resolve, reject) => {
      // Kondisi gagal
      if (emosi === null) {
        reject('Maaf, emosi tidak boleh kosong!');
      }
      // Kondisi terpenuhi
      else {
        // iterate film ixx
        for (film of ixx){
          if (film.hasil == emosi){
            jumlahEmosi++;
          }
        }
        // iterate film vgc
        for (film of vgc){
          if (film.hasil == emosi){
            jumlahEmosi++;
          }
        }
        resolve(jumlahEmosi);
      }    
    });
    
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
