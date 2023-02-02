// task 1

// let text = [
//     "Salam",
//     "Ali",
//     "Necesen?"
// ];

// let sum = " ";
// for(let i = 0;i<text.length;++i){
//     sum=sum+text[i]+" "
// }
// console.log(sum);



// task 2

// let array = [12,21,9,49,102];

// let sumcem = 0;
// let sumtek = 0;

// for(let i = 0;i<array.length;++i){
//     if(array[i]%2==0){
//         sumcem=sumcem+array[i];
//     }
//     else{sumtek=sumtek+array[i]}
//     ferq = sumcem-sumtek
// }
// console.log("Cem =",sumcem);
// console.log("Tek =",sumtek);
// console.log("Cem - Tek =",ferq);



// task 3

// let array = [12,21,9,49,102];
// let maxTEk = 1;

// for(let i = 0;i<array.length;++i){
//     if(array[i]%2 == 1 && maxTEk < array[i]){
//             maxTEk = array[i];
//         }
//     }
// console.log(maxTEk);



// task 4

// let array = [12,21,9,49,102];

// let maxTEk = 1;
// let maxCut = 2;

// for(let i = 0;i<array.length;++i){
//     if(array[i]%2 == 1 && maxTEk < array[i]){
//         maxTEk = array[i];
//     }
//     else if(array[i]%2 == 0 && maxCut < array[i]){
//         maxCut = array[i];
//     }
// }
// console.log("maxTek =",maxTEk);
// console.log("maxCut =",maxCut);
// console.log("maxTek+maxCut =",maxCut+maxTEk);



// task 5

// let array = [12,21,102,9,49,102,102];

// let max = 0;
// let count = 0;

//     for(let i = 0;i<array.length;++i){
//         if( max < array[i]){
//             max = array[i];
//         }
//     }
//     for(let i = 0;i<array.length;++i){
//         if(max == array[i]){
//             ++count;
//         }
//     }

//     console.log(max);
//     console.log(count);



// task 6

// let arr1 = [5,4];
// let arr2 = [12,46];

// let sum1 = 0;
// let sum2 = 0;


// for(let i = 0;i<arr1.length;++i){
//     sum1 = sum1+arr1[i];
// }
// for(let i = 0;i<arr2.length;++i){
//     sum2 = sum2+arr2[i];
// }
// console.log(sum1);
// console.log(sum2);
// console.log(sum1+sum2);



// task 7

// let arr = ["salam",true,true,false,45,false,"sagol"];
// let countBoolean = 0;

// for(let i = 0;i<arr.length;++i){
//     if(typeof arr[i] == "boolean")
//     countBoolean++
//         }
//         console.log(countBoolean)


// task 8

// let arr = ["salam",true,true,false,45,false,"sagol"];
// let countString = 0;

// for(let i = 0;i<arr.length;++i){
//     if(typeof arr[i] == "string")
//     countString++
//         }
//         console.log(countString)



// task 9

// let arr = [{name:"Ali",age:20},{name:"Samir",age:30}];
// let maxAge = 0;
// let name = ""

// for(let i = 0;i<arr.length;++i){
//     if(maxAge < arr[i].age){
//         maxAge = arr[i].age;
//         name = arr[i].name
//     }
// }
// console.log(name)