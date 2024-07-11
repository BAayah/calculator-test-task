let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', () => {
    display.innerText = null;
});

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){            
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error";
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});