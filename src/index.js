// O'zgaruvchilar
const elRefresh = document.querySelector('#refresh');
const elInput = document.querySelector('#input');
const elCheck = document.querySelector('#check');
const elRandomNumber = document.querySelector('#random-number');
const elGuess = document.querySelector('#guess');
let elTotal = document.querySelector('#total');

// Random raqam yaratish
const random = Math.trunc(Math.random()*20)+1;

// Qolgan urinishlarga dastlabki qiymat berish
elTotal.textContent = 5

elCheck.addEventListener('click', function() {
    // Inputga kiritilgan raqam teng bo'lsa
    if(elInput.value == random) {
        elRandomNumber.textContent = random;
        elGuess.textContent = "Tabriklaymiz!!!";
        elCheck.disabled = true;
        elInput.value = ''
    }
    // Inputga kiritilgan raqam katta bo'lsa
    else if(elInput.value > random) {
        elRandomNumber.textContent = 'Afsus...';
        elGuess.textContent = "Siz kiritgan raqam katta";
    }
    // Inputga kiritilgan raqam kichik bo'lsa
    else if(elInput.value < random) {
        elRandomNumber.textContent = 'Afsus...';
        elGuess.textContent = "Siz kiritgan raqam kichik";
    }

    // Qolgan urinishlardan bitta ayirish
    elTotal.textContent =+ elTotal.textContent -1;

    // Urinishlar tugab qolsa
    if(elTotal.textContent == 0) {
        elRandomNumber.textContent = 'Yutqazdingiz';
        elCheck.disabled = true;
        elInput.value = ''
    }

    // Yangilash
    elRefresh.addEventListener('click', function() {
        elCheck.disabled = false;
        elRandomNumber.textContent = '?';
        elGuess.textContent = "Hali son kiritilgani yo'q";
        elTotal.textContent = 5
        elInput.value = ''
    })
})