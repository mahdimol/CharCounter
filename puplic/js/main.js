const input = document.querySelector("textarea");
const remaining = document.querySelector(".max-length");
const inputMaxLength = +input.getAttribute("maxlength");

input.addEventListener("input", function () {
  const remainingChars = inputMaxLength - input.value.length;

  remaining.textContent = remainingChars;

  if (remainingChars < 10) {
    remaining.style.color = "red";
  } else {
    remaining.style.color = "#2e86de";
  }
});
