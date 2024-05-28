//fs modülünün dahil edilmesi
const fs = require('fs');

//Dosya Okuma
fs.readFile('password.txt','utf8', (err,data) => {
    if(err) console.log(err);
    console.log(data);
    console.log('DOSYA OKUNDU');
})



//Dosya Yazma
//txt dosya
fs.writeFile('example.txt','Hello NodeJS','utf8', (err,data)=>{
    if(err) console.log(err);
    console.log('Dosya Oluşturma Başarılı');
})


//json dosya
fs.writeFile('example.json','{"name": "Arin", "age": 6}','utf8', (err,data)=>{
    if(err) console.log(err);
    console.log('Dosya Oluşturma Başarılı');
})

//Veri Ekleme
fs.appendFile('example.txt','\nAppend İle Yazı Eklendi','utf8', (err)=>{
    if(err) console.log(err);
    console.log('Dosyaya Ekleme Başarılı');
})

//Dosya Silme
fs.unlink('example.json', (err) => {
    if(err) console.log(err);
    console.log('Dosya Silme Başarılı');
})

//Klasör Oluşturma
fs.mkdir('uploads/img', { recursive: true }, (err)=>{
    if(err) console.log(err);
    console.log('Klasörler Oluşturuldu!');
})

//Klasör Silme
fs.rmdir('uploads', { recursive: true }, (err)=>{
    if(err) console.log(err);
    console.log('Klasörler Silindi!');
})