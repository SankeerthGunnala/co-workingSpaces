function loginUser(){
    alert("Inside loginuser");
    var password= getValueById('password');
    var emailId=getValueById('emailId');
    // validation - task
    var user= {
        emailId:emailId,
        password:password,
        role:'ROLE_CUSTOMER'
    }
    console.log('user',user);
    var url="http://localhost:52680/user/login";

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
   console.log("inside onload");
    console.log('data', xhr.responseText);
    var responseData=JSON.parse(xhr.responseText);
    console.log('responseData',responseData);
    if(responseData.token){
        localStorage.setItem('token',responseData.token);
        return true;
    }
    else
    {
        return false;
    }
}
xhr.send(JSON.stringify(user));

    
}

function getValueById(id){
   return document.getElementById(id).value;
}
$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });