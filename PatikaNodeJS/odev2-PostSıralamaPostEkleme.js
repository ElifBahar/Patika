/*
Post Sıralama ve Post Ekleme
Blog oluşturmaya hazır mısınız? 
Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve 
yeni post ile birlikte postlarımızı tekrar sıralayalım.

*/

const posts = [
    {title: 'PATİKA Node JS', content: 'Patika üzerinden NodeJs kursuna başladım. Gerçekten çok güzel.'},
    {title: 'Kedi Su Sebili', content: 'Kedilerin süreli taze suya erişimi için hazırlanmış su sebillerinden aldık. Çocuklar çok sevdi.'},
];


const listPosts = () => {
    posts.map(post => {
        console.log("--- GÖNDERİ ---")
        console.log("Başlık :" , post.title);
        console.log("İçerik :" , post.content);
        console.log("------")
    })
};


const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve (posts);
        //reject('Bir Hata Oluştu!')
    })
    return promise1;
};

async function showPosts(){
    try{
        await addPost({ title: 'Await - Async', content: 'Ödev 2 Kapsamında post sıralama ve keleme await async yapısıyla oluşturuldu.'});
        listPosts();
    }catch(error){
        console.log(error)
    }
    

}

showPosts();