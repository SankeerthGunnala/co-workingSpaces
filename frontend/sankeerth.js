// function CheckEmail(){
//     if(email==' '||email==""){
//         document.getElementById('eidmg').innerText="Please enter email"
//     }else{
//         if(email.match("^([a-zA-Z0-9#]+)@([a-zA-Z0-9#]+)\.([a-zA-Z]{2,5})$")===null){
//             document.getElementById('eidmg').innerText="Please enter valid email"
//         }else{
//             document.getElementById('eidmg').innerText=""
//         }
//     }
// }


// function validateUser(){

//      var username = getValueById('username');
//      var password = getValueById('password');
//      var emailId = getValueById('emailId');
 
//      // validation - task
    
//         if(username.match("^[a-zA-Z ]{2,30}$")===null){
//             document.getElementById('usmg').innerHTML="username required 1uppercase letter";
//         }else{
//             document.getElementById('usmg').innerHTML="";
//         }  
    
//         if(password.match("^[a-zA-Z0-9!@#$%^&*]{6,16}$")===null){
//         document.getElementById('pdmg').innerHTML="password required 1uppercase,1specialcharacter, 1num";
//         }else{
//         document.getElementById('pdmg').innerHTML="";
//         }
        
//         if(email.match("^([a-zA-Z0-9#]+)@([a-zA-Z0-9#]+)\.([a-zA-Z]{2,5})$")===null){
//             document.getElementById('eidmg').innerText="Please enter valid email";
//         }else{
//             document.getElementById('eidmg').innerText=""
//         }
    
//     // function validate(){
//     //     var phoneNumber = document.getElementById('phone-number').value;
//     //     var postalCode = document.getElementById('postal-code').value;
//     //     var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
//     //     var postalRGEX = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
//     //     var phoneResult = phoneRGEX.test(phoneNumber);
//     //     var postalResult = postalRGEX.test(postalCode);
//     //     alert("phone:"+phoneResult + ", postal code: "+postalResult);
//     //   }
// //     var minNumberofChars = 6;
// //     var maxNumberofChars = 16;
// //     var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// //     alert(newPassword); 
// //     if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
// //         return false;
// //     }
// //     if(!regularExpression.test(newPassword)) {
// //         alert("password should contain atleast one number and one special character");
// //         return false;
// //     }
// // } 

// var pattern1 = /^([a-z 0-9\.-])+@([a-z0-9-]+).([a-z]{2,8})$/;
    // if(emailId.test(pattern1)){
    // document.getElementById('eidmg').innerHTML="valid";
    // document.getElementById('eidmg').style.visibility="visible";
    // document.getElementById('eidmg').style.color="green";    
    // }else{
    // document.getElementById('eidmg').innerHTML="Invalid";
    // document.getElementById('eidmg').style.visibility="visible";
    // document.getElementById('eidmg').style.color="red";  
    // }




//      var user= {
//          username:username,
//          password:password,
//          emailId:emailId
//      }

//      console.log('user',user);
//      return false;

// }

// function getValueById(id){
//     return document.getElementById(id).value;
// }


    // 
    // validation - task
    // var regex = /“(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$”/
    // if(!password.test(regex)){
    // document.getElementById('pdmg').innerHTML="password required 1uppercase,1specialcharacter, 1num";
    // }else{
    // document.getElementById('pdmg').innerHTML="";
    // }    
    
    // $scope.analyze = function(value) {
    //     if(strongRegex.test(value)) {
    //         $scope.passwordStrength["background-color"] = "green";
    //     } else if(mediumRegex.test(value)) {
    //         $scope.passwordStrength["background-color"] = "orange";
    //     } else {
    //         $scope.passwordStrength["background-color"] = "red";
    //     }
    // };
    // var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    // if(inputtxt.value.match(paswd)){ 
    // alert('Correct, try another...')
    // return true;
    // }else{ 
    // alert('Wrong...!')
    // return false;
    // }
    // }  
            
    // if(email.match("^([a-zA-Z0-9#]+)@([a-zA-Z0-9#]+)\.([a-zA-Z]{2,5})$")===null){
    //     document.getElementById('eidmg').innerText="Please enter valid email"
    // }else{
    //     document.getElementById('eidmg').innerText=""
    // }

    String regex = "^(?=.*[0-9])"
    + "(?=.*[a-z])(?=.*[A-Z])"
    + "(?=.*[@#$%^&+=])"
    + "(?=\\S+$).{8,20}$"; 

    var pattern1 = /^([a-z 0-9\.-])+@([a-z0-9-]+).([a-z]{2,8})$/
    if(password.test(pattern1)){
    document.getElementById('pdmg').innerHTML="valid";
    document.getElementById('pdmg').style.visibility="visible";
    document.getElementById('pdmg').style.color="green";    
    }else{
        document.getElementById('pdmg').innerHTML="Invalid";
        document.getElementById('pdmg').style.visibility="visible";
        document.getElementById('pdmg').style.color="red";  
    }

    