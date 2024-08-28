function encrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) + 3);
    }
    return result;
}

function decrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) - 3);
    }
    return result;
}

document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encrypt(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decrypt(inputText);
    document.getElementById('outputText').value = decryptedText;
});
