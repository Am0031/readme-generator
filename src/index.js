//requiring inquirer from installed node modules - inquirer will be used to prompt questions and get answers
const inquirer = require("inquirer");

//requiring chalk module from Node.js core - chalk will be used to style the lines in the CLI
const chalk = require("chalk");

//requiring the generateMarkdown js file
const generateMarkdown = require("./utils/generateMarkdown");

//requiring the writeToFile js file
const writeToFile = require("./utils/writeToFile");

//requiring the change case package to format file name
const { paramCase } = require("change-case");

//requiring questions set from questions js file
const questions = require("./utils/markdownQuestions");

//function - prompts questions to the user and collates answers in the correct format
const getUserResponses = async () => {
  const userResponses = await inquirer.prompt(questions);

  const formatInstallationInput = (fullString, separator) => {
    return fullString.indexOf(separator) === -1
      ? `${fullString}\n`
      : fullString
          .split(separator)
          .map((string) => string.trim())
          .join("\n");
  };

  const formattedInstallation = formatInstallationInput(
    userResponses.installation,
    ","
  );

  userResponses.installation = formattedInstallation;

  return userResponses;
};

//Main function - starts generating file cycle (prompts+answers, generating, writing file)
const init = async () => {
  console.log(chalk.yellow("Let's collect your project information..."));
  const userResponses = await getUserResponses();
  console.log(chalk.green("All the required info has been provided!"));

  //use responses to create the required markdown
  console.log(chalk.yellow("Creating your markdown from your answers now..."));
  const markdown = generateMarkdown(userResponses);

  //write generated markdown into a .md file
  console.log(chalk.yellow("Generating the new .md file now..."));
  const fileName = paramCase(userResponses.fileName);
  writeToFile(fileName, markdown);
  console.log(chalk.green("Your new file has been created successfully!"));
};

init();
