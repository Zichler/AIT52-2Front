console.log("hello, objects!");

// Пример объекта user
let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

// Пример объекта bankAccount
let bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0
};

bankAccount.deposit = function(sum) {
    sum >= 5 && sum <= 5000 ? this.balance += sum : alert("Некорректная сумма пополнения");
};

bankAccount.withdraw = function(sum) {
    sum <= this.balance && sum > 0 ? this.balance -= sum : alert("Некорректная сумма списания");
};

bankAccount.checkBalance = function() {
    console.log(`Баланс Вашего аккаунта равен: ${this.balance}`);
};

const bank = [];

function createAccount() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    if (name) {
        bank.push({
            ...bankAccount,
            accountNumber: bank.length + 1,
            accountHolderName: name
        });
        alert('Account created successfully');
    } else {
        alert('Please, enter a valid name');
    }

    nameInput.value = '';
    console.log(bank);
}

function showAccounts() {
    const accountList = document.getElementById('accountList');
    accountList.innerHTML = '';

    bank.forEach((account, index) => {
        accountList.innerHTML += `<li>${index + 1}. ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}</li>`;
    });
}

// Реализация работы кнопок deposit и withdraw
document.getElementById('deposit').onclick = function() {
    const accountId = parseInt(document.getElementById('accountId').value);
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(accountId) || isNaN(amount) || amount <= 0) {
        alert("Введите корректные данные для пополнения");
        return;
    }

    const account = bank.find(acc => acc.accountNumber === accountId);
    if (account) {
        account.deposit(amount);
        alert(`Счет пополнен на ${amount}. Новый баланс: ${account.balance}`);
    } else {
        alert("Аккаунт не найден");
    }
};

document.getElementById('withdraw').onclick = function() {
    const accountId = parseInt(document.getElementById('accountId').value);
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(accountId) || isNaN(amount) || amount <= 0) {
        alert("Введите корректные данные для списания");
        return;
    }

    const account = bank.find(acc => acc.accountNumber === accountId);
    if (account) {
        account.withdraw(amount);
        alert(`Со счета списано ${amount}. Новый баланс: ${account.balance}`);
    } else {
        alert("Аккаунт не найден");
    }
};
