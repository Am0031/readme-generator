//requiring email validator package
const validator = require("email-validator");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What's your project title?",
    validate: (answer) =>
      !answer ? "Please enter a title for your project" : true,
  },
  {
    type: "input",
    name: "description",
    message: "Please add a short description of your project :",
    default: "No details provided yet",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please give the installation instructions for your project. Enter each line of code as you would type it in the CLI, with each line separated by a comma :",
    validate: (answer) =>
      !answer
        ? "Please enter at least one instruction to get your project running in the CLI."
        : true,
  },
  {
    type: "input",
    name: "usage",
    message: "Please give the usage information for your project :",
    default: "No details provided yet",
  },
  {
    type: "confirm",
    name: "hasContributionGuidelines",
    message: "Would you like to add contribution guidelines for your project?",
  },
  {
    type: "input",
    name: "contributions",
    message: "Please add the contribution guidelines for your project :",
    when: (answers) => answers.hasContributionGuidelines,
    default: "No details provided yet",
  },
  {
    type: "confirm",
    name: "hasTestInstructions",
    message: "Would you like to add test instructions for your project?",
  },
  {
    type: "input",
    name: "test",
    message:
      "Please add the test instruction command line for your project as you would type it in the CLI :",
    when: (answers) => answers.hasTestInstructions,
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a licence for your project :",
    choices: [
      "MIT",
      "APACHE_2.0",
      "GPL_3.0",
      "BSD_3",
      "WTFPL",
      "The Unlicense",
      "Other",
    ],
  },
  {
    type: "input",
    name: "licenseText",
    message: "Please type the name of the license you'd like to add :",
    when: (answers) => answers.license === "Other",
    validate: (answer) =>
      answer.length > 20
        ? "Please make sure your license name is under 20 characters."
        : true,
  },
  {
    type: "input",
    name: "userName",
    message: "What's your github username? [This entry is case sensitive]",
    validate: (answer) =>
      !answer ? "Please provide your github username" : true,
  },
  {
    type: "input",
    name: "email",
    message: "What's your email address?",
    validate: (email) =>
      !validator.validate(email) ? "Please enter a valid email address" : true,
  },
  {
    type: "input",
    name: "fileName",
    message:
      "What name would you like for your .md file? Please provide only the name without the .md extension.",
    default: "generatedreadme",
  },
];

module.exports = questions;
