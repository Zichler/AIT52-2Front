console.log("hello, objects!");

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
    accountList.innerHTML = ''; // Очищаем список перед добавлением новых элементов

    bank.forEach(account => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`;
        accountList.appendChild(listItem);
    });
}

document.getElementById('deposit').addEventListener('click', () => {
    const accountId = parseInt(document.getElementById('accountId').value);
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(accountId) || isNaN(amount) || amount <= 0) {
        alert("Введите корректные данные для пополнения");
        return;
    }

    const account = bank.find(acc => acc.accountNumber === accountId);
    if (account) {
        account.deposit(amount);
    } else {
        alert("Аккаунт не найден");
    }
});

document.getElementById('withdraw').addEventListener('click', () => {
    const accountId = parseInt(document.getElementById('accountId').value);
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(accountId) || isNaN(amount) || amount <= 0) {
        alert("Введите корректные данные для списания");
        return;
    }

    const account = bank.find(acc => acc.accountNumber === accountId);
    if (account) {
        account.withdraw(amount);
    } else {
        alert("Аккаунт не найден");
    }
});
