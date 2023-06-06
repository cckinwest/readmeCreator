// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "projectTitle",
    message: "Please enter your project title:",
    type: "input",
  },
  {
    name: "description",
    message: "Please enter the description about the project:",
    type: "input",
  },
  {
    name: "installation",
    message: "Please enter the installation instructions:",
    type: "input",
  },
  {
    name: "usage",
    message: "Please enter the usage information:",
    type: "input",
  },
  {
    name: "contributing",
    message: "Please enter the contribution guidelines:",
    type: "input",
  },
  {
    name: "tests",
    message: "Please enter the test instructions:",
    type: "input",
  },
  {
    name: "license",
    message: "Please choose a license for your application:",
    type: "list",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },
  {
    name: "color",
    message: "Please choose the color of the badge of license:",
    type: "list",
    choices: ["red", "blue", "green", "yellow"],
  },
  {
    name: "username",
    message: "Please enter your Github username:",
    type: "input",
  },
  {
    name: "email",
    message: "Please enter your email address:",
    type: "input",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const {
    projectTitle,
    description,
    installation,
    usage,
    contributing,
    tests,
    license,
    color,
    username,
    email,
  } = data;

  fs.unlink(fileName, (err) =>
    err
      ? console.error("There is no original file. A new file is created.")
      : console.log("The original file is deleted. A new file is created.")
  );

  fs.appendFileSync(fileName, `# ${projectTitle}\n\n`);
  fs.appendFileSync(fileName, `## Description\n ${description}\n\n`);

  function splitJoin(lic) {
    return lic.split(" ").join("-");
  }

  const url = `https://img.shields.io/static/v1?label=${splitJoin(
    license
  )}&message=License&color=${color}`;

  fs.appendFileSync(fileName, `## Badges\n ![GitHub license](${url})\n\n`);

  fs.appendFileSync(fileName, `## Table of Contents\n`);
  fs.appendFileSync(fileName, `- [Installation](#installation)\n`);
  fs.appendFileSync(fileName, `- [Usage](#usage)\n`);
  fs.appendFileSync(fileName, `- [Contributing](#contributing)\n`);
  fs.appendFileSync(fileName, `- [Tests](#tests)\n\n`);

  fs.appendFileSync(fileName, `## Installation\n ${installation}\n\n`);
  fs.appendFileSync(fileName, `## Usage\n ${usage}\n\n`);
  fs.appendFileSync(fileName, `## Contributing\n ${contributing}\n\n`);
  fs.appendFileSync(fileName, `## Tests\n ${tests}\n\n`);

  fs.appendFileSync(
    fileName,
    `## Link to my github\n [${username}'s github](https://github.com/${username}/)\n\n`
  );

  fs.appendFileSync(
    fileName,
    `## Contact\n If you have any questions, you can click [${username}'s email address](mailto:${email})\n\n`
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("readme.md", response);
  });
}

// Function call to initialize app
init();
