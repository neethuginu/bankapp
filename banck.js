
var accountDetails={

    userone:{acno:1000,balance:1000,username="neethu",pasward:"testuser"},
    
    userone:{acno:1001,balance:10000,username="neethu",pasward:"testuser1"},
    
    userone:{acno:1002,balance:1500,username="neethu",pasward:"testuser1"},
}
//check for user one exit or not
console.log("userone" in accountDetails){

    console.log(accountDetails["userone"].acno)
}
else{
    console.log("user not exit")
}
//validate username and pasward

var username="username"
var password="testuser2"
if(username in )