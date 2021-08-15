//Money withdraw page

document.getElementById("deposit-btn").addEventListener("click", function () {
  // get amount deposited
  const depositInput = document.getElementById("deposit-input");
  const newDepositAmount = depositInput.value;
  //   console.log(depositAmount);

  //   update deposit total
  const depositTotal = document.getElementById("deposit-total");
  //   console.log(depositTotal.innerText);
  const previousDepositAmount = depositTotal.innerText;

  const newDepositTotal =
    Number(previousDepositAmount) + Number(newDepositAmount);
  // parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);

  depositTotal.innerText = newDepositTotal;

  //   update account balance
  const balanceTotal = document.getElementById("balance-total");

  const previousBalanceTotal = balanceTotal.innerText;

  const newBalanceTotal =
    Number(previousBalanceTotal) + Number(newDepositAmount);
  newDepositAmount;

  balanceTotal.innerText = newBalanceTotal;
  //   clear the deposit input field
  depositInput.value = "";
  //   console.log(depositTotal.innerText);
});

//   handle withdraw event handler

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawTotal = document.getElementById("withdraw-total");

  const newWithdrawAmount = withdrawInput.value;
  console.log(newWithdrawAmount);
  const previousWithdrawTotal = withdrawTotal.innerText;

  const newWithdrawTotal =
    Number(newWithdrawAmount) + Number(previousWithdrawTotal);
  //   set withdraw total

  withdrawTotal.innerText = newWithdrawTotal;

  //   update balance

  const balanceTotal = document.getElementById("balance-total");

  const previousBalanceTotal = balanceTotal.innerText;

  const newBalance = Number(previousBalanceTotal) - Number(newWithdrawAmount);

  balanceTotal.innerText = newBalance;
  //   clear withdraw input

  withdrawInput.value = "";
});
