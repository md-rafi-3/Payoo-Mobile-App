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
            alert("Invalid Password")
        }

    
            
        
    }
    else{
        alert("Invalid Number")
    }

})