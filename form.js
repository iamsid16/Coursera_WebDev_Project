function validateusername()                                               //function to validate username
   { var user=document.getElementById("usrnme").value;
	 if(user==null || user=="")
      {  alert(" Enter a valid username");
         return false;	  
	  }else
	    { return true;  }
   }
function validateemail()                                                // function to validate email adddress
   {
       var email = document.getElementById("eml").value;
       var format = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if (!format.test(email)) 
	         {  
                  alert("Please provide a valid email address");
				  return false;
             }else
	           { return true;}
	}   
function validatepassword()                                             //function to validate password
    {
      var password1=document.getElementById("pswrd").value;
        if(password1.length!=8)
          {  alert("Type a 8 digit password");
    		 return false;  }
		else
	      {  return true;  }
    }
function validatemob()                                                //function to validate mobile number
   { 
     var mob = document.getElementById("nmbr").value;
	 var pattern = /^\d{10}$/;
	  if(!pattern.test(mob))
	    {
		  alert("Please enter a valid mobile number");
		  return false;  
		}else
	       {   alert("Thanks for sumbmitting. Your order is in process");
		       return true;  }
   }