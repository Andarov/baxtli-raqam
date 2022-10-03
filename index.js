// O'zgaruvchilar
const elRefresh = document.querySelector('#refresh');
const elInput = document.querySelector('#input');
const elCheck = document.querySelector('#check');
const elRandomNumber = document.querySelector('#random-number');
const elGuess = document.querySelector('#guess');
let elTotal = document.querySelector('#total');
let elBody = document.querySelector('#body');

// Random raqam yaratish
let random = Math.trunc(Math.random()*20)+1;

// Qolgan urinishlarga dastlabki qiymat berish
elTotal.textContent = 3

const displayMessage = function(message) {
    elGuess.textContent = message;
}

const randomNumber = function(randomNum) {
    elRandomNumber.textContent = randomNum;
}

elCheck.addEventListener('click', function() {
    // Inputga kiritilgan raqam teng bo'lsa
    if(elInput.value == random) {
        randomNumber(random);
        displayMessage('Tabriklaymiz!!!');
        elCheck.disabled = true;
        elBody.classList.add('bg-green-500')
    }
    // Inputga kiritilgan raqam katta bo'lsa
    else if(elInput.value > random) {
        randomNumber("Afsus...");
        displayMessage('Siz kiritgan raqam katta');
    }
    // Inputga kiritilgan raqam kichik bo'lsa
    else if(elInput.value < random) {
        randomNumber("Afsus...");
        displayMessage('Siz kiritgan raqam kichik');
    }

    // Qolgan urinishlardan bitta ayirish
    elTotal.textContent =+ elTotal.textContent -1;

    // Urinishlar tugab qolsa
    if(elTotal.textContent == 0) {
        // Agar teng kelib qolsa
        if(elInput.value == random) {
            randomNumber(random);
            displayMessage('Tabriklaymiz!!!');
            elCheck.disabled = true;
            elBody.classList.add('bg-green-500')
        }
        // Topa olmasa
        else{
            randomNumber("Afsus...");
            displayMessage('Siz yutqazdingiz.');
            elCheck.disabled = true;
            elBody.classList.add('bg-red-300');
        }
    }

    // Yangilash
    elRefresh.addEventListener('click', function() {
        random = Math.trunc(Math.random()*20)+1;
        elCheck.disabled = false;
        randomNumber("?");
        displayMessage("Hali son kiritilgani yo'q");
        elTotal.textContent = 3;
        elInput.value = '';
        elBody.classList.remove('bg-red-300');
        elBody.classList.remove('bg-green-500');
        elBody.classList.add('bg-slate-300');
    })
})