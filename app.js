let p = document.getElementById("p");
let i = 0;
let currentText = "";
function printLetter() {
  let name = document.getElementById("input").value;
  if (currentText !== name) {
    p.innerHTML = "";
    currentText = name;
    i = 0;
  }
  if (i < name.length) {
    let letter = name.charAt(i);
    let span = document.createElement("span");
    p.appendChild(span);
    setTimeout(async () => {
      if (letter !== " ") {
        let startCode = letter >= "A" && letter <= "Z" ? 65 : 97;
        for (let j = startCode; j <= letter.charCodeAt(0); j++) {
          span.innerHTML = String.fromCharCode(j);
          await new Promise((resolve) => setTimeout(resolve, 20));
        }
      } else {
        span.innerHTML = "&nbsp;";
      }
      i++;
      if (i < name.length) {
        printLetter();
      }
    }, 50);
  }
}
document.getElementById("input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    printLetter();
  }
});
