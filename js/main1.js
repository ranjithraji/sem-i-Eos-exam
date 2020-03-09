var k=parseInt(localStorage.getItem("k"));
var flag=parseInt(0);
        var b=[];
        var name;
        var em;
        var pass;
         if(k!=0){
            flag=localStorage.getItem("k");
        }
var lu;
var lp;
document.querySelector("#sam-modal-login-btn").addEventListener("click",function(){
        var yna=document.getElementById("sam-email-login").value;
        var ypas=document.getElementById("sam-pass-login").value;
        for(var i=0;i<flag;i++){
            var count=0;
            uname="name"+i;
            pass="pass"+i;
            email="email"+i;
            phone="phone"+i;
            lu=localStorage.getItem(email);
            lp=localStorage.getItem(pass);
       if((lu==yna)&&(lp==ypas)){
        document.getElementById("sam-modal-signup").style.display="none";
        document.getElementById("sam-modal-login").style.display="none";
        document.getElementById("sam-modal-profile").style.display="";
        nam=localStorage.getItem(uname);
        ema=localStorage.getItem(email);
        ph=localStorage.getItem(phone);
        document.getElementById("sam-modal-profile-name").innerHTML=nam;
        document.getElementById("sam-modal-profile-email").innerHTML=ema;
        document.getElementById("sam-modal-profile-phone").innerHTML=ph;
           break;
        }
       count++;
   } 
   if(count!=0){
       alert("Please enter valid password and username");
   }
});
document.getElementById("sam-modal-profile-logout").addEventListener("click",function(){
        document.getElementById("sam-modal-signup").style.display="none";
        document.getElementById("sam-modal-login").style.display="";
        document.getElementById("sam-modal-profile").style.display="none";
});