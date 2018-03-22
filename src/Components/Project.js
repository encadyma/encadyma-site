export class Property {
  constructor(prop, value) {
    this.prop = prop;
    this.value = value;
  }
}

export class Action {
  constructor(icon, text, link) {
    this.icon = icon;
    this.text = text;
    this.link = link;
  }
}

export class Project {
  constructor(name, author, description, properties, quickActions, primaryAction, color, icon) {
    this.name = name;
    this.author = author;
    this.description = description;
    this.properties = properties;
    this.quickActions = quickActions;
    this.primaryAction = primaryAction;
    this.color = color;
    this.icon = icon;
  }
}

export let ProjectsList = [
  // PROJECT #1: BIBLIO
  new Project(
    "Project Biblio", null, "Search tool for collecting scholarly resources",
    [
      new Property("Released", "December 2017"),
      new Property("Written In", "Angular, node.js"),
      new Property("Project Type", "Web App"),
      new Property("Designed For", "Students, educators"),
      new Property("Status", "In Development")
    ],
    [
      new Action("githubw", "Github Repo", "https://github.com/avediorg/biblio"),
    ],
    new Action("arrow_forward", "Go to Project Website", "https://biblio.encadyma.com"),
    "red", "biblio.png"
  ),
  // PROJECT #2: SWISHBOX
  new Project(
    "Swishbox", null, "Youtube music player on the desktop",
    [
      new Property("Released", "December 2017"),
      new Property("Written In", "Electron, Vue, node.js"),
      new Property("Project Type", "Desktop App (Web)"),
      new Property("Designed For", "Music enthusiasts"),
      new Property("Status", "Nightly, In Development")
    ],
    [
      new Action("githubw", "Github Repo", "https://github.com/encadyma/swishbox"),
    ],
    new Action("arrow_forward", "Download from Github", "https://github.com/encadyma/swishbox/releases"),
    "purple", "swishbox.png"
  ),
  // PROJECT #3: PRISM
  new Project(
    "Project Prism", null, "Image manager and ecommerce for photographers",
    [
      new Property("Released", "December 2017"),
      new Property("Written In", "Vue, Firebase"),
      new Property("Project Type", "Web App"),
      new Property("Designed For", "Photographers"),
      new Property("Status", "Alpha, In Development")
    ],
    null,
    new Action("arrow_forward", "Go to Project Website", "https://prism.encadyma.com"),
    "gray", "prism.png"
  ),
  // PROJECT #4: SPARTAN CONNECT
  new Project(
    "Spartan Connect", "Spartan Connect Developer Team", "Platform for school announcements",
    [
      new Property("Released", "Summer 2017"),
      new Property("Written In", "Angular, React Native, node.js"),
      new Property("Project Type", "Mobile + Web App"),
      new Property("Designed For", "Schools and students"),
      new Property("Status", "Released Stable")
    ],
    [
      new Action("githubw", "Github Repo", "https://github.com/SpartanConnect"),
    ],
    new Action("arrow_forward", "Go to Project Website", "https://connect.lchsspartans.net"),
    "amber", "spartanconnect.png"
  ),

]