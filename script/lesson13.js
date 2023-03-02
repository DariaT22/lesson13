"use strict"
//Задание 1
let name = prompt('Как вас зовут?');
let age = prompt('Сколько вам лет?');
let city = prompt('Где вы живёте?');
let phone = prompt('Ваш номер телефона?');
let email = prompt('Ваша почта?');
let company = prompt('Где вы работаете?');

console.log('Меня зовут ' + name + '. Мне '+ age + ' лет. Я проживаю в ' + city + ' и работаю в компании ' + company +'. Мои контактные данные: ' + phone +', ' + email + '.');

//Задание 2
console.log(name + ' родился в '+ (2023 - age));

//Задание 3
let str = '123123';
if ((str[0] + str[1] + str[2]) == (str[3] + str[4] + str[5])){
    console.log('Да');
} else {
    console.log('Нет');
}

//Задание 4
let a = 1;
if (a > 0){
    console.log('Верно');
} else if (a <= 0) {
    console.log('Неверно');
}

//Задание 5
a = 10;
let b = 2;

let sum = a + b;
let diff = a - b;
let mult = a * b;
let div = a / b;
if (sum > 1){
    let square = sum * sum;
    console.log(sum, diff, mult, div, square);
} else if (sum <= 1){
    console.log(sum, diff, mult, div);
}

//Задание 6
if((a > 2 && a < 11) || (b >= 6 && b < 14)){
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 7
let n = 2;

if (n >= 0 && n <= 15){
    console.log('Первая четверть часа');
} else if (n > 15 && n <= 30){
    console.log('Вторая четверть часа');
} else if(n > 30 && n <= 45){
    console.log('Третья четверть часа');
} else if (n > 45 && n <= 59){
    console.log('Четвёртая четверть часа');
} else if (n < 0 || n > 59){
    console.log('Неверное число');
}

//Задание 8
let day = 1;

if (day >= 1 && day <= 10){
    console.log('Первая декада месяца');
} else if (day >= 11 && day <= 20){
    console.log('Вторая декада месяца');
} else if (day >= 21 && day <= 31){
    console.log('Третья декада месяца');
} else if (day < 1 || day > 31){
    console.log('Неверное число');
}

//Задание 9
let days = 5;

let year = days / 365;
let month = days / 31;
let week = days / 7;
let hour = days * 24;
let minute = days * 24 * 60;
let seconds = days * 24 * 60 * 60;
if (days < 365){
    console.log('Меньше года');
};

if (days < 31){
    console.log('Меньше месяца');
};

if(days < 7){
    console.log('Меньше недели');
};
console.log(year, month, week, hour, minute, seconds);

//Задание 10
day = Number(prompt('Введите день:'));
if (day <= 31){
    month = 1;
} else if(day <= 59){
    month = 2;
} else if(day <= 90){
     month = 3;
} else if(day <= 120){
     month = 4;
} else if(day <= 151){
     month = 5;
} else if(day <= 181){
     month = 6;
} else if(day <= 212){
     month = 7;
} else if(day <= 242){
     month = 8;
} else if(day <= 273){
     month = 9;
} else if(day <= 303){
     month = 10;
} else if(day <= 334){
     month = 11;
} else if(day <= 365){
    month = 12;
}
switch(month){
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
}