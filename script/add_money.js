document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount =document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('password').value;
     const convertedPin = parseInt(pin);

     const mainBalance = document.getElementById("main-balance").innerText;
     
     const convertedMainBalance = parseFloat(mainBalance);
     
     const number = document.getElementById('Account-number').value;
     console.log(typeof number)
    
     if(number === "01618802042" ){
        if(convertedPin === 1234){
            const sum=convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum; 
            console.log(typeof sum);
        }
        else{
            alert("Invalid Password");
        }

    
            
        
    }
    else{
        alert("Invalid Number")
    }

})




// cash out section
  document.getElementById('withdraw').addEventListener('click',function(event){
    event.preventDefault();
    const amount =document.getElementById('withdraw-amount').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('cash-out-password').value;
     const convertedPin = parseInt(pin);

     const mainBalance = document.getElementById("main-balance").innerText;
     
     const convertedMainBalance = parseFloat(mainBalance);
     
     const number = document.getElementById('agent-number').value;
     console.log(typeof number)
    
     if(number === "01618802042" ){
        if(convertedPin === 1234){
            const sum=convertedMainBalance - convertedAmount;
            document.getElementById("main-balance").innerText = sum; 
            console.log(typeof sum);
        }
        else{
            alert("Invalid Password");
        }

    
            
        
    }
    else{
        alert("Invalid Number")
    }

});


// cash transfer

document.getElementById('send').addEventListener('click',function(event){
    event.preventDefault();
    const transferAmount = document.getElementById('transfer-amount').value;
    const convertedTransferAmount = parseFloat(transferAmount);
    console.log(convertedTransferAmount);
   
    const number = document.getElementById('user-number').value;

    const pin = document.getElementById('transfer-password').value;

    const balance = document.getElementById('main-balance').innerText;

    const convertedBalance = parseInt(balance);

    

    if(number === "01618802042"){
        if(parseInt(pin)=== 1234){
            const minus = convertedBalance - convertedTransferAmount;
          
            document.getElementById('main-balance').innerText = minus;
            
        }
        else{
            alert("Invalid Password");  
        }
    }

    else{
        alert("Invalid Number")
    }


    
});


// get bonus
document.getElementById('bonus').addEventListener('click',function(event){
    event.preventDefault();

    const bonusValue =document.getElementById('bonus-coupon').value;

    const mainBalance = document.getElementById('main-balance').innerText;
     const convertedBalance = parseFloat(mainBalance);
    if (bonusValue === '500 tk vikkha dau'){
       const bonus = convertedBalance  + 500;
       document.getElementById('main-balance').innerText = bonus;
    }
    else if (bonusValue === 'I love you Rafi') {
         const secondBonus = convertedBalance  + 1000;

         document.getElementById('main-balance').innerText = secondBonus;
        
    }

    else{
        alert("Invalid Coupon")
    }
});


// bill section
document.getElementById('bill-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amount =document.getElementById('bill-amount').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('bill-password').value;
     const convertedPin = parseInt(pin);

     const mainBalance = document.getElementById("main-balance").innerText;
     
     const convertedMainBalance = parseFloat(mainBalance);
     
     const number = document.getElementById('bill-number').value;
     console.log(typeof number)
    
     if(number === "01618802042" ){
        if(convertedPin === 1234){
            const sum=convertedMainBalance - convertedAmount;
            document.getElementById("main-balance").innerText = sum; 
            console.log(typeof sum);
        }
        else{
            alert("Invalid Password");
        }

    
            
        
    }
    else{
        alert("Invalid Number")
    }

});