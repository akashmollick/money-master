document.getElementById("btn-submit").addEventListener('click',function(){
    console.log("hello vaiya");
    const income=document.getElementById('income').value;
    const intIncome=parseInt(income);
    const expenseFood=document.getElementById('food').value;
    const intExpenseFood=parseInt(expenseFood);
    const expenseRent=document.getElementById('rent').value;
    const intExpenseRent=parseInt(expenseRent);
    const expenseCloths=document.getElementById('cloths').value;
    const intExpenseCloths=parseInt(expenseCloths);
    const savingId=document.getElementById('saveingId').value;
    const intsave=parseInt(savingId)/100;
    const totalCost=intExpenseCloths+intExpenseFood+intExpenseRent;
    const banlance=intIncome-totalCost;
    const totalSave=intIncome*intsave;
    const remainBalance=banlance-totalSave;
    const showExpense=document.getElementById('tExpense');
    showExpense.innerText=totalCost;
    const showBalance=document.getElementById('tBalance');
    showBalance.innerText=banlance;
    const showSave=document.getElementById('tSave');
    showSave.innerText=totalSave;
    const showRemain=document.getElementById('tRemain');
    showRemain.innerText=remainBalance;
    console.log(totalCost);
    console.log(banlance);
    console.log(totalSave);
    console.log(remainBalance);
    
    
})
