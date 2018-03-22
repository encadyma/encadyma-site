<template>
  <section id="contact">
    <h2>Contact</h2>
    <p>I am reachable through email at <a href="mailto:encadyma.hi@gmail.com">encadyma.hi@gmail.com</a></p>
    <div class="app-front-email">
      <a href="mailto:encadyma.hi@gmail.com" class="button"><i class="material-icons">email</i>Send an email</a>
      <a href="http://eepurl.com/dgBD3L" target="_blank" class="button primary"><i class="material-icons">local_library</i>Join Newsletter</a>
    </div>
  </section>
</template>
<style lang="scss">
#contact {
  background-color: #333333;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 40px 0;

  h2 {
    font-size: 3em;
    margin: 0;
    margin-bottom: 20px;
  }
  
  p { 
    font-size: 1.2em;
    line-height: 1.2;
    max-width: 240px;
    margin: 0 auto;
  }

  .app-front-email {
    margin-top: 30px;
    .button {
      margin: 0 5px;
      .material-icons { margin-right: 8px; }
    }
  }
}

@media (max-width: 512px) {
  #contact {
    .app-front-email .button {
      margin: 10px;
    }
  }
  
}
</style>