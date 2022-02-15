/*
 *@todo:
 * loader
 * night mood switch
 * tableData : working mutch
 */

//dependensis
const nightMood = document.getElementById("nightMood");

// getting data from json file
fetch("tableData.json")
  .then((res) => res.json())
  .then((data) => {
    let dataArray = Object.keys(data);
    for (let i = 0; i < dataArray.length; i++) {
      let trs = document.querySelectorAll(".content-table table tr.Tbdy")[i];
      let dataTitle = trs.dataset.title;
      let des = data[dataTitle].des ? `<br />(${data[dataTitle].des})` : "";
      let inputDataArray = data[dataTitle].input.data;
      var inputString = "";
      var workString = `${data[dataTitle].work.Mwork[0].toUpperCase()}${data[
        dataTitle
      ].work.Mwork.substr(1)}`;
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
      trs.innerHTML += `<th class="title" style="text-align: center">${data[dataTitle].title}()${des}</th><th class="input"><ol style="list-style-type: decimal">${inputString}</ol></th><th class="works">${workString} the ${data[dataTitle].work.work} and return the result as ${Rtype}</th>`;
    }
  });

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
