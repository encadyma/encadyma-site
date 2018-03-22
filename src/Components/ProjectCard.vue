<template>
  <div class="app-project-card" :class="cardColor">
    <div class="app-project-card-head">
      <img class="app-project-image" height="60" :src="imageUrl"/>
      <div class="app-project-card-head-desc">
        <h4>{{project.name}}</h4>
        <i v-if="project.author" style="display: block; font-size: 12px; margin-bottom: 6px;">By {{project.author}}</i>
        <div>{{project.description}}</div>
      </div>
    </div>
    <div class="app-project-card-props">
      <div class="app-project-card-prop" v-for="property of project.properties" :key="property.prop">
        <b>{{property.prop}}</b><span>{{property.value}}</span>
      </div>
    </div>
    <div class="app-project-card-action">
      <div class="app-project-card-quickacts">
        <a :href="action.link" target="_blank" v-for="action of project.quickActions" :key="action.text">
          <icon :name="action.icon" :description="action.text" height="20"></icon>
        </a>
      </div>
      <a :href="project.primaryAction.link" target="_blank" class="app-project-card-mainact">
        <span>{{project.primaryAction.text}}</span>
        <icon :name="project.primaryAction.icon" :description="project.primaryAction.text" height="20"></icon>
      </a>
    </div>
  </div>
</template>
<script>
import Icon from './Icon';

export default {
  components: { Icon },
  props: ['project'],
  computed: {
    imageUrl() {
      return require(`../assets/${this.project.icon}`);
    },
    cardColor() {
      return {
        red: this.project.color === 'red',
        amber: this.project.color === 'amber',
        purple: this.project.color === 'purple',
        gray: this.project.color === 'gray',
      }
    }
  }
}
</script>

<style lang="scss">
.app-project-card {
  background-color: #455A64;
  color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 0 16px 8px rgba(0, 0, 0, .2);
  overflow: hidden;

  .app-project-card-head {
    display: flex;
    align-items: flex-start;
    padding: 20px;
    
    .app-project-card-head-desc {
      h4 { margin: 4px 0; font-size: 1.4em; }
      margin-left: 12px;
    }
  }

  .app-project-card-prop {
    display: flex;
    font-size: 0.9em;
    justify-content: space-between;
    padding: 12px 20px;

    b, span { vertical-align: middle; }
    b { text-transform: uppercase; }

    &:nth-child(odd) {
      background-color: #37474F;
    }
  }

  .app-project-card-action {
    background-color: #263238;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;

    .app-project-card-quickacts a:hover {
      opacity: 0.8;
    }

    .app-project-card-mainact {
      color: #FFFFFF;
      font-size: 0.9em;
      span { text-transform: uppercase; }
      .material-icons { font-size: 18px; margin-left: 4px; }
      * { vertical-align: middle; }
      &:hover { opacity: 0.8; }
    }
  }

  // Colors
  &.red {
    background-color: #D32F2F;
    .app-project-card-prop:nth-child(odd) { background-color: #C62828; }
    .app-project-card-action { background-color: #B71C1C; }
  }

  &.amber {
    background-color: #FB8C00;
    .app-project-card-prop:nth-child(odd) { background-color: #F57C00; }
    .app-project-card-action { background-color: #E65100; }
  }

  &.purple {
    background-color: #7B1FA2;
    .app-project-card-prop:nth-child(odd) { background-color: #6A1B9A; }
    .app-project-card-action { background-color: #4A148C; }
  }
}
</style>