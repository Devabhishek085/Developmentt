// let h1=document.querySelector("h1")
// // console.dir(h1);
// h1.innerHTML="<i>Abhishekk</i>"
// console.log(h1);

// let a=document.querySelector("a")
// console.log(a);

// a.setAttribute("href","https://www.google.com")
// let h1=document.createElement("h1")
// h1.textContent="ghar jaao aur khana khaaoo"
// // document.querySelector("body").prepend(h1)
// console.log(h1);

// let h1=document.querySelector("h1");
// h1.style.color="blue";
// console.dir(h1);
// h1.style.backgroundColor="beige"
// h1.style.fontFamily="Gilroy"

// let list=document.querySelectorAll("li")
// list.forEach(function (val) {
//     console.log(val.textContent);
// });

// let h1=document.querySelector("h1")
// h1.addEventListener("click",function(){
//     h1.style.color="red"
// })

let p=document.querySelector("p")
function dblclick(){
    p.style.color="green"
}
p.addEventListener("dblclick",dblclick)
p.removeEventListener("dblclick",dblclick)