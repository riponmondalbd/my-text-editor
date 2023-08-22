// make text bold to click button
const outputBox = document.getElementById('output-box');
let textBold = false;

document.getElementById('btn-bold').addEventListener('click', function () {
    if (textBold) {
        outputBox.style.fontWeight = 'normal';
        textBold = false;
    }
    else {
        outputBox.style.fontWeight = '700';
        textBold = true;
    }
})

// make text italic to click button

let isItalic = false;

document.getElementById('btn-italic').addEventListener('click', function () {
    if (isItalic) {
        outputBox.style.fontStyle = 'normal';
        isItalic = false;
    } else {
        outputBox.style.fontStyle = 'italic';
        isItalic = true;
    }
});


// make text underline to click button
let textUnderline = false;

document.getElementById('btn-underline').addEventListener('click', function () {
    if (textUnderline) {
        outputBox.style.textDecoration = 'none';
        textUnderline = false;
    } else {
        outputBox.style.textDecoration = 'underline';
        textUnderline = true;
    }
})