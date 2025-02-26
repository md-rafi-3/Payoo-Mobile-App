document.getElementById('login-btn').addEventListener('click',function(event){
   event.preventDefault();
   const accountNumber = document.getElementById('Account-number').value;
   
   const pin= document.getElementById('password').value;

   
   
   if(accountNumber === "01618802042"){
    if(parseInt(pin) === 1234){
      window.location.href="../main.html"
    }
    else {
        
    }
   }
   else {
    console.log('Type valid number')
   }
})