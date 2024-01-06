const calc = document.querySelector('.calculator'); // Определяем сам калькулятор по классу
const display = document.querySelector('.display'); // Определяем дисплей вывода по классу

// добавляем слушатель для кнопок
calc.addEventListener('click', function(event) {
    if (!event.target.classList.contains('btn')) return;

// перебираем кнопки операций с помощью конструкции switch
    switch(event.target.innerText) {
        case 'c': // если нажата кнопка 'c' - выводим на дисплее 0
            display.innerText = '0';
            break;

            case '=': // если нажата кнопка '=' - c помощью функции eval выводим  результат арифмитического выражения
            display.innerText = eval(display.innerText);
            break;   

            default: // условие по умолчанию: если на диплее 0 и не нажата '.', вывести на дисплей кликнутые кнопки
                if (display.innerText === '0' && event.target.innerText !== '.') {
                    display.innerText = event.target.innerText;
                } else { 
                    display.innerText += event.target.innerText;
                }
        
    }

});