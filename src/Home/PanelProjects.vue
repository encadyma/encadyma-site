<template>
  <div id="projects">
    <div class="app-projects-column app-projects-info" style="margin-top: 40px;">
      <h2>Projects</h2>
      <p>Individual and group projects that I have been involved in.</p>
    </div>
    <div class="app-projects-container">
      <div class="app-projects-column">
        <project-card v-for="project of projectsFirstRow" :project="project" :key="project.name"></project-card>
      </div>
      <div class="app-projects-column" style="margin-top: 40px;">
        <project-card v-for="project of projectsSecondRow" :project="project" :key="project.name"></project-card>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectCard from '../Components/ProjectCard';
import { ProjectsList } from '../Components/Project';

export default {
  components: { ProjectCard },
  data() {
    return {
      projectsFirstRow: ProjectsList.filter((v, i) => !(i % 2)),
      projectsSecondRow: ProjectsList.filter((v, i) => (i % 2))
    }
  }
}
</script>
<style lang="scss">
#projects {
  display: flex;
  align-content: flex-start;
  justify-content: center;
  padding: 40px 0;

  .app-projects-column {
    width: 300px;
    margin: 0 10px;
    
    &.app-projects-info {
      color: #242424;
      h2 { font-size: 3em; margin: 10px 0; }
      p { font-size: 1.2em; line-height: 1.5; }
      padding-right: 20px;
    }

    .app-project-card { margin: 20px 0; }
  }

  .app-projects-container {
    display: flex;
  }
}

@media (max-width: 1080px) {
  #projects {
    flex-direction: column;
    align-items: center;

    .app-projects-info { text-align: center; }
  }
}

@media (max-width: 640px) {
  .app-projects-column { margin-top: 10px !important; }
  .app-projects-column .app-project-card:last-child { margin-bottom: 0px !important; }
  .app-projects-container {
    flex-direction: column;
  }
}
</style>