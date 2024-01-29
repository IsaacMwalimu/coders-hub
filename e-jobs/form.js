let occupation = document.getElementById("select");
let checkSpan = document.getElementsByClassName("check");
let client = document.getElementById("Client");
let freeLancer = document.getElementById("freeLancer")

client.addEventListener("click", ()=>{  
    checkSpan[0].classList.add("active");
    checkSpan[1].classList.remove("active");

})
freeLancer.addEventListener("click", ()=>{  
  checkSpan[1].classList.add("active");
  checkSpan[0].classList.remove("active");
});

function onloadExe(){
const onloadExeDiv = document.getElementById("visitorSelect");
onloadExeDiv.classList.add("active")
}
const loginLink = document.getElementById("LoginLink");


function LoginPage(){
  let occupation = document.getElementById("Select");
let inputAll = document.getElementsByClassName("input");
let labelAll = document.getElementsByClassName("labelAll")
const onloadExeDiv = document.getElementById("visitorSelect");
const Register = document.getElementById("Register");
const confirmPassword = document.getElementById("ConPassword");
const conLabel = document.getElementById("labelcon")

let input0 = inputAll[0];
let input1 = inputAll[1];

occupation.classList.add("active")
Register.innerHTML="Login"

  onloadExeDiv.classList.remove("active");
  input0.classList.add("active");
  labelAll[0].classList.add("active");
  input1.classList.add("active");
  labelAll[1].classList.add("active");

  confirmPassword.classList.add("active");
 conLabel.classList.add("active");


formText.innerHTML="Login to your account"

}

let formText = document.getElementById("formText");

client.addEventListener("click", ()=>{
      let button = document.getElementById("hire_Free");
    let checkSpan = document.getElementsByClassName("check");
    let checkindex = checkSpan[0];

if(checkindex.classList.contains("active")){
button.innerHTML="Register as a client";
formText.innerHTML="Register as a client"
}
})
freeLancer.addEventListener("click", ()=>{
    let checkSpan = document.getElementsByClassName("check");
    let checkIndex1  = checkSpan[1];
    let button = document.getElementById("hire_Free");
   if(checkIndex1.classList.contains("active")){
    button.innerHTML="Register as a freelancer";
    formText.innerHTML="Register as a Freelancer";
    }        
})

function onloadClient()
{
  let checkSpan = document.getElementsByClassName("check");
  let checkindex = checkSpan[0];
let occupation = document.getElementById("Select")

  if(checkindex.classList.contains("active")){
occupation.style.display="none"
  }
  else{
    occupation.style.display="block"
  }
  const onloadExeDiv = document.getElementById("visitorSelect");
onloadExeDiv.classList.remove("active")
  
}
let button = document.getElementById("hire_Free"); 
