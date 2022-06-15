// HW_2* 
//Задания с разным количеством звездочек:)
//1*:
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования
//}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61

const checkAge1 = function (age) {
    if (age < 18) {
        console.log("You don't have access cause your age is " + age + " It's less then " + 18);
    }
    else if (age >= 18 && age < 61) {
        console.log("Welcome !");
    }
    else if (age > 61) {
        console.log("Keep calm and look Culture channel");
    }
    else {
        console.log("Technical work");
    }
}

checkAge1(17);
checkAge1(18);
checkAge1(62);
checkAge1(61);

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка

const checkAge2 = function (age) {
    if (!age || age == true || age == false || age < 0 || (typeof (age) != 'number')) {
        console.log('Invalid input');
    } else if (age < 18) {
        console.log("You don't have access cause your age is " + age + " It's less then " + 18);
    } else if (age >= 18 && age < 61) {
        console.log("Welcome !");
    }
    else if (age > 61) {
        console.log("Keep calm and look Culture channel");
    }
    else {
        console.log("Technical work");
    }
}
checkAge2("qwe");
checkAge2("");
checkAge2(17);
checkAge2(18);
checkAge2(62);
checkAge2(61);
checkAge2(true);
checkAge2(false);
checkAge2(-17);

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge3 = function (age) {

    if (!age || age == true || age == false || age < 0 || isNaN(age)) {
        console.log("Invalid input");
    } else if (age < 18) {
        console.log("You don't have access cause your age is " + age + " It's less then " + 18);
    } else if (age >= 18 && age < 61) {
        console.log("Welcome !");
    } else if (age > 61) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }

}

checkAge3("17");
checkAge3("qwe");
checkAge3("");
checkAge3(17);
checkAge3(18);
checkAge3(62);
checkAge3(61);
checkAge3(true);
checkAge3(false);
checkAge3(-17);