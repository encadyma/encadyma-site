<template>
  <section id="home">
    <div id="app-front-cover-inner">
      <h1>Kevin Mo</h1>
      <p>web developer as <a href="https://github.com/encadyma" target="_blank">@encadyma</a></p>
    </div>
    <img id="app-front-cover-image" src="../assets/logo.png" :style="{ transform: 'translateY(' + imageTransform + 'px)' }"/>
  </section>
</template>
<script>
export default {
  data() {
    return {
      imageTransform: 0
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      this.imageTransform = -(window.scrollY / 4);
    });
  }
}
</script>
<style lang="scss">
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  position: relative;

  #app-front-cover-inner {
    text-align: center;
    padding-left: 200px;
    h1 {
      color: #242424;
      font-size: 5em;
      margin: 10px 0;
      min-width: 350px;
    }
    p {
      color: #606060;
      font-size: 1.2em;
      margin: 0;
    }
  }

  #app-front-cover-image {
    height: 800px;
    margin-top: 140px;
    z-index: -1;
    opacity: 0.8;
    filter: drop-shadow(0 4px 32px rgba(0, 0, 0, .1));
  }
}

@media (max-width: 1080px) {
  #home {
    #app-front-cover-inner {
      background-color: rgba(255, 255, 255, .8);
      border-radius: 8px;
      padding: 40px;
    }
    #app-front-cover-image {
      position: absolute;
    }
  }
}

@media (max-width: 640px) {
  #home {
    height: 300px; 
    #app-front-cover-inner {
      h1 { font-size: 4em; }
    }
  }
}
</style>
