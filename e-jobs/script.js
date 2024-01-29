const barCont = document.getElementById("hamburgerContainer");
const navigation = document.querySelector(".navigation")



barCont.addEventListener("click", ()=>{
navigation.classList.toggle("active");
barCont.classList.toggle("active")


})

const login = document.getElementById("img_login") ;
login.addEventListener("click",()=>{
    location="form.html";

})


let i = 0;
let images = [];
let time = 3000;

images[0] = "images/pexels-emmanuel-ikwuegbu-8005397.jpg";
images[1] = "images/pexels-thisisengineering-3912981.jpg";
images[2]= "images/pexels-anamul-rezwan-1216544.jpg";

function changeImageFunc(){
    document.slide.src=images[i];
    if(i < images.length -1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout('',time);
}  
 window.onload = changeImageFunc




const plumberA = document.getElementById("plumberA");
const mechanicA = document.getElementById("mechanicA");
const MechanicalEA=document.getElementById("mechanicalA");
const TechA = document.getElementById("techA");



const Plumber = document.getElementById("plumber")
const Mechanic = document.getElementById("Mechanic")
const TechConsultant = document.getElementById("Tech_Consultants")
const Engineer = document.getElementById("Engineer")


plumberA.addEventListener("click", ()=>{
Plumber.classList.remove("active");
Mechanic.classList.remove("active");
Engineer.classList.remove("active")
TechConsultant.classList.remove("active");
plumberA.classList.add("active");
MechanicalEA.classList.remove("active");
mechanicA.classList.remove("active");
TechA.classList.remove("active")
})

MechanicalEA.addEventListener("click", ()=>{
    Plumber.classList.add("active");
    Mechanic.classList.remove("active");
    Engineer.classList.add("active")
    TechConsultant.classList.remove("active");
    MechanicalEA.classList.add("active");
    plumberA.classList.remove("active");
mechanicA.classList.remove("active");
TechA.classList.remove("active")
    })

    TechA.addEventListener("click", ()=>{
        Plumber.classList.add("active");
        Mechanic.classList.remove("active");
        Engineer.classList.remove("active")
        TechConsultant.classList.add("active");
        TechA.classList.add("active");
        plumberA.classList.remove("active");
MechanicalEA.classList.remove("active");
mechanicA.classList.remove("active");
        })
        
        
   mechanicA.addEventListener("click", ()=>{
        Plumber.classList.add("active");
        Mechanic.classList.add("active");
        Engineer.classList.remove("active")
        TechConsultant.classList.remove("active");
        mechanicA.classList.add("active");
        plumberA.classList.remove("active");
MechanicalEA.classList.remove("active");
TechA.classList.remove("active")
        })
      
        

let plumber = document.getElementsByClassName("occ")[0];
let engineer = document.getElementsByClassName("occ")[1];
let tech = document.getElementById("tech-nav");



let engineerMain = document.querySelector(".engineer");
let plumberMain = document.querySelector(".plumber")

tech.addEventListener("click" ,()=>{
    var tech1 = document.getElementById("tech-1");
    tech1.classList.add.classList("active")
})

engineer.addEventListener("click", ()=>{
    engineerMain.classList.add("active");
    plumberMain.classList.add("active")
})