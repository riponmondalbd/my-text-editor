// make text bold to click button
const outputBox = document.getElementById('output-box');
let textBold = false;

document.getElementById('btn-bold').addEventListener('click', function () {
    if (textBold) {
        outputBox.style.fontWeight = '';
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
        outputBox.style.fontStyle = '';
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
        outputBox.style.textDecoration = '';
        textUnderline = false;
    } else {
        outputBox.style.textDecoration = 'underline';
        textUnderline = true;
    }
})

// make text left align to click button
document.getElementById('btn-left-align').addEventListener('click', function () {
    outputBox.style.textAlign = 'left';
})
// make text center align to click button
document.getElementById('btn-center-align').addEventListener('click', function () {
    outputBox.style.textAlign = 'center';
})