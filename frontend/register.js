 
    function validateUser(){
    var username=getValueById('username');
    var password= getValueById('password');
    var emailId=getValueById('emailId');
    
    var pattern1 = /[A-z]{6,16}/;

    if(username.match(pattern1)===null){
        document.getElementById('user_msg').innerHTML="username incorrect";
        return false;
    }else{
        document.getElementById('user_msg').innerHTML="";
        return false;
    }

    var pattern2 = /([A-Z]+)([a-z]+)([!@#$%^&*]+)([0-9]+)/;
   
    if(password.match(pattern2) === null){
        document.getElementById('password_msg').innerHTML="password required 1uppercase,1lowercase,1specialcharacter,1num";
        return false;
    }

    
    var pattern3 = /([a-zA-Z0-9#]+)@([a-zA-Z0-9#]+)\.([a-zA-Z]{2,5})/;
   
    if(emailId.match(pattern3) === null){
        document.getElementById('email_msg').innerHTML="email not valid";
        return false;
    }    
    
        var user= {
        username:username,
        password:password,
        emailId:emailId
        }
    console.log('user',user);

var url="http://localhost:52680/user/register";

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
   console.log("inside onload");
    console.log('data', xhr.responseText);
    var responseData=JSON.parse(xhr.responseText);
    localStorage.setItem('token',responseData.token);
}
xhr.send(JSON.stringify(user));

    return false;
}

function getValueById(id){
   return document.getElementById(id).value;
}
















