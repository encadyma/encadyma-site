<template>
  <div id="about">
    <div id="app-front-about-inner">
      <h2>About</h2>
      <p>I am a developer and student who likes to build on the web. My interest lies in finding overlooked ideas and building attractive, productive software that can help users reach unintended places.</p>
    </div>
    <div id="app-front-about-tools">
      <h4>FREQUENTLY USED TOOLS</h4>
      <div id="app-front-about-tools-list">
        <a class="app-about-tool" href="https://code.visualstudio.com/" target="_blank">
          <img src="../assets/vscode.png"/>
          <p>
            <b>Visual Studio Code</b> for coding<br>
            <span class="enca-text-smalltext">(common languages: Javascript (ES6), HTML + CSS)</span>
          </p>
        </a>
        <a class="app-about-tool" href="https://www.sketchapp.com/" target="_blank">
          <img src="../assets/sketch.png"/>
          <p><b>Sketch</b> for UI designs</p>
        </a>
        <a class="app-about-tool" href="https://vuejs.org/" target="_blank">
          <img src="../assets/vue.png"/>
          <p><b>Vue.js</b> for frontend development</p>
        </a>
        <a class="app-about-tool" href="https://nodejs.org/en/" target="_blank">
          <img src="../assets/nodejs.png"/>
          <p><b>node.js</b> for backend development</p>
        </a>
      </div>
      <p class="enca-text-smalltext">Application icons and trademarks belong to their respective creators. Clicking on an icon will open the respective tool’s website.</p>
    </div>
  </div>
</template>
<style lang="scss">
#about {
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;

  #app-front-about-inner {
    color: #404040;
    margin-left: calc(50% - 500px);
    padding-left: 20px;
    padding-right: 120px;
    h2 {
      font-size: 3em;
      margin: 0;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.2em;
      line-height: 1.5;
      max-width: 400px;
    }
  }

  #app-front-about-tools {
    background-color: #FFFFFF;
    border-bottom: 6px solid #EA6011;
    padding: 20px 40px;
    padding-right: 10%;

    #app-front-about-tools-list {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }

    h4 { margin-bottom: 0; }
    .app-about-tool { cursor: pointer; }
  }
}

@media (max-width: 1080px) {
  #about {
    flex-direction: column;
    padding: 0;

    #app-front-about-inner {
      text-align: center; 
      margin: 40px auto;
      margin-top: 80px;
      padding: 0 20px;
    }

    #app-front-about-tools {
      border-left: 6px solid #EA6011;
      border-bottom: none;
      padding-right: 80px;
      margin-bottom: 40px;
    }
  }
}

@media (max-width: 512px) {
  #about {
    .app-about-tool {
      margin: 5px 10px;
      img, p, b, span {
        display: block;
        margin: 0 auto;
        text-align: center;
      }
      img {
        width: 50%;
        height: auto;
        margin: 10px auto;
      }
      .enca-text-smalltext { display: none; }
      width: 40%;
    }

    #app-front-about-tools {
      h4, p { text-align: center; }
      padding-right: 40px;
      margin-bottom: 0;
    }

    #app-front-about-tools-list {
      flex-direction: row !important;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>