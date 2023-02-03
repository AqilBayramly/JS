// let array = [17,158,29,75,46,2856,100,255];

// const container = document.querySelector(".container")

// for(i=0;i<array.length;++i){
//     container.innerHTML +=
//     `
//     <span class = ${array[i]%2==0 ? "yellow" :"green"}>${array[i]}</span><br>
//     `
// }



const box = document.querySelector(".box")

let colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "brown",
    "purple",
    "aqua",
    "gray"
]

for(i=0;i<colors.length;++i){
    box.innerHTML += 
    `
    <span class = "red">${colors[i]}</span><br>
    <span class = "green">${colors[i]}</span><br>
    <span class = "blue">${colors[i]}</span><br>
    <span class = "yellow">${colors[i]}</span><br>
    <span class = "brown">${colors[i]}</span><br>
    <span class = "purple">${colors[i]}</span><br>
    <span class = "aqua">${colors[i]}</span><br>
    <span class = "gray">${colors[i]}</span><br>
    `
}
// function random(colors){
// console.log((Math.random()*colors.length));
// }
// random(colors);

// document.addEventListener("",function(e){
//     box.style.left = e.clientX +"px";
//     box.style.top = e.clientY +"px";

// })

















