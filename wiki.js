/*
 *@todo:
 * loader
 * night mood switch
 * tableData : working mutch
 */

//dependensis
const FOnOffBtn = document.getElementsByClassName("opener");
const COnOffBtn = document.getElementsByClassName("closer");
const constantsClass = document.getElementsByClassName("constants")[0];
const functionsClass = document.getElementsByClassName("functions")[0];
const tableContainer = document.querySelectorAll("div.contentTable");

// getting function data from json file
fetch("functions.json")
  .then((res) => res.json())
  .then((data) => {
    let dataArray = Object.keys(data);
    for (let i = 0; i < dataArray.length; i++) {
      let trs = document.querySelectorAll(
        ".contentTable div.main section.functions div.Tbdy"
      )[i];
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
      trs.innerHTML += `<div class="title" style="text-align: center"><p>${data[dataTitle].title}()${des}</p></p></div><div class="input"><ol style="list-style-type: decimal">${inputString}</ol></div><div class="works"><p>${workString} ${data[dataTitle].work.work} and then return the result as ${Rtype}</p></div>`;
    }
  });

fetch("constants.json")
  .then((res) => res.json())
  .then((data) => {
    let dataArray = Object.keys(data);
    for (let i = 0; i < dataArray.length; i++) {
      let trs = document.querySelectorAll(
        ".contentTable div.main section.constants div.tbody div.Tbdy"
      )[i];
      let dataTitle = trs.dataset.title;
      trs.innerHTML += `<div class="title">
                <span>${data[dataTitle].title}</span>
              </div>
              <div class="name">
                <span>${data[dataTitle].name}</span>
              </div>
              <div class="symbol">
                <span><i style="font-size:21px;">${data[dataTitle].symbol}</i></span>
              </div>
              <div class="value">
                <span>${data[dataTitle].value}</span>
              </div>`;
    }
  });

//let classList = FOnOffBtn[i].classList;
FOnOffBtn[0].onclick = () => {
  if (tableContainer[0].classList.value === "contentTable opened") {
    tableContainer[0].classList.remove("opened");
    tableContainer[0].classList.add("closed");
  } else {
    tableContainer[0].classList.add("opened");
    tableContainer[0].classList.remove("closed");
  }
};
COnOffBtn[0].onclick = () => {
  if (tableContainer[0].classList.value === "contentTable opened") {
    tableContainer[0].classList.remove("opened");
    tableContainer[0].classList.add("closed");
  } else {
    tableContainer[0].classList.add("opened");
    tableContainer[0].classList.remove("closed");
  }
};

function ACommon(param) {
  if (param === "constants") {
    tableContainer[0].classList.remove("opened");
    tableContainer[0].classList.add("closed");
  } else {
    tableContainer[0].classList.add("opened");
    tableContainer[0].classList.remove("closed");
  }
}
