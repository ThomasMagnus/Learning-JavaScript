'use strict'

let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudget = document.querySelector('.daybudget-value'),
    level = document.querySelector('.level-value'),
    expenses = document.querySelector('.expenses-value'),
    optionalExpenses = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavings = document.querySelector('.monthsavings-value'),
    yearSavings = document.querySelector('.yearsavings-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button') [0],
    optionalExpensesBtn = document.getElementsByTagName('button') [1],
    countBtn = document.getElementsByTagName('button') [2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;


startBtn.addEventListener('click', function(){

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    };

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesItemBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != "" && b != "" && a.length < 50) {
    
            appData.expenses[a] = +b;
            sum += +b
        } else {
            console.log('bad')
            i--
        };
    };

    expenses.textContent = +sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[1] = opt; 
        optionalExpenses.textContent += appData.optionalExpenses[1] + ' ';
    };
});

countBtn.addEventListener('click', function(){

    if (appData.budget != undefined) {

        appData.moneyPerDay = ((appData.budget - +expenses.textContent) / 30).toFixed();
        daybudget.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            level.textContent = 'Низкий уровень дохода';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            level.textContent = 'Средний уровень дохода';
        } else if (appData.moneyPerDay > 2000) {
            level.textContent = 'Высокий уровень дохода';
        } else {
            level.textContent = 'Произошла ошибка';
        };

    } else {
        daybudget.textContent = 'Произошла ошибка';
    };
    
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    };
});

sumValue.addEventListener('input', function() {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.mounthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavings.textContent = appData.mounthIncome.toFixed(1);
    yearSavings.textContent = appData.yearIncome.toFixed(1);
});

percentValue.addEventListener('input', function() {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.mounthIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthSavings.textContent = appData.mounthIncome.toFixed(1);
    yearSavings.textContent = appData.yearIncome.toFixed(1);
});



const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    optionalExpenses: {},
    savings: false,
};

// Второй вариант цикла

// let i = 0;

// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != "" && b != "" && a.length < 50) {
//             console.log('done');
//             appData.expenses[a] = b;
//         } else {
//             console.log('bad');
//             i--;
//         }

//         i++;
// };

// Третий вариант цикла

// let i = 0;

// do {

//         let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//             b = prompt("Во сколько обойдется?", "");

//         if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//             && a != "" && b != "" && a.length < 50) {
//                 console.log('done');
//                 appData.expenses[a] = b;
//             } else {
//                 console.log('bad');
//                 i--;
//             }

//             i++

//     } while(i < 2);





