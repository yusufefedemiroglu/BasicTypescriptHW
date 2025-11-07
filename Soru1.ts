function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}

//spread operator kullanarak iki diziyi birleştirir(spread bir arrayin elemanlarına ayırır biz return ederken yeni bir array oluşturuyoruz ve içine spread ile elemanları ekliyoruz)
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const mergedArray = mergeArrays(arr1, arr2);

console.log(mergedArray); // [1, 2, 3, "a", "b", "c"]
