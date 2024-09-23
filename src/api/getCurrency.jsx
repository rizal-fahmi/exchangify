async function getCurrency() {
  const url = import.meta.env.VITE_CURRENCY_FREAKS_URL;
  const apiKey = import.meta.env.VITE_CURRENCY_FREAKS_KEY;

  const response = await fetch(
    `${url}${apiKey}`
  );
  const data = await response.json();
  return data;
}

export default getCurrency;


// const exchangeData = {
//   date: '2023-03-21 12:43:00+00',
//   base: 'USD',
//   rates: {
//     CAD: '1.36', // Dolar Kanada
//     IDR: '15160.80', // Rupiah Indonesia
//     JPY: '143.83', // Yen Jepang
//     CHF: '0.85', // Franc Swiss
//     EUR: '0.89', // Euro
//     GBP: '0.75', // Poundsterling
//     CNY: '7.04', // Yuan China
//     INR: '83.48', // Rupee India
//     KRW: '1332.49', // Won Korea
//     TRY: '34.12', // Lira Turki
//   },
// };

// const getCurrency = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 detik
//   return exchangeData;
// }

// export default getCurrency;