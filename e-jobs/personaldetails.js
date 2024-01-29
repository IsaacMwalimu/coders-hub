
const  mainbody = document.getElementById("mainBody")


let profiles = [
    {
        name:"mike kiboi",
        photo:"IMG-20240113-WA0019.jpg",
        job:"mechanical engineer",
        years:10,
        money:3000,
        workPhoto1:"IMG-20240113-WA0019.jpg",
        workPhoto2:"IMG-20240113-WA0019.jpg",
        workPhoto3:"IMG-20240113-WA0019.jpg",

    }
,
    {
        name:"kelvin kiboi",
        photo:"pexels-thirdman-5327656.jpg",
        job:"mechanical engineer",
        years:11,
        money:3000,    
        workPhoto1:"IMG-20240113-WA0019.jpg",
        workPhoto2:"IMG-20240113-WA0019.jpg",
        workPhoto3:"IMG-20240113-WA0019.jpg"
    } , 
     {
        name:"Daniel Ndungu",
        photo:"IMG-20240113-WA0019.jpg",
        job:"software engineer",
        years:10,
        money:3000,
        workPhoto1:"IMG-20240113-WA0019.jpg",
        workPhoto2:"IMG-20240113-WA0019.jpg",
        workPhoto3:"IMG-20240113-WA0019.jpg"
    }
]

function innitApp(){
profiles.forEach((value,key) =>{

    let bigViewprofile = document.createElement("div");
    bigViewprofile.className=("mainProfile")
bigViewprofile.innerHTML = `
<div class="main_img"><img src="images/${value.photo}" id="img_profile"></div>
<div class="personInfo">
    <div class="exp"> <span>name:</span><h1>${value.name}</h1></div>
   <div class="exp"><span>years of experience:</span><h2>${value.years}</h2></div> 
    <div class="exp"><span>rate: </span><h3>${value.money}</h3></div>
    <div class="exp"><span>work: </span><h3>${value.job}</h3><button id="hireMe" onclick="toContact(${key})">Hire me</button></div>

   
    <div class="workDone">
        <img src="images/${value.workPhoto1}" alt="#" class="workS_img"/>
        <img src="images/${value.workPhoto2}" alt="#" class="workS_img"/>
        <img src="images/${value.workPhoto3}" alt="#" class="workS_img"/>
    </div>
    <div class="reviews">
        <h1>reviews</h1>
    </div>
</div>`;

mainbody.appendChild(bigViewprofile)
}
)
}

innitApp()

function toContact(key){
    location="contact.html"
}

// var person = document.getElementsByClassName("personalProfile")

// person[0].onclick=function(){
//     console.log("buuul")
// };
// person[1].onclick=function(){
//     console.log("buuul")
// }
// ;
// person[2].onclick=function(){
//     console.log("buuul")
// }
// person[3].onclick=function(){
//     console.log("buuul")
// }
// person[4].onclick=function(){
//     console.log("buuul")
// }
// person[5].onclick=function(){
//     console.log("buuul")
// }
// person[6].onclick=function(){
//     console.log("buuul")
// };
// person[7].onclick=function(){
//     console.log("buuul")
// }


const arrowHome=document.getElementById("arrowHome");
arrowHome.addEventListener("click", ()=>{
    location="darshboard.html";
    console.log("jjjjj")
})
