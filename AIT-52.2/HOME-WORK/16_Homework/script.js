console.log("hello, objects!");

// Пример объекта user
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

console.log(user.name);
console.log(user["name"]);
console.log(user.salary);

user.salary = 5000;
console.log(user.salary);

user.age = 31;

delete user.isAdmin;
console.log(user);

for (const key in user) {
  console.log(`Ключ: ${key}, Значение равно: ${user[key]}`);
}

user.greet = function () {
  console.log(`Привет, меня зовут ${this.name} и мне ${this.age}`);
};

user.greet();

let bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
};

bankAccount.deposit = function(sum) {
    sum >= 5 && sum <= 5000 ? this.balance += sum : alert("Некорректная сумма пополнения")
}

bankAccount.withdraw = function (sum) {
  sum <= this.balance && sum > 0
    ? (this.balance -= sum)
    : alert("Некорректная сумма списания");
};

bankAccount.checkBalance = function () {
  console.log(`Баланс Вашего аккаунта равен: ${this.balance}`);
};

const bank = [];

function createAccount() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  if (name) {
    bank.push({
      ...bankAccount,
      accountNumber: bank.length + 1,
      accountHolderName: name,
    });
    alert("Account created successfully");
  } else {
    alert("Please, enter a valid name");
  }

  nameInput.value = "";
  console.log(bank);
}

function showAccounts() {
  const accountList = document.getElementById("accountList");
  accountList.innerHTML = "";

  bank.forEach((account, index) => {
    accountList.innerHTML += `<li>${index + 1}. ID: ${
      account.accountNumber
    }, Name: ${account.accountHolderName}, Balance: ${account.balance} 
    <button onclick="deleteAccount(${account.accountNumber})">Delete</button></li>`;
  });
}

const withdraw = document.getElementById("withdraw");
const deposit = document.getElementById("deposit");

deposit.onclick = function () {
  operation('deposit');
};

withdraw.onclick = function () {
  operation('withdraw');
};

function operation(operator) {
  const accountIdInput = document.getElementById("accountId");
  const amountInput = document.getElementById("amount");

  const accountId = accountIdInput.value.trim();
  const amount = +amountInput.value.trim();

  const accountFind = bank.find(e => e.accountNumber.toString() === accountId);

  if(accountFind) {
    if (operator === 'deposit') {
      accountFind.deposit(amount);
    } else {
      accountFind.withdraw(amount);
    }
  } else {
    alert('Account not found');
  }

  accountIdInput.value = "";
  amountInput.value = "";
}

function deleteAccount(accountNumber) {
  const accountIndex = bank.findIndex(account => account.accountNumber === accountNumber);
  if (accountIndex !== -1) {
    bank.splice(accountIndex, 1);
    alert('Account deleted successfully');
    showAccounts();
  } else {
    alert('Account not found');
  }
}
