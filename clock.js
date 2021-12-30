let userName = prompt("Adınız nedir?") //Kullanıcıdan ismini alarak bir "userName" değişkenine atarız.

let myName = document.querySelector('#myName') //myName adında bir değişken oluşturup "querySelector" özelliği ile html içerisindeki "myName" id'li element ile eşleştiririz.


myName.innerHTML = `${userName}` //myName id'li elementimize innerHTML ile kullanıcıdan promt ile aldığımız değeri yazdırırız.


//Aşağıdaki yöntem ile fonksiyon kullanmayınca anlık olarak saat ve günü çekebiliyor fakat ilerlemesini saglayamıyordum. Bu nedenle fonksiyon kullanmam gerekti.
function showTime() {
let d = new Date();
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let time = document.querySelector('#myClock')

time.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${days[d.getUTCDay()]}`
setTimeout(showTime, 1000); // setTimeout alternatifi => setInterval(tarihSaat, 1000); 
}
showTime(); //Fonksiyonu çağırırız.

// setTimeout(showTime, 1000); Sık kullanılan bir Js fonksiyonudur. fonksiyonun belirli aralıklarla yeniden çalışmasını sağlar
// setTimeout(fonksiyonAdi, msSure); msSure=Fonksiyonun yeniden çalıştırılması için geçen milisaniye cinsinden süre /1000ms = 1 saniye
// her 1 saniyede bir showTime fonksiyonunu yeniden çalıştır