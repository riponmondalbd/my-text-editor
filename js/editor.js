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
});

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
});

// make text left align to click button
document.getElementById('btn-left-align').addEventListener('click', function () {
    outputBox.style.textAlign = 'left';
});

// make text center align to click button
document.getElementById('btn-center-align').addEventListener('click', function () {
    outputBox.style.textAlign = 'center';
});

// make text center align to click button
document.getElementById('btn-right-align').addEventListener('click', function () {
    outputBox.style.textAlign = 'right';
});

// make text uppercase capitalize and lowercase
let textCaseTransform = '';

document.getElementById('text-transform').addEventListener('click', function () {
    if (textCaseTransform === '') {
        outputBox.style.textTransform = 'uppercase';
        textCaseTransform = 'uppercase';
    }
    else if (textCaseTransform === 'uppercase') {
        outputBox.style.textTransform = 'capitalize';
        textCaseTransform = 'capitalize';
    }
    else if (textCaseTransform === 'capitalize') {
        outputBox.style.textTransform = 'lowercase';
        textCaseTransform = 'lowercase';
    }
    else {
        outputBox.style.textTransform = '';
        textCaseTransform = '';
    }
});

//change color using color picker
document.getElementById('color-picker').addEventListener('input', function (colorCustom) {
    const colorPicker = document.getElementById('color-picker');
    const selectColor = colorPicker.value;
    outputBox.style.color = selectColor;
})
