document.getElementById('cash-out-form').style.display="none";

document.getElementById('add-money-form').style.display="none";

document.getElementById('transfer-money-form').style.display="none";

document.getElementById('bill-form').style.display = 'none';



document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('cash-out-form').style.display="none";

    document.getElementById('add-money-form').style.display="block";
  
    const addMoneyBox = document.getElementById('add-money-box');
    
    addMoneyBox.classList.add("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");


    const cashOutBox = document.getElementById('cashout-box');
    
  cashOutBox.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

  const transfer = document.getElementById('transfer-box');

  transfer.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

  document.getElementById('transfer-money-form').style.display="none";

  const bonusCoupon = document.getElementById('bonus-box');

   bonusCoupon.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

   document.getElementById('bonus-form').style.display = 'none';

   const billBox = document.getElementById('bill-box');

 billBox.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

 document.getElementById('bill-form').style.display = 'none';

  });


  


//   cash out
document.getElementById('cashout-box').addEventListener('click',function(){
    
  document.getElementById('cash-out-form').style.display='block';

  document.getElementById('add-money-form').style.display="none";



  const addMoneyBox = document.getElementById('add-money-box');
    
  addMoneyBox.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");


  const cashOutBox = document.getElementById('cashout-box');
    
  cashOutBox.classList.add("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

  const transfer = document.getElementById('transfer-box');

  transfer.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

  document.getElementById('transfer-money-form').style.display="none";

  document.getElementById('bonus-form').style.display = 'none';

  const bonusCoupon = document.getElementById('bonus-box');

   bonusCoupon.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

   const billBox = document.getElementById('bill-box');
 billBox.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

 document.getElementById('bill-form').style.display = 'none';


});


// transfer

document.getElementById('transfer-box').addEventListener('click',function(){
    document.getElementById('add-money-form').style.display = 'none';
    document.getElementById('cash-out-form').style.display = 'none';

    document.getElementById('transfer-money-form').style.display = 'block';
    document.getElementById('bonus-form').style.display = 'none';

   const addMoney = document.getElementById('add-money-box');

   addMoney.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

   const cashOut = document.getElementById('cashout-box');
   cashOut.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

   const transfer = document.getElementById('transfer-box');

   transfer.classList.add("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

   const bonusCoupon = document.getElementById('bonus-box');

   bonusCoupon.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

   const billBox = document.getElementById('bill-box');
 billBox.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

 document.getElementById('bill-form').style.display = 'none';

    
});

// coupon
document.getElementById('bonus-box').addEventListener('click',function(){
    
    document.getElementById('add-money-form').style.display = 'none';
    document.getElementById('cash-out-form').style.display = 'none';

    document.getElementById('transfer-money-form').style.display = 'none';
   
    document.getElementById('bonus-form').style.display = 'block';

    



   const addMoney = document.getElementById('add-money-box');


   addMoney.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

   const cashOut = document.getElementById('cashout-box');
   cashOut.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

   const transfer = document.getElementById('transfer-box');

   transfer.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");


   const bonusCoupon = document.getElementById('bonus-box');

   bonusCoupon.classList.add("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

   bonusCoupon.classList.add("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

 const billBox = document.getElementById('bill-box');
 billBox.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

 document.getElementById('bill-form').style.display = 'none';


})


// bill box

document.getElementById('bill-box').addEventListener('click',function(){
    
  document.getElementById('add-money-form').style.display = 'none';
  document.getElementById('cash-out-form').style.display = 'none';

  document.getElementById('transfer-money-form').style.display = 'none';
 
  document.getElementById('bonus-form').style.display = 'none';
  document.getElementById('bill-form').style.display = 'block';

  



 const addMoney = document.getElementById('add-money-box');


 addMoney.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

 const cashOut = document.getElementById('cashout-box');
 cashOut.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

 const transfer = document.getElementById('transfer-box');

 transfer.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");


 const bonusCoupon = document.getElementById('bonus-box');

 bonusCoupon.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");

 const billBox = document.getElementById('bill-box');
 billBox.classList.add("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");


})