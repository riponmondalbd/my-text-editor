// make text bold to click button
document.getElementById('btn-bold').addEventListener('click', function () {
    const outputBox = document.getElementById('output-box');
    outputBox.style.fontWeight = '700';
})

// make text italic to click button
document.getElementById('btn-italic').addEventListener('click', function () {
    const outputBox = document.getElementById('output-box');
    outputBox.style.fontStyle = 'italic';
})

