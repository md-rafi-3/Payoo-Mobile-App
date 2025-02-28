document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('cash-out-form').style.display="none";

    document.getElementById('add-money-form').style.display="block";
  
    const addMoneyBox = document.getElementById('add-money-box');
    
    addMoneyBox.classList.add("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");


    const cashOutBox = document.getElementById('cashout-box');
    
  cashOutBox.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");
  });
  


//   cash out
document.getElementById('cashout-box').addEventListener('click',function(){
    
  document.getElementById('cash-out-form').style.display='block';

  document.getElementById('add-money-form').style.display="none";



  const addMoneyBox = document.getElementById('add-money-box');
    
  addMoneyBox.classList.remove("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");


  const cashOutBox = document.getElementById('cashout-box');
    
  cashOutBox.classList.add("box-border","border-[#0874f2]","bg-[#0874f2]","bg-opacity-5","border-2");



})