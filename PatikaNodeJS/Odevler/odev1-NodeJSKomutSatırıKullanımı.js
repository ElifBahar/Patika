/*
Ödev 1
Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır.
Node.JS Javascript çalışma ortamında yarıçap değerini 
konsoldan parametre olarak girerek alanı bulmaya çalışacağız. 
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
*/

const arguments = process.argv.slice(2); //komut satırında girilen 3 param değişkene atandı.
const pi = 3.14;

//dairenin alan fonksiyonu
function areaCircle(radius){
    area = pi * (radius*radius)
    console.log(area);
}

areaCircle(arguments[0]);