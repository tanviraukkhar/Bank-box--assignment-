
deposit = document.getElementById("deposit-total");
withdraw = document.getElementById("withdraw_total");
balance = document.getElementById("balance-total");
depositInput = document.getElementById("deposit_input");
withdrawInput = document.getElementById("withdraw_input");
depositBtn = document.getElementById("deposit_button");
withDrawBtn = document.getElementById("withdraw_btn");



depositBtn.addEventListener("click", function() {
  const value = depositInput.value;
  const depositValue = Number(deposit.innerText) + Number(value);
  const balanceValue = Number(balance.innerText) + Number(value);
  console.log(deposit)
  deposit.innerText = depositValue;
  balance.innerText = balanceValue;
  depositInput.value = "";
});

withDrawBtn.addEventListener("click", function() {
  const value = withdrawInput.value;

  if (Number(value) > Number(balance.innerText)) {
    alert("You dont have that much balance to withdraw");
    withdrawInput.value = "";
  } else {
    const withDrawValue = Number(withdraw.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) - Number(value);
    withdraw.innerText = withDrawValue;
    balance.innerText = balanceValue;
    withdrawInput.value = "";
  }
});
