//requiring the change case package to format titles
import { capitalCase } from "change-case";

const generateMarkdown = (answers) => {
  console.log(
    "Allocating your answers into the markdown sections right now..."
  );

  //creates a const variable for each key needed by checking into answers for this key, and allocates the value
  const {
    title,
    description,
    installation,
    usage,
    contributionGuidelines,
    testInstructions,
    license,
    licenseText,
    userName,
    email,
  } = answers;

  //collates the required variables into an object that we will use for the table of content
  const contentSection = {
    description,
    installation,
    usage,
    contributionGuidelines,
    testInstructions,
    license,
  };

  const titleSection = {
    title,
    license,
    licenseText,
  };

  //looping over our object to render the template string for each ToC item
  const renderToC = (contentSection) => {
    const createToCSection = (each) =>
      `* [${capitalCase(each[0])}](#${capitalCase(each[0])})\n`;
    const tocString = Object.entries(contentSection)
      .filter((s) => !!s[1])
      .map(createToCSection)
      .join("");
    console.log(tocString);
    return tocString;
  };

  //rendering title and license badge at top of markdown file
  const renderTitle = (object) => {
    const chosenLicense =
      object.license === "Other" ? object.licenseText : object.license;

    return `# ${object.title} ![License](https://img.shields.io/badge/License-${chosenLicense}-blue)\n`;
  };

  const titleString = renderTitle(titleSection);
  const tocString = renderToC(contentSection);
  const mainString = renderMain(contentSection);
  const questionString = renderQuestion(questionSection);

  const markdown = ``;

  return markdown;
};

export default generateMarkdown;
