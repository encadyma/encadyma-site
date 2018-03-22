<template>
  <div :name="description" style="display: inline-block;">
    <img v-if="name === 'github'" src="../assets/github.png" :height="height"/>
    <img v-else-if="name === 'githubw'" src="../assets/githubw.png" :height="height"/>
    <i v-else class="material-icons">{{name}}</i>
  </div>
</template>
<script>
export default {
  props: ['name', 'height', 'description']
}
</script>
