<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <home-cover></home-cover>
      <home-about></home-about>
      <home-projects></home-projects>
      <home-contact></home-contact>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './Header';
import AppFooter from './Footer';
import HomeCover from './Home/Cover';
import HomeAbout from './Home/PanelAbout';
import HomeProjects from './Home/PanelProjects';
import HomeContact from './Home/PanelContact';

export default {
  name: 'app',
  components: { AppHeader, AppFooter, HomeCover, HomeAbout, HomeProjects, HomeContact },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import url('./normalize.css');
@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300,400,500,700|Source+Serif+Pro:400,700|Material+Icons');

* { box-sizing: border-box; }

html, body {
  font-family: 'Alegreya Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  margin-top: 60px;
}

h1, h2, h3 {
  font-family: 'Source Serif Pro', serif;
}

a {
  color: #21A6E2;
  font-weight: 700;
  text-decoration: none;
}

button, .button {
  background-color: #FFFFFF;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 16px 8px rgba(101, 101, 101, .2);
  color: #3F3F3F;
  cursor: pointer;
  display: inline-block;
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: 700;
  padding: 16px 25px;
  letter-spacing: 1px;
  text-transform: uppercase;

  * { vertical-align: middle; }

  &:hover {
    background-color: #fafafa;
  }

  &:active {
    background-color: #e0e0e0;
  }

  &.primary {
    background-color: #21A6E2;
    color: #FFFFFF;
    &:hover { background-color: darken(#21A6E2, 2%); }
    &:active { background-color: darken(#21A6E2, 8%); }
  }
}

.enca-text-smalltext {
  color: rgba(0, 0, 0, .35);
  font-size: 0.9em;
  font-weight: 700;
  line-height: 1.2;
}

.app-about-tool {
  color: #242424;
  display: block;
  font-weight: 400;
  margin-top: 16px;

  img, p { display: inline-block; vertical-align: middle; }
  img { width: 40px; height: 40px; }
  p { margin: 0; margin-left: 10px; font-size: 1.1em; }
}

</style>
