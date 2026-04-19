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

// let p=document.querySelector("p")
// function dblclick(){
//     p.style.color="green"
// }
// p.addEventListener("dblclick",dblclick)
// p.removeEventListener("dblclick",dblclick)

// let input=document.querySelector("input")
// input.addEventListener("input",function(dets){
//     if(dets.data!=null){
//         console.log(dets.data);
//     }
// })

//change event:

//  let sel=document.querySelector("select")
//  let device=document.querySelector("#device")
// sel.addEventListener("change",function(dets){
//     // console.log(dets.target.value);
//     device.textContent=`${dets.target.value} Device Selected Successfully`
// })

// Prevent form submission reload
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log("Form submitted without page reload!");
// });

// let form =document.querySelector("form");
// let inputs=document.querySelectorAll("input")
// form.addEventListener("submit",function(dets){
//     dets.preventDefault();
//     console.log(
//         inputs[0].value,
//         inputs[1].value,
//         inputs[2].value,
//         inputs[3].value
//     );
// })

// let abcd=document.querySelector("#abcd")
// abcd.addEventListener("mouseover",function(){
//     abcd.style.backgroundColor="yellow"
// })
// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor="red"
// })

// let abcd=document.querySelector("#abcd");

// window.addEventListener("mousemove",function(dets){
//     abcd.style.top=dets.clientY+"px"
//     abcd.style.left=dets.clientX+"px"
// })

// let inp=document.querySelector("input")
// let span=document.querySelector("span")
// inp.addEventListener("input",function(dets){
//     span.textContent=inp.value.length;
// })


// form

// let nm=document.querySelector("#name")
// let form=document.querySelector("form")
// form.addEventListener("submit",function(dets){
//     dets.preventDefault();
//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     let ans=regex.test("a@a.a")
//     console.log(ans);
// })

// setTimeout(function(){
//     console.log("Hello");
     
// },2000)

// let obj={
//     name:"Abhishek",
//     age: 20,
// }
// function abcd(a,b,c){
//     console.log(this,a,b,c);
// }
// let fnc=abcd.bind(obj,1,2,3)

// function createBiscuit(name,price,qty,company,category){
//     this.name=name,
//     this.price=price,
//     this.qty=qty,
//     this.company=company,
//     this.category=category
// }
// let biscuit1=new createBiscuit("Oreo",10,5,"Cadbuary","Chocolate");
// let biscuit2=new createBiscuit("Dark Fantasy",20,3,"parle","Chocolate dark");

function CreatePencil(name,price,color,company){
    this.name=name;
    this.price=price,
    this.color=color,
    // this.company="Moto";
    this.write=function(){
        let h1=document.createElement("h1")
        h1.textContent="Hii how are you";
        h1.style.color=color;
        document.body.append(h1);
    }
    CreatePencil.prototype.company="Moto"
}
let pencil1=new CreatePencil("nataraj",10,"black","nataraj");
console.log(pencil1);

let pencil2=new CreatePencil("apsara",5,"green","apsara");
console.log(pencil2);