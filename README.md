Soru 1:

İki generic diziyi birleştirdim.
function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] { return [...arr1, ...arr2]; }
spread operatörüyle dizileri tek diziye çevirdim.

Soru 2:

Car ve Truck sınıflarını union type (Vehicle) ile kullandım.
in operatörüyle loadCargo metodunun varlığını kontrol ettim.

Soru 3:

Logger sınıfında private logHistory tanımladım.
this ile sınıf içinden eriştim, dışarıdan erişim TypeScript kuralı gereği yasak.

Soru 4:

keyof ve generic tiplerle getProperty fonksiyonu yazdım.
T[K] dönüş tipiyle property’nin değer türünü otomatik aldım.

Soru 5:

search fonksiyonunda function overloading kullandım.
Parametre number ise find, string ise filter ile arama yaptım.

Soru 6:

Generic class MemoryCache<K,V> oluşturdum.
Map<K,V> üzerinden set, get, clear metotlarını tanımladım.

Soru 7:

Kullanıcıyı kısmi güncellemek için Partial<User> ve Readonly<User> kullandım.
Spread operatörüyle eski ve yeni verileri birleştirdim.

Soru 8:

Rest parametresi ve reduce() metoduyla değişken sayıda sayı topladım.

Soru 9:

abstract class Shape tanımlayıp Circle ile kalıtım kullandım.
super() ile üst sınıfı başlattım, getArea() metodunu override ettim.

Soru 10:

static PI ve calculateCircumference metotlarını sınıf düzeyinde tanımladım.
MathHelper’ı new yapmadan doğrudan kullandım.

⸻

Aşama 2 – Runtime Çıktılı Sorular

Soru 11:

Promise içindeki tipi çıkarmak için conditional type kullandım.
T extends Promise<infer U> ? U : T şeklinde yazdım.

Soru 12:

Fonksiyonun dönüş tipini almak için GetReturnType tanımladım.
T extends (...args:any[])=>infer R ? R : never yazarak dönüş tipini aldım.

Soru 13:

Mapped type ve key remapping kullandım.
Her property için get${Capitalize<...>} formatında getter metodu oluşturdum.

Soru 14:

İç içe tüm objeleri readonly yapmak için recursive mapped type yazdım.
DeepReadonly ile derin readonly oluşturdum.

Soru 15:

Belirli tipteki property’leri seçmek için conditional mapped type kullandım.
PickByValueType<T,V> ile T[K] extends V ? K : never mantığıyla filtreledim.

Soru 16:

Farklı string tiplerini ayırmak için Brand<K,T> tanımladım.
K & {\_\_brand:T} ile UserID ve PostID gibi markalı tipler oluşturdum.

Soru 17:

Union type’tan istenmeyen değerleri çıkarmak için T extends U ? never : T yaptım.
Böylece AllStatus içinden ActiveStatus çıkarıldı.

Soru 18:

Bir fonksiyonun son parametre tipini bulmak için infer ve tuple destructuring kullandım.
(...args:[...infer P, infer L]) yapısıyla son parametreyi aldım.

Soru 19:

Bir dizinin eleman tipini bulmak için T extends (infer U)[] ? U : T kullandım.
Dizi ise eleman tipini, değilse kendini döndürdüm.

Soru 20:

Route stringlerinden dinamik parametreleri çıkarmak için recursive conditional type yazdım.
infer ve template literal types ile /users/:id → {id:string} dönüşümünü yaptım.
