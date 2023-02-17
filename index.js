const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function() {
    output.innerHTML = "Какой ты послушный, молодец!";
});

const elements = document.querySelectorAll('.my-skills__item-h2');

for(let element of elements) {
    element.onclick = function() {
        if (element.classList.contains('close')) {
            element.classList.add('open');
            element.classList.remove('close')
        } else {
            element.classList.add('close')
            element.classList.remove('open');
        }
    }
}
