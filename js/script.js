'use strict'

let startElement = document.getElementById('start'),
    daybudget = document.querySelector('.daybudget-value'),
    level = document.querySelector('.level-value'),
    expenses = document.querySelector('.expenses-value'),
    optionalExpenses = document.querySelector('.optionalexpenses-value'),
    income = document.querySelector('.income-value'),
    monthSavings = document.querySelector('monthsavings-value'),
    yearSavings = document.querySelector('.yearsavings'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button') [0],
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

function start() {

    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

};

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    optionalExpenses: {},
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = +prompt("Во сколько обойдется?", "");
        
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != "" && b != "" && a.length < 50) {
        
                appData.expenses[a] = b;
            } else {
                console.log('bad')
                i--
            }
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert('Бюджет на 1 день составляет: ' + appData.moneyPerDay + 'руб.');
    },

    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Низкий уровень дохода');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатака');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        };
    },

    checkSavings: function() {
        if (appData.savings == true) {

            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
    
            appData.mounthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.mounthIncome);
    
        }
    },
    
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
        
            let opt = prompt('Статья необязательных расходов?', '');
            appData.optionalExpenses[1] = opt; 
    
        };
    },

    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            alert("Вы ввели некорректные данные или не ввели их вовсе");
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        } else {

            appData.income = items.split(", ");
            appData.income.push(prompt("Может, что-то ещё?"));
            appData.income.sort();
            
        }
    }
};

appData.income.forEach(function(item, i) {
    alert("Способы доп. заработка: " + (i+1) + " - " + item);
});

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
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





