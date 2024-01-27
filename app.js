let personName = prompt("Adınız nedir?");
let kodluyoruz = document.getElementById("kodluyoruz");
let welcome = document.getElementById("name");
let newDate = document.getElementById("newDate");
let explanation = document.getElementById("explanation");
kodluyoruz.innerHTML = "<img src='img/Kodluyoruz_Turuncu logo_Yatay-p-500.png'>";
welcome.innerHTML = `Merhaba, <b>${personName}!</b> Hoş geldin!`;
explanation.innerHTML = `tarihinde <b>Kodluyoruz Frontend Web Development Patikası</b>'nın Javascript bölümü 1. Ödevindesiniz.`;

getDateTime();
function getDateTime() {
    let dateTime = new Date().toLocaleString('tr-TR');
    document.getElementById("newDate").innerHTML = dateTime;
}
setInterval(getDateTime, 1000);