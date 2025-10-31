const button = document.getElementById("button");
let number = document.getElementById("compteur");


let count = 0;

function addOne() {
    button.addEventListener('click', function (event) {
        count++;
        number.textContent = count;
    });
};

addOne();

