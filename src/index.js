//requiring inquirer from installed node modules - inquirer will be used to prompt questions and get answers
import inquirer from "inquirer";

//requiring fs module from Node.js core - fs will be used to write into the files
import fs from "fs";

//requiring email validator package
import * as EmailValidator from "email-validator";

const questions = [
  {
    type: "input",
    name: "title",
    message: "What's your project title?",
    validate: (answer) => {
      if (!answer) {
        return "Please enter a title for your project";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please add a short description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Please give the installation instructions for your project",
  },
  {
    type: "input",
    name: "usage",
    message: "Please give the usage information for your project",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please give the contribution guidelines for your project",
  },
  {
    type: "input",
    name: "test",
    message: "Please give the test instructions for your project",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a licence for your project",
    choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "The Unlicense", "None"],
  },
  {
    type: "input",
    name: "userName",
    message: "What's your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What's your email address?",
    validate: (email) => {
      if (!EmailValidator.validate(email)) {
        return "Please enter a valid email address";
      } else {
        return true;
      }
    },
  },
];

const init = async () => {
  const userResponses = await inquirer.prompt(questions);
  console.log("Your responses:", userResponses);

  // const newMarkdown = generateMarkdown(userResponses);
};

init();
