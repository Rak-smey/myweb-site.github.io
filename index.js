let result = document.getElementById('result');

function insert(char) {
  result.value += char;
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function clearResult() {
  result.value = '';
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}
