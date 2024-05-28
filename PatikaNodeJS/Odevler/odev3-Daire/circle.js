/*
Ödev 3
Daire Modüler Dosyası
Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve 
consola sonuçları yazdıran circle.js dosyası oluşturunuz.
module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde 
ekran çıktısını alınız.
Kolay gelsin.
*/

const pi = 3.14;

function circleArea(radius){
    area = pi * (radius*radius)
    console.log("Alan : " , area);
}

function circleCircumference(radius){
    circumference = 2 * pi * radius;
    console.log("Çevre : " , circumference);
}

module.exports = {
    circleArea,
    circleCircumference
}