const calc = document.querySelector('.calculator');
const display = document.querySelector('.display');

calc.addEventListener('click', function(event) {
    if (!event.target.classList.contains('btn')) return;

    // display.innerText = event.target.innerText;

    switch(event.target.innerText) {
        case 'c':
            display.innerText = '0';
            break;

            case '=':
            display.innerText = eval(display.innerText);
            break;   

            default:
                if (display.innerText === '0' && event.target.innerText !== '.') {
                    display.innerText = event.target.innerText;
                } else {
                    display.innerText += event.target.innerText;
                }
        
    }

});