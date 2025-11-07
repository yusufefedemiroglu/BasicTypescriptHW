function sum(...numbers: number[]): number {
      /* ??? */
  // 'reduce' kullanarak tüm sayıları toplayın
  return numbers.reduce((toplam, sayi) => toplam + sayi);
}
console.log(sum(1, 2, 3));          // 6
console.log(sum(10, 20, 30, 40));   // 100
// BEKLENEN EKRAN ÇIKTISI:
// 6
// 100