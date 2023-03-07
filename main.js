const { default: axios } = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log('1. GET Methodu');
  console.log('2. POST Methodu');
  console.log('3. PUT Methodu');
  console.log('4. DELETE Methodu');
  console.log('5. Çıkış');

  rl.question('Seçiminiz:', (answer) => {
    switch (answer) {
      case '1':
        getMethod();
        break;
      case '2':
        console.log('POST Methodu Seçildi');
        break;
      case '3':
        console.log('PUT Methodu Seçildi');
        break;
      case '4':
        console.log('DELETE Methodu Seçildi');
        break;
      case '5':
        console.log('Çıkış Yapılıyor...');
        rl.close();
        break;
      default:
        console.log('Yanlış Seçim Yaptınız');
        break;
    }
  });
}

function getMethod() {
  rl.question('GET Methodu Seçildi. URL Giriniz:', (url) => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        menu();
      });
  });
}
menu();
