
// обратились к селектору
const button = document.querySelector('#button');

//добавляем слушателя
let counter = 0;

button.addEventListener('click', () => {
    ++counter;
    if(counter % 2 != 0) {
    button.innerText = 'ON';
    }
    else {
        button.innerText = 'OFF';
        yellow.style.backgroundColor = 'white';
        red.style.backgroundColor = 'white';
        green.style.backgroundColor = 'white';
    }
});

// обратились к селектору цветов светофора
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');

//обработчики событий на смену цвета
red.addEventListener('click', ()=>{
    if(button.innerText == 'ON') {
        red.style.backgroundColor = 'red';
        yellow.style.backgroundColor = 'white';
        green.style.backgroundColor = 'white';
    }
} );

yellow.addEventListener('click', ()=>{
    if(button.innerText == 'ON') {
        yellow.style.backgroundColor = 'yellow';
        red.style.backgroundColor = 'white';
        green.style.backgroundColor = 'white';
    }
} );

green.addEventListener('click', ()=>{
    if(button.innerText == 'ON') {
        green.style.backgroundColor = 'green';
        red.style.backgroundColor = 'white';
        yellow.style.backgroundColor = 'white';
    }
} );





