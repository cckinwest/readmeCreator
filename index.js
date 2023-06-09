const fs = require("fs");
const inquirer = require("inquirer");
const readme = require("./lib/readme.js");
const query = require("./lib/query.js");

async function main() {
  const questions = new query().initQ;

  const { title, description } = await inquirer.prompt(questions);
  var myReadme = new readme(title, description);
  var sectionTitles = ["installation", "usage", "contributing", "tests"];

  for (const sectionTitle of sectionTitles) {
    await myReadme.addSection(sectionTitle);
  }

  await myReadme.addBadge();
  await myReadme.addGithub();
  await myReadme.addContact();

  myReadme.createMarkup();

  fs.writeFile("myReadme.md", myReadme.markup, (err) => {
    err
      ? console.error("The file cannot be created.")
      : console.log("The file is created successfully.");
  });
}

main();
