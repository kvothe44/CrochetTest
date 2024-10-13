document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln",
        "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt"
    ];

    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const randomIndex = dayOfYear % quotes.length;

    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
        quoteElement.textContent = quotes[randomIndex];
    }
});

const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
}
    
const decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
      .map(hex => parseInt(hex, 16))
      .map(applySaltToChar)
      .map(charCode => String.fromCharCode(charCode))
      .join('');
}

const urlParams = new URLSearchParams(window.location.search);
const pass = urlParams.get("pass");
console.log(pass);
const myDecipher = decipher(pass);

document.addEventListener('DOMContentLoaded', () => {
    const content = `
    <h1> hi </h1>
    `;
    const main = document.querySelector('.container');
    main.innerHTML = myDecipher("4a1419120f484a1e4748561e1f564a591e47484a591419120f48");
});
