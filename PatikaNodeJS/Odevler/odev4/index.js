/*
Ödev 4
FS File System Modülü
Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.
employees.json dosyası oluşturalım ve içerisine 
{"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.
*/

const fs = require('fs');

//DOSYA OLUŞTURMA

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
    if(err) console.log(err);
    console.log('Dosya başarıyla oluşturuldu!');
})


//DOSYA OKUMA

fs.readFile('employees.json','utf-8',(err,data) => {
    if(err) console.log(err);
    console.log(data)
    console.log('Dosya okuma tamamlandı');
})


//VERİYİ GÜNCELLEME

fs.appendFile('employees.json',',{"name": "Employee 2 Name", "salary": 3000}', 'utf-8', (err)=>{
    if(err) console.log(err);
    console.log('Veri güncelleme tamamlandı');
})


//DOSYAYI SİLME
fs.unlink('employees.json', (err)=>{
    if(err) console.log(err);
    console.log('Dosya Silindi');
})


