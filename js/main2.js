var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
document.querySelector("#address-form-btn1").addEventListener("click",function(){
             var pin=parseInt(document.getElementById('address-form1-pin').value.length);
              var pins=parseInt(document.getElementById('address-form1-pin').value);
               var arr =pins.toString().split('') ;
                var k=0;
                var y=0;
                /*----------------------------------pincode validation-----------------------------*/
               if(arr[0]==6){
                    for(i=0;i<arr.length;i++) {
                            arr[i]=+arr[i]|0;
                            if(isNaN(pins)){
                                y=y+1;
                                alert("oops! please enter currect pincode");
                                break;
                            }
                            else{
                                k = 10 * k + arr[i];
                            }
                       
                    }
               }
               var len = k.toString().length;
               if(len==6){
                var name1=document.getElementById("address-form1-name").value;
                var phone=parseInt(document.getElementById('address-form1-mobile').value.length);
                var phones=parseInt(document.getElementById('address-form1-mobile').value);
                var address1=document.getElementById("address-form1-address").value;
                var loc1=document.getElementById("address-form1-loc").value;
                var city=document.getElementById("address-form1-city").value;
                var state1=document.getElementById("address-form1-state").value;
                var radios1 = document.getElementsByName('address-Radio');
                /*-------------------------------check box checking----------------------------------------------*/
                for (var i = 0, length = radios1.length; i < length; i++) {
                if (radios1[i].checked) {
        // do whatever you want with the checked radio
                            var where1=radios1[i].value;

        // only one radio can be logically checked, don't check the rest
                            break;
                    }
                }
                /*-------------------------------phone no validation---------------------------------------------*/
                var parr = phones.toString().split('') ;
                var h=0;
                if((parr[0]==9)||(parr[0]==8)||(parr[0]==6)||(parr[0]==7)){
                    for(i=0;i<parr.length;i++) {
                        parr[i] = +parr[i]|0;
                        if(isNaN(phones)){
	                           break;
                        }
                        else{
                            h = 10 * h + parr[i];
                        }
                    }
                    var plen = h.toString().length;
                    if(plen==10){
                        document.getElementById("address-form").style.display="none";
                        document.getElementById("address-card-col").style.display="";
                        document.getElementById("address-cash-col").style.display="";
                        document.getElementById("address-esti-col").style.display="";
                        document.getElementById("address-con").style.display="";
                        document.getElementById("address-card1-name").innerHTML=name1;
                        document.getElementById("address-card1-mobile").innerHTML=phones; 
                        document.getElementById("address-card1-pincode").innerHTML=pins;
                        document.getElementById("address-card1-city").innerHTML=city;
                        document.getElementById("address-card1-address").innerHTML=address1;
                        document.getElementById("address-card1-lan").innerHTML=loc1;
                        document.getElementById("address-card1-state").innerHTML=state1; 
                        document.getElementById("address-card1-where").innerHTML=where1;
                    }
                    else{
                        alert("please enter valid mobile no");
                    }
                }
                else{
                    alert("please enter valid mobile no");
                }
            }
            else{
                 if(y==0){
                                alert("please enter valid pincode");
                            }

            }
});
document.querySelector("#address-form-btn2").addEventListener("click",function(){
             var pin=parseInt(document.getElementById('address-form2-pin').value.length);
              var pins=parseInt(document.getElementById('address-form2-pin').value);
               var arr =pins.toString().split('') ;
                var k=0;
                var y=0;
                /*----------------------------------pincode validation-----------------------------*/
               if(arr[0]==6){
                    for(i=0;i<arr.length;i++) {
                            arr[i]=+arr[i]|0;
                            if(isNaN(pins)){
                                y=y+1;
                                alert("oops! please enter currect pincode");
                                break;
                            }
                            else{
                                k = 10 * k + arr[i];
                            }
                       
                    }
               }
               var len = k.toString().length;
               if(len==6){
                var name1=document.getElementById("address-form2-name").value;
                var phone=parseInt(document.getElementById('address-form2-mobile').value.length);
                var phones=parseInt(document.getElementById('address-form2-mobile').value);
                var address1=document.getElementById("address-form2-address").value;
                var loc1=document.getElementById("address-form2-loc").value;
                var city=document.getElementById("address-form2-city").value;
                var state1=document.getElementById("address-form2-state").value;
                var radios1 = document.getElementsByName('address-Radio2');
                /*-------------------------------check box checking----------------------------------------------*/
                for (var i = 0, length = radios1.length; i < length; i++) {
                if (radios1[i].checked) {
        // do whatever you want with the checked radio
                            var where1=radios1[i].value;

        // only one radio can be logically checked, don't check the rest
                            break;
                    }
                }
                /*-------------------------------phone no validation---------------------------------------------*/
                var parr = phones.toString().split('') ;
                var h=0;
                if((parr[0]==9)||(parr[0]==8)||(parr[0]==6)||(parr[0]==7)){
                    for(i=0;i<parr.length;i++) {
                        parr[i] = +parr[i]|0;
                        if(isNaN(phones)){
	                           break;
                        }
                        else{
                            h = 10 * h + parr[i];
                        }
                    }
                    var plen = h.toString().length;
                    if(plen==10){
                        document.getElementById('address-form-close').style.display="";
                        document.getElementById('address-form-btn2').style.display="none";
                        document.getElementById("address-card2").style.display="none";
                        document.getElementById("address-card3").style.display="";
                        document.getElementById("address-card2-name").innerHTML=name1;
                        document.getElementById("address-card2-mobile").innerHTML=phones; 
                        document.getElementById("address-card2-pincode").innerHTML=pins;
                        document.getElementById("address-card2-city").innerHTML=city;
                        document.getElementById("address-card2-address").innerHTML=address1;
                        document.getElementById("address-card2-lan").innerHTML=loc1;
                        document.getElementById("address-card2-state").innerHTML=state1; 
                        document.getElementById("address-card2-where").innerHTML=where1;
                    }
                    else{
                        alert("please enter valid mobile no");
                    }
                }
                else{
                    alert("please enter valid mobile no");
                }
            }
            else{
                 if(y==0){
                                alert("please enter valid pincode");
                            }

            }
                        
});
document.querySelector("#address-form-btn3").addEventListener("click",function(){
             var pin=parseInt(document.getElementById('address-form3-pin').value.length);
              var pins=parseInt(document.getElementById('address-form3-pin').value);
               var arr =pins.toString().split('') ;
                var k=0;
                var y=0;
                /*----------------------------------pincode validation-----------------------------*/
               if(arr[0]==6){
                    for(i=0;i<arr.length;i++) {
                            arr[i]=+arr[i]|0;
                            if(isNaN(pins)){
                                y=y+1;
                                alert("oops! please enter currect pincode");
                                break;
                            }
                            else{
                                k = 10 * k + arr[i];
                            }
                       
                    }
               }
               var len = k.toString().length;
               if(len==6){
                var name1=document.getElementById("address-form3-name").value;
                var phone=parseInt(document.getElementById('address-form3-mobile').value.length);
                var phones=parseInt(document.getElementById('address-form3-mobile').value);
                var address1=document.getElementById("address-form3-address").value;
                var loc1=document.getElementById("address-form3-loc").value;
                var city=document.getElementById("address-form3-city").value;
                var state1=document.getElementById("address-form3-state").value;
                var radios1 = document.getElementsByName('address-Radio3');
                /*-------------------------------check box checking----------------------------------------------*/
                for (var i = 0, length = radios1.length; i < length; i++) {
                if (radios1[i].checked) {
        // do whatever you want with the checked radio
                            var where1=radios1[i].value;

        // only one radio can be logically checked, don't check the rest
                            break;
                    }
                }
                /*-------------------------------phone no validation---------------------------------------------*/
                var parr = phones.toString().split('') ;
                var h=0;
                if((parr[0]==9)||(parr[0]==8)||(parr[0]==6)||(parr[0]==7)){
                    for(i=0;i<parr.length;i++) {
                        parr[i] = +parr[i]|0;
                        if(isNaN(phones)){
	                           break;
                        }
                        else{
                            h = 10 * h + parr[i];
                        }
                    }
                    var plen = h.toString().length;
                    if(plen==10){
                        document.getElementById('address-form-close1').style.display="";
                        document.getElementById('address-form-btn3').style.display="none";
                        document.getElementById("address-card1-name").innerHTML=name1;
                        document.getElementById("address-card1-mobile").innerHTML=phones; 
                        document.getElementById("address-card1-pincode").innerHTML=pins;
                        document.getElementById("address-card1-city").innerHTML=city;
                        document.getElementById("address-card1-address").innerHTML=address1;
                        document.getElementById("address-card1-lan").innerHTML=loc1;
                        document.getElementById("address-card1-state").innerHTML=state1; 
                        document.getElementById("address-card1-where").innerHTML=where1;
                    }
                    else{
                        alert("please enter valid mobile no");
                    }
                }
                else{
                    alert("please enter valid mobile no");
                }
            }
            else{
                 if(y==0){
                                alert("please enter valid pincode");
                            }

            }
                        
});
document.getElementById("address-form-close").addEventListener("click",function(){
                        document.getElementById('address-form-close').style.display="none";
                        document.getElementById('address-form-btn2').style.display="";
                        document.getElementById('address-form2-name').value="";
                        document.getElementById('address-form2-mobile').value="";
                        document.getElementById('address-form2-pin').value="";
                        document.getElementById('address-form2-address').value="";
                        document.getElementById('address-form2-loc').value="";
                        document.getElementById('address-form2-state').value="";
                        document.getElementById('address-form2-city').value="";
                        
});
document.getElementById("address-form-close1").addEventListener("click",function(){
                        document.getElementById('address-form-close1').style.display="none";
                        document.getElementById('address-form-btn3').style.display="";
                        document.getElementById('address-form3-name').value="";
                        document.getElementById('address-form3-mobile').value="";
                        document.getElementById('address-form3-pin').value="";
                        document.getElementById('address-form3-address').value="";
                        document.getElementById('address-form3-loc').value="";
                        document.getElementById('address-form3-state').value="";
                        document.getElementById('address-form3-city').value="";
                        
});

                    