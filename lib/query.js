function Query() {
  this.initQ = [
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the description of your project?",
      name: "description",
    },
  ];

  this.sectionQ = function (sectionTitle) {
    return [
      {
        type: "input",
        message: `What is the ${sectionTitle}?`,
        name: "content",
      },
    ];
  };

  this.badgeQ = [
    {
      name: "license",
      message: "Please choose a license for your application:",
      type: "list",
      choices: [
        "GNU-AGPLv3",
        "GNU-GPLv3",
        "GNU-LGPLv3",
        "Mozilla-Public-License-2.0",
        "Apache-License-2.0",
        "MIT-License",
        "Boost-Software License-1.0",
        "The-Unlicense",
      ],
    },
    {
      name: "color",
      message: "Please choose the color of the badge of license:",
      type: "list",
      choices: ["red", "blue", "green", "yellow"],
    },
  ];

  this.githubQ = [
    {
      type: "input",
      message: `What is the username of your github?`,
      name: "username",
    },
  ];

  this.contactQ = [
    {
      type: "input",
      message: `What is your email?`,
      name: "email",
    },
  ];
}

module.exports = Query;
