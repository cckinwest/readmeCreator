const inquirer = require("inquirer");
const Markup = require("./markup.js");
const Query = require("./query.js");

function Readme(title, description) {
  this.title = title;
  this.description = description;
  this.sections = [];
  this.contentTable = [];
  this.markup = "";

  this.addSection = async function (sectionTitle) {
    const questions = new Query().sectionQ(sectionTitle);

    const answer = await inquirer.prompt(questions);

    this.sections.push({ title: sectionTitle, content: answer.content });
    this.contentTable.push(sectionTitle);
  };

  this.addBadge = async function () {
    const questions = new Query().badgeQ;

    const { license, color } = await inquirer.prompt(questions);
    this.badge = `https://img.shields.io/static/v1?label=${license}&message=License&color=${color}`;
  };

  this.addGithub = async function () {
    const question = new Query().githubQ;

    const answer = await inquirer.prompt(question);
    this.github = `https://github.com/${answer.username}/`;
  };

  this.addContact = async function () {
    const question = new Query().contactQ;

    const answer = await inquirer.prompt(question);
    this.email = answer.email;
  };

  this.createMarkup = function () {
    const myMarkup = new Markup();

    this.markup += myMarkup.sectionMarkup(1, this.title, this.description);

    this.markup += myMarkup.sectionMarkup(
      2,
      "badge",
      myMarkup.imageMarkup(this.badge, "Badge of the license")
    );

    this.markup += myMarkup.sectionMarkup(
      2,
      "content table",
      myMarkup.contentTableMarkup(this.contentTable)
    );

    for (const section of this.sections) {
      this.markup += myMarkup.sectionMarkup(2, section.title, section.content);
    }

    this.markup += myMarkup.sectionMarkup(
      2,
      "github",
      myMarkup.urlMarkup(this.github, "link to github")
    );

    this.markup += myMarkup.sectionMarkup(
      2,
      "contact",
      myMarkup.emailMarkup(this.email, "send to my email")
    );
  };
}

module.exports = Readme;
