let btn = document.getElementById('icon');
let email = document.getElementById('email')
let err  =  document.getElementById('error');
let inputDiv = document.getElementById('input')
btn.addEventListener('click',check)

function check(){
    let u = email.value;
  let ans = validateemail();
  if(ans === false){
    inputDiv.className = 'input error'
    err.innerHTML = "Please provide a valid email"
  }
}
function validateemail()  
{  
let x = email.value;
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  return false;  
  }  
}  
// console.log(validateemail())
