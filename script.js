const body = document.querySelector("body");
const generateBtn = document.querySelector(".generate-btn");
const generateText = document.querySelector(".generate-color");

const randomColor = () => {
  let r = Math.floor(Math.random() * 255 + 1);
  let g = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);
  let color = `${r}, ${g}, ${b}`;

  generateText.textContent = `rgb (${color})`;
  body.style.backgroundColor = `rgb(${color})`;
};

const copyToClipboard = () => {
  const v = generateText.textContent;
  const cb = navigator.clipboard;
  cb.writeText(v).then(() => alert(`Skopiowano! ${v}`));
};

generateBtn.addEventListener("click", randomColor);
generateText.addEventListener("click", copyToClipboard);
