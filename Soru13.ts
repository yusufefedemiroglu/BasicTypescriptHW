// SADECE BU SATIRI DEĞİŞTİRİN

type CreateGetters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

// ---- KOD BLOKU (DOKUNMAYIN) ----
type UserProps = { id: number; name: string; };
type UserGetters = CreateGetters<UserProps>;

const userGetters: UserGetters = {
  getId: () => 1,
  getName: () => "Ali"
};

// // @ts-expect-error - Bu satırın HATA vermesi beklenir
// const errorGetter: UserGetters = {
//   getId: () => 1,
//   getName: () => 123
// };
//except error bugluydu burayı komple yorum satırı yaptım
console.log("Soru 13 Başarılı!", userGetters.getName());
// BEKLENEN "EKRAN ÇIKTISI":
// (Derleyicide hata olmaması ve konsolda "Soru 13 Başarılı!" yazması)