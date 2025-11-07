// SADECE BU SATIRI DEĞİŞTİRİN
/*Flatten<T> Bpini tanımlayın. T bir dizi ise eleman Bpini (T[] -> T), değilse T'yi döndürmelidir. */
type Flatten<T> = T extends (infer U)[] ? U : T;

// ---- KOD BLOKU (DOKUNMAYIN) ----
type NumArray = number[];
type Str = string;

let el1: Flatten<NumArray> = 123;
let el2: Flatten<Str> = "hello";

// @ts-expect-error - 'NumArray'in elemanı 'number', 'string' değil
let errorEl: Flatten<NumArray> = "string";

console.log("Soru 19 Başarılı!", el1, el2);
// BEKLENEN "EKRAN ÇIKTISI":
// (Derleyicide hata olmaması ve konsolda "Soru 19 Başarılı!" yazması)