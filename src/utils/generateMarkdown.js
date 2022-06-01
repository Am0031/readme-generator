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
  const contentSections = {
    description,
    installation,
    usage,
    contributionGuidelines,
    testInstructions,
    license,
  };

  //looping over our object to render the template string for each ToC item
  const renderToC = (contentSections) => {
    const createToCSection = (each) =>
      `* [${capitalCase(each[0])}](#${capitalCase(each[0])})\n`;
    const tocString = Object.entries(contentSections)
      .filter((s) => !!s[1])
      .map(createToCSection)
      .join("");
    console.log(tocString);
    return tocString;
  };

  return renderToC(contentSections);
};

export default generateMarkdown;
