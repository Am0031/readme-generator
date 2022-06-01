//requiring inquirer from installed node modules - inquirer will be used to prompt questions and get answers
import inquirer from "inquirer";

//requiring fs module from Node.js core - fs will be used to write into the files
import fs from "fs";

//requiring chalk module from Node.js core - chalk will be used to style the lines in the CLI
import chalk from "chalk";

//requiring email validator package
import { validate } from "email-validator";

//requiring the generateMarkdown js file
import generateMarkdown from "./utils/generateMarkdown.js";

//requiring the writeToFile js file
import writeToFile from "./utils/writeToFile.js";

const getUserResponses = async () => {
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
      message: "Please add a short description of your project :",
    },
    {
      type: "input",
      name: "installation",
      message: "Please give the installation instructions for your project :",
    },
    {
      type: "input",
      name: "usage",
      message: "Please give the usage information for your project :",
    },
    {
      type: "confirm",
      name: "hasContributionGuidelines",
      message:
        "Would you like to add contribution guidelines for your project?",
    },
    {
      type: "input",
      name: "contributionGuidelines",
      message: "Please add the contribution guidelines for your project :",
      when: (answers) => answers.hasContributionGuidelines,
    },
    {
      type: "confirm",
      name: "hasTestInstructions",
      message: "Would you like to add test instructions for your project?",
    },
    {
      type: "input",
      name: "testInstructions",
      message: "Please add the test instructions for your project :",
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
        if (!validate(email)) {
          return "Please enter a valid email address";
        } else {
          return true;
        }
      },
    },
  ];

  const userResponses = await inquirer.prompt(questions);
  return userResponses;
};

const init = async () => {
  console.log(chalk.yellow("Let's collect your project information..."));
  const userResponses = await getUserResponses();
  console.log(chalk.green("All the required info has been provided!"));

  //use responses to create the required markdown
  console.log(chalk.yellow("Creating your markdown from your answers now..."));
  const markdown = generateMarkdown(userResponses);
  console.log("Your markdown content:", markdown);

  //write generated markdown into a .md file
  console.log(
    chalk.yellow("Generating the new generatedMarkdown.md file now...")
  );
  writeToFile("README", markdown);
  console.log(chalk.green("Your new file has been created successfully!"));
};

init();
