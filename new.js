let uname=document.querySelector("#uname").value
let pwd=document.querySelector("#pwd").value
let datset=Bank.getAccountDetails();
if(uname in datset){

if(datset[uname].password===pwd){
  alert("sucelful login")
  window.location.href="customer.html"
}
else{
  alert("invalid")
}

else{
alert("no user exit with this username")
}

}
}
