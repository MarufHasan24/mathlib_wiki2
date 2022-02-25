/*
 *@todo:
 * loader
 * night mood switch
 * tableData : working mutch
 */

//dependensis
const nightMood = document.getElementById("nightMood");
const h2OnOffBtn = document.getElementsByClassName("opener");
const tableContainer = document.querySelectorAll("div.contentTable");

// getting data from json file

fetch("tableData.json")
  .then((res) => res.json())
  .then((data) => {
    let dataArray = Object.keys(data);
    for (let i = 0; i < dataArray.length; i++) {
      let trs = document.querySelectorAll(".contentTable section div.Tbdy")[i];
      let dataTitle = trs.dataset.title;
      let des = data[dataTitle].des ? `<br />(${data[dataTitle].des})` : "";
      let inputDataArray = data[dataTitle].input.data;
      var inputString = "";
      var workString = `It will <i style="text-decoration : underline;">${data[
        dataTitle
      ].work.Mwork[0].toLowerCase()}${data[dataTitle].work.Mwork.substr(
        1
      )}</i>`;
      let Rtype = data[dataTitle].work.Rtype
        ? `<b>${data[dataTitle].work.Rtype}</b>`
        : "a number";
      for (let n = 0; n < inputDataArray.length; n++) {
        let localDataInputType;
        if (
          !data[dataTitle].input.Type ||
          data[dataTitle].input.Type[n] === "Number" ||
          data[dataTitle].input.Type[n] === "number"
        ) {
          localDataInputType = "a number";
          inputString += `<li>) ${inputDataArray[n]} as ${localDataInputType}</li>`;
        } else {
          localDataInputType = data[dataTitle].input.Type[n]
            ? `<i style="font-weight: bold">${data[dataTitle].input.Type[n]}</i>`
            : "a number";
          inputString += `<li>) ${inputDataArray[n]} as ${localDataInputType}</li>`;
        }
      }
      trs.innerHTML += `<div class="title" style="text-align: center">${data[dataTitle].title}()${des}</div><div class="input"><ol style="list-style-type: decimal">${inputString}</ol></div><div class="works">${workString} ${data[dataTitle].work.work} and then return the result as ${Rtype}</div>`;
    }
  });

/* for (let i = 0; i < 49; i++) {
  let trs = document.querySelectorAll(".contentTable section div.Tbdy")[i];
  let dataTitle = trs.dataset.title;
  console.log(dataTitle);
} */

// nightMood
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

for (let i = 0; i < h2OnOffBtn.length; i++) {
  //let classList = h2OnOffBtn[i].classList;
  h2OnOffBtn[i].onclick = () => {
    if (tableContainer[i].classList.value === "contentTable opend") {
      tableContainer[i].classList.remove("opend");
      tableContainer[i].classList.add("closed");
    } else {
      tableContainer[i].classList.add("opend");
      tableContainer[i].classList.remove("closed");
    }
  };
}
