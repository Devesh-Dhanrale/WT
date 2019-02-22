function validation()
{
        var x=document.getElementById("in").value;
        var y=document.getElementById("ps").value;
        var z=document.getElementById("cps").value;
       if (x=="")
       {
       alert("Name is Mandatory");
       }
       else if(y=="")
       {
              alert("please enter the password")
       }
       else if(z=="")
       {
              alert("please enter the password")
       }
       else if(y.length=6)
       {
                 alert("length of password must be >6")
       }
       else if (y.length == z.length)
       {
               alert("length of password is wrong")
          
       }
       else{
       
       }
       
}
