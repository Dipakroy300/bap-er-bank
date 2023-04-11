document.getElementById('btn-withdraw').addEventListener('click', function(){

   const withdrawField=document.getElementById('withdraw-field');
   const newWithdrawAmountString=withdrawField.value;
   const newWithdrawAmount=parseFloat(newWithdrawAmountString);
//    console.log(newWithdrawAmount);

const withdrawTotalElement=document.getElementById('withdraw-total');
const previousWithdrawTotalString=withdrawTotalElement.innerText;
const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);



const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);

withdrawField.value='';
if(isNaN(newWithdrawAmount)){
    alert('please enter a valid number');
    return;
}
if(newWithdrawAmount>previousBalanceTotal){
    alert('ato tk nai ');
    return;
}

const currentWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
withdrawTotalElement.innerText=currentWithdrawTotal;

const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
balanceTotalElement.innerText=newBalanceTotal;



})