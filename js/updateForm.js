function initalSetup(){
    document.getElementById("UpdateForm").style.display= "none";
}

function checkLoginDetails(){
  var Logname ="rohan";
  var Logpass ="rohan";
  var InputName = document.getElementById("userId").value;
  var InputPassword =  document.getElementById("userpassinput").value;
   if ( Logname == InputName && Logpass == InputPassword ){
      openUpdateForm();
   }
   else {
     document.getElementById("userId").value = "";
     document.getElementById("userpassinput").value = "";
     document.getElementById("errorMsg").innerHTML = "Invalid User Id Or Password";
   }


}


function openUpdateForm(){
  document.getElementById("logIn").style.display= "none";
  document.getElementById("UpdateForm").style.display= "block";


}


function writeinfile(){

    var confm = window.confirm(document.getElementById("aboutText").value);
    if(confm == true){
      localStorage.setItem('About',document.getElementById("aboutText").value);
    }
    else{
      alert("outside confirm");
    }

}

function initialSetupAbout(){
  document.getElementById("aboutText").value = localStorage.getItem('About');

}

function regMember(){

}
