const nightMood = document.getElementById("nightMood");
const scrollUpBtn = document.createElement("div");
const menu = document.querySelectorAll("ul.dropdown")[0];
const menuBtn = document.querySelectorAll("#menuBtn")[0];

scrollUpBtn.className = "scrollUpBtn";
scrollUpBtn.innerHTML = "menu";
scrollUpBtn.style.display = "none";
falseBody.appendChild(scrollUpBtn);
falseBody.onscroll = function () {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50 ||
    falseBody.scrollTop > 50
  ) {
    scrollUpBtn.innerHTML = "up";
    scrollUpBtn.style.display = "flex";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

scrollUpBtn.addEventListener("click", () => {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50 ||
    falseBody.scrollTop > 50
  ) {
    falseBody.scrollTop = 0;
  } else {
  }
});

menuBtn.addEventListener("click", () => {
  let style = menu.style.display;
  if (menuBtn.className === "permanent") {
    if (style === "flex") {
      menu.style.display = "none";
      menuBtn.style.color = "#8fffff";
      menuBtn.style.backgroundColor = "#222e";
    } else {
      menuBtn.style.color = "#222";
      menuBtn.style.backgroundColor = "#ccce";
      menu.style.display = "flex";
    }
  }
});
menuBtn.addEventListener("dblclick", () => {
  if (menuBtn.className === "hover") {
    menuBtn.className = "permanent";
  } else {
    menuBtn.className = "hover";
  }
});

menu.addEventListener("mouseover", () => {
  hover("over");
});
menuBtn.addEventListener("mouseover", () => {
  hover("over");
});
menu.addEventListener("mouseout", () => {
  hover("out");
});
menuBtn.addEventListener("mouseout", () => {
  hover("out");
});

function hover(state) {
  if (menuBtn.className === "hover") {
    if (state === "over") {
      //over
      menuBtn.style.color = "#eee";
      menuBtn.style.backgroundColor = "#3fa1af";
      menu.style.display = "flex";
    } else {
      //out
      menuBtn.style.color = "#eee";
      menuBtn.style.backgroundColor = "#222e";
      menu.style.display = "none";
    }
  }
}

//nigh mood
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
