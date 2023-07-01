let input = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target);
        if(e.target.innerHTML === '='){
            input = eval(input);
            document.querySelector('input').value = input;
        }
        else {
            input += e.target.innerHTML;
            document.querySelector('input').value = input;
        }
    })
})