const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    if (value !== null) {
      display.value += value;
    } else if (button.classList.contains('equal')) {
      calculate();
    } else if (button.classList.contains('clear')) {
      clearDisplay();
    }
  });
});

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value) || '';
  } catch (error) {
    display.value = 'Error';
    setTimeout(clearDisplay, 1500);
  }
}


document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
