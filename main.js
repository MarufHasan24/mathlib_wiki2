const a = document.querySelectorAll("a");
const code = document.querySelectorAll("code");
let codeData = [];

for (let i = 0; i < a.length; i++) {
  if (a[i].dataset.target === "blank" || !a[i].dataset.target) {
    a[i].target = "_blank";
  }
}

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

function nightMoodChange() {
  if (switchNightModeAuto) {
    if (
      (new Date().getHours() >= 22 && new Date().getHours() <= 24) ||
      (new Date().getHours() <= 5 && new Date().getHours() >= 0)
    ) {
      nightMood.getElementsByTagName("img")[0].src =
        "outline_dark_mode_black_24dp.png";
      falseBody.classList.remove("Day");
      falseBody.classList.add("Night");
    } else {
      nightMood.getElementsByTagName("img")[0].src =
        "outline_light_mode_black_24dp.png";
      falseBody.classList.add("Day");
      falseBody.classList.remove("Night");
    }
  }
  nightMood.onclick = function () {
    switchNightModeAuto = false;
    if (falseBody.className === "body Day") {
      nightMood.getElementsByTagName("img")[0].src =
        "outline_dark_mode_black_24dp.png";
      falseBody.classList.remove("Day");
      falseBody.classList.add("Night");
    } else {
      nightMood.getElementsByTagName("img")[0].src =
        "outline_light_mode_black_24dp.png";
      falseBody.classList.add("Day");
      falseBody.classList.remove("Night");
    }
  };
}
nightMoodChange();
