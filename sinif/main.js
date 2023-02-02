// BANKOMAT

// let username;
// let password;
// let count;
// function login(){
//     username = prompt("Istifadeci adinizi daxil edin");
//     password = prompt("Sifrenizi daxil edin");
//     count = 0;
// while(
//     username != "a"
//     &&
//     password != "b"
//     &&
//     count !=2
// ){
//     username = prompt
//                 (
//                     "İstifadəçi Adınızı Duzgun Daxil edin \n Sizin " +
//                     (2 - count) + " cehdiniz var"
//                 );
//      password = prompt
//                 (
//                     "Şifrənizi Duzgun Daxil edin \n Sizin " +
//                     (2 - count) + " cehdiniz var"
//                 );
//             count++;
// }
// }
// login();
// let balance=1000;
// let currency="Azn";
// let isQuit=true;
// if(count===2){
//     alert("Hesabiniz bloklandi");
// }
// else{
//     let choose;
//     while(isQuit){
//         choose = prompt(
//             "1. Balansi goster \n" +
//             "2. Balansi artir \n" +
//             "3. Balansdan cixaris \n" +
//             "4. Istifadeci adini deyis \n" +
//             "5. Sifreni deyis \n" +
//             "6. Hesabdan cix \n"
//         );
//         if(choose==1){
//             showBalance();
//         }else if(choose==2){
//             increaseBalance();
//             showBalance();
//         }else if(choose==3){
//             decreaseBalance();
//             showBalance();
//         }else if(choose==4){
//             changeUsername();
//         }else if(choose==5){
//             changePassword();
//         }else if(choose==6){
//            isQuit = !confirm("Hesabdan cixilsin?");
//            if(!isQuit)
//            login();
//         }
//     }
//     }

// function showBalance(){
//     alert("Sizin balansiniz " + balance +" "+ currency);
// }

// function increaseBalance(){
//     let amount = Number(prompt("Meblegi daxil edin"));
//     balance+=amount
// }

// function decreaseBalance(){
//     let amount = Number(prompt("Meblegi daxil edin"));
//     if(balance<amount){
//         alert("Balansivizda kifayet qeder vesait yoxdur");
//     }else{
//         balance-=amount
//     }
// }

// function changePassword(){
//     let tempPassword = prompt("Sifrenizi daxil edin");
//     while(
//         tempPassword!=password
//     ){
//         tempPassword = prompt("Sifreni duzgun daxil edin");
//     }
//     let newPassword = prompt("Yeni sifrenizi daxil edin");

//     let newPasswordRepeat = prompt("Yeni sifrenizi daxil edin");
//     while(
//         newPasswordRepeat!=newPassword
//     ){
//         newPasswordRepeat = prompt("Yeni sifrenizi tekrar daxil edin");
//     }
//     password=newPassword;
//     alert("Sifreniz deyisdi");
// }

// function changeUsername(){
//     let tempPassword = prompt("Sifrenizi daxil edin");
//     while(
//         tempPassword!=password
//     ){
//         tempPassword = prompt("Sifreni duzgun daxil edin");
//     }
//     let newUsername = prompt("Yeni Istafadeci adinizi daxil edin");

//     username=newUsername;
//     alert("Istafadeci adiniz deyisdi");






//! Məktəb Sistemi
//? Login Sistemi
//? Parol və Ad dəyişdirmə
//? Sinif əlavə
//? Hər sinifə tələbə əlavə etmə, silmə, dəyişdirmə
//? Sinifi dəyişmə

// MEKTEB

let username;
let password;
let count;
function login(){
    username = prompt("Istifadeci adinizi daxil edin");
    password = prompt("Sifrenizi daxil edin");
    count = 0;
while(
    username != "a"
    &&
    password != "b"
    &&
    count !=2
){
    username = prompt
                (
                    "İstifadəçi Adınızı Duzgun Daxil edin \n Sizin " +
                    (2 - count) + " cehdiniz var"
                );
     password = prompt
                (
                    "Şifrənizi Duzgun Daxil edin \n Sizin " +
                    (2 - count) + " cehdiniz var"
                );
            count++;
}
}
login();
let classes;
let student;
let isQuit=true;
if(count===2){
    alert("Hesabiniz bloklandi");
}
else{
    let choose;
    while(isQuit){
        choose = prompt(
            "1. Sinifleri gostermek \n" +
            "2. Sinif elave etmek ve silmek \n" +
            "3. Tələbə əlavə etmə, silmə \n" +
            "4. Sinifi dəyişmə \n" +
            "5. Istifadeci adini deyis \n" +
            "6. Sifreni deyis \n" +
            "7. Profilden cix \n"
        );
        if(choose==1){
            showclass();
        }else if(choose==2){
            
        }else if(choose==3){
            
        }else if(choose==4){
            changeUsername();
        }else if(choose==5){
            changePassword();
        }else if(choose==6){
           isQuit = !confirm("Hesabdan cixilsin?");
           if(!isQuit)
           login();
        }
    }
    }
    
