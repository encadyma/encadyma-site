<template>
  <header>
    <router-link to="#home"><img src="./assets/logo.png" height="60"/></router-link>
    <nav>
      <router-link to="#about" class="enca-nav-element orange"><i class="material-icons">info</i><span>About</span>
      </router-link><router-link to="#projects" class="enca-nav-element blue"><i class="material-icons">assistant</i><span>Projects</span>
      </router-link><router-link to="#contact" class="enca-nav-element green"><i class="material-icons">contact_mail</i><span>Contact</span>
      </router-link><a href="https://github.com/encadyma" target="_blank" class="enca-nav-element purple"><img src="./assets/github.png" height="24"/><span>Github</span></a>
    </nav>
  </header>
</template>
<style lang="scss">
header {
  background-color: #FAFAFA;
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 0 calc(50% - 480px);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  .enca-nav-element {
    max-height: 60px;
  }
}

.enca-nav-element {
  border-bottom: 6px solid #333;
  color: #383838;
  cursor: pointer;
  display: inline-block;
  padding: 16px 20px;
  
  span, i, img { vertical-align: middle; }
  span {
    font-weight: 500;
    text-transform: uppercase;
    margin-left: 8px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }

  &.orange { border-bottom-color: #EA6011; }
  &.blue { border-bottom-color: #0F2AB7; }
  &.green { border-bottom-color: #1BAF34; }
  &.purple { border-bottom-color: #7A0FC2; }
}

@media (max-width: 640px) {
  .enca-nav-element span { display: none; }
}
</style>
