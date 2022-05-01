const loader = document.querySelectorAll(".loader")[0];
const falseBody = document.querySelectorAll(".body")[0];

var switchNightModeAuto = true;
let timeoutsec = 4500;

// temp
/* falseBody.style.display = "block";
loader.style.display = "none"; */

window.onload = () => {
  if (falseBody && loader) {
    function local() {
      falseBody.style.display = "block";
      loader.style.display = "none";
    }
    setTimeout(local, timeoutsec);
  } else {
    document.body.innerHTML = `<style>
    *{
      transition: none;
    }
    body, html {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    
    body {
      background: #0007 url('https://picsum.photos/1000/1000');
      background-blend-mode: multiply;
      height: calc(100% - 30px);
      background-position: center;
      background-size: cover;
      position: relative;
      color: white;
      font-family: "Courier New", Courier, monospace;
      font-size: 25px;
    }
    div.home{
      width: 100vw;
      text-align: center;
      margin: 30px 0;
    }
    div.home a{
      color: #fff;
      background: #000a;
      padding: 5px; 
    }
    section {
      display: flex;
      align-items: center;
      justify-content: center;
      height : 80vh;
      width: 100vw;
    }
    h1{
      font-size: ${(window.innerHeight + window.innerWidth) / 50}px;
      width: 100%;
      text-align: center;
      background: #000a;
    }
    h1 font{
      font-size: ${(window.innerHeight + window.innerWidth) / 100}px;
      font-weight: 300;
    }
    </style>
    <div class="topleft">
      <logo><img src="./MathlibLogo.jpg" alt="mathlib" /></logo></div>
      <div class="home"><a href="index.html">Home</a></div>
      <section>
      <h1>Comming soon...<br><font>very happy to see you here</font></h1>
      </section>
      `;
    const disableselect = (e) => {
      return false;
    };
    document.onselectstart = disableselect;
    document.onmousedown = disableselect;
    /*
    Fun
    setTimeout(() => {
      location.reload();
    }, 5000); */
  }
};
