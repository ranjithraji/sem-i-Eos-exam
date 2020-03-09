var k=parseInt(localStorage.getItem("k"));
var flag=parseInt(0);
        var b;
        var name;
        var em;
        var pass;
         if(k!=0){
            flag=localStorage.getItem("k");
        }
document.getElementById("sam-modal-signbtn").addEventListener("click",function(){
    var email = document.getElementById('sam-email-sign');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email==""){
        alert("Please enter your email Id ");
    }
    else{
          if (!filter.test(email.value)) {
                alert('Please provide a valid email address');
                email.focus;
                 return false;
        }
        else{
            var pin=parseInt(document.getElementById('sam-phone-sign').value.length);
            var pins=parseInt(document.getElementById('sam-phone-sign').value);
            var arr =pins.toString().split('') ;
            var h=0;
            var y=0;
            /*----------------------------------pincode validation-----------------------------*/
           if(arr[0]==9||arr[0]==8||arr[0]==7||arr[0]==6){
                for(i=0;i<arr.length;i++) {
                        arr[i]=+arr[i]|0;
                        if(isNaN(pins)){
                            y=y+1;
                            alert("oops! please enter currect pincode");
                            break;
                        }
                        else{
                            h = 10 * h + arr[i];
                        }
                   
                }
           }
           var len = h.toString().length;
        if(len==10){
            for(var l=0;l<1;l++){
                name="name"+flag;
               alert(name);
                emails="email"+flag;
                password="pass"+flag;
                phone="phone"+flag;
               var na=document.getElementById("sam-name-sign").value;
               var em=document.getElementById("sam-email-sign").value;
               var pass=document.getElementById("sam-pass-sign").value;
               var re_pass=document.getElementById("sam-pass-sign").value.lenght;
               var pho=document.getElementById("sam-phone-sign").value;
               if(na!=""){
                   var countna=0;
                   if(flag!=0){
                       for(var j=0;j<flag;j++){
                           name1="name"+j;
                           email1="email"+j;
                           b=localStorage.getItem(name1);
                           w=localStorage.getItem(email1);
                           if(w==em){
                               alert("email-id Already taken");
                               break;
                           }
                           else{
                               countna++;
                           }
                       }
               }
               if(countna==flag){
                alert(na);
                       localStorage.setItem(name,na);
                       localStorage.setItem(emails,em);
                       localStorage.setItem(password,pass);
                       localStorage.setItem(phone,pho);
                        flag++;
                       localStorage.setItem("k",flag);
                       document.getElementById("sam-modal-signup").style.display="none";
                        document.getElementById("sam-modal-login").style.display="";
                     
                   }
               }
               else
               {
                   alert("Please full the all details");
               }
              
           }
         }
         else{
             alert("Please enter valid phone no");
         }
        }
    }
});

/**page navigated*/
document.getElementById("sam-modal-ex-login").addEventListener("click",function(){
    document.getElementById("sam-modal-signup").style.display="none";
    document.getElementById("sam-modal-login").style.display="";
});
document.getElementById("sam-modal-ex-signup").addEventListener("click",function(){
    document.getElementById("sam-modal-signup").style.display="";
    document.getElementById("sam-modal-login").style.display="none";
});