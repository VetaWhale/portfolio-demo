const button = document.querySelector('.button');
const output = document.querySelector('.output');

button.addEventListener('click', function() {
    output.innerHTML = "Какой ты послушный, молодец!";
});

const elements = document.querySelector('.my-skills__item-h2');

 elements.addEventListener('click', function() {
    if (elements.classList.contains('close')) {
        elements.classList.add('open');
        elements.classList.remove('close')
    } else {
        elements.classList.add('close')
        elements.classList.remove('open');
        
    }
})