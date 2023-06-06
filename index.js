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
const heading = document.querySelector("h1");

// define an array of styles to cycle through
const styles = [
  { color: "red", fontWeight: "normal", fontStyle: "normal" },
  { color: "blue", fontWeight: "bold", fontStyle: "italic" },
  { color: "green", fontWeight: "normal", fontStyle: "italic" },
  { color: "purple", fontWeight: "bold", fontStyle: "normal" }
];

// set an initial index for the style array
let styleIndex = 0;

// define the animation function
function animateStyle() {
  // update the styles of the heading
  const currentStyle = styles[styleIndex];
  heading.style.color = currentStyle.color;
  heading.style.fontWeight = currentStyle.fontWeight;
  heading.style.fontStyle = currentStyle.fontStyle;
  
  // increment the style index or reset it if we've reached the end of the array
  if (styleIndex < styles.length - 1) {
    styleIndex++;
  } else {
    styleIndex = 0;
  }
}

// call the animation function every 500 milliseconds
setInterval(animateStyle, 500);


