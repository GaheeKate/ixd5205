
function redirect() {
    window.location.href = "phonepad.html";
}

const phoneButtons = document.querySelectorAll('.phonebtn');
const phoneInput = document.getElementById('phone-input');
const va = document.getElementById('va');
const voice = document.getElementById('voice');

phoneButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        phoneInput.value += value;
    });
});

voice.addEventListener('click', () => {
    va.style.display = 'block';
});
