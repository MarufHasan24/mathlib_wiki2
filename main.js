const a = document.querySelectorAll("a");
const code = document.querySelectorAll("code");
let codeData = [];

for (let i = 0; i < code.length; i++) {
  codeData[i] = code[i].innerHTML;
  code[i].onclick = function () {
    try {
      navigator.clipboard.writeText(codeData[i]);
      alert(`copied successfully! copied text is "${codeData[i]}"`);
    } catch (e) {
      alert(
        `can't copy the text for ${e} type error. Please copy it manually. Thanks!`
      );
    }
  };
}
