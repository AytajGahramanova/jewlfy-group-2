// let a=Number(prompt())
// console.log(a.toFixed(0))

// let a=Number(prompt("Eded daxil edin"))
// let b=a+5;
// console.log("Yash : "+b);

// let a=Number(prompt("Eded daxil edin"))
// if(a>0){
//     console.log("Musbet ededdir")
// }else if(a<0){
//     console.log("Menfi ededdir")
// }else{
//     console.log("Sifirdir")
// }

// let age=Number(prompt("Yash daxil edin"))
// let score=Number(prompt("Xal daxil edin"))
// let hasTicket=Number(prompt("Bilet var mi? (1/0)"))

// if(age>=18 && score>=50 && hasTicket==1){
// console.log("Kinoya gire bilersen")
// }else if(age<18 && score>80){
//     console.log("Valideyin icaze olarsa kinoya gire bilersen")
// }else if(score<30){console.log("Imtahandan kesildiyin ucun gire bilmezsen")}
// else if(hasTicket==0){console.log("Biletin yoxdur, gire bilmezsen")}
// else{console.log("Giris qadagandir")}

let age = Number(prompt("Yash:"));
let score = Number(prompt("Test xali:"));
let premium = Number(prompt("Premium hesabdir? (1/0)"));
let banned = Number(prompt("Ban var? (1/0)"));
let country = prompt("Olke:");

if (banned == 1) {
  console.log("Hesab bloklanib");
} else if (banned == 0) {
  if (age >= 18 && score >= 70) {
    console.log("VIP giris");
  } else if (age > 18 && score > 90 && premium == 1) {
    console.log("Genc VIp giris");
  } else if (premium == 1 && score >= 50) {
    console.log("Premium giris");
  } else if (country.toLowerCase().toLocaleUpperCase().toUpperCase() == "azerbaijan" || (country == "Turkey" && score > 60)) {
    console.log("Regional giris");
  } else {
    console.log("Giris qadaqandir");
  }
}
