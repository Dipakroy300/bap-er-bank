document.getElementById('btn-deposit').addEventListener('click',function(){
   const depositField=document.getElementById('deposit-amount');
   
   const newDepositAmountString=depositField.value;
   const newDepositAmount=parseFloat(newDepositAmountString);

//    console.log(typeof newDepositAmount);
   
   const depositTotalElement=document.getElementById('deposit-total');
   const previousDepositTotalString=depositTotalElement.innerText;
//    console.log(typeof previousDepositTotal);
const previousDepositTotal=parseFloat(previousDepositTotalString);
 
   const currentDepositTotal=previousDepositTotal+newDepositAmount;

   depositTotalElement.innerText=currentDepositTotal;


   const balanceTotalElement=document.getElementById('balance-total');
   const previousBalanceTotalString=balanceTotalElement.innerText;
   const previousBalanceTotal=parseFloat(previousBalanceTotalString);

   const currentBalaceTotal=previousBalanceTotal+newDepositAmount;
   balanceTotalElement.innerText=currentBalaceTotal;

   depositField.value='';

})