//requiring inquirer from installed node modules - inquirer will be used to prompt questions and get answers
import inquirer from "inquirer";

//requiring fs module from Node.js core - fs will be used to write into the files
import fs from "fs";

const init = async () => {
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
      name: "userName",
      message: "What's your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What's your email address?",
    },
  ];

  const answers = await inquirer.prompt(questions);
  console.log(answers);
};

init();
