//requiring the change case package to format titles
import { capitalCase } from "change-case";

const generateMarkdown = (answers) => {
  console.log(
    "Allocating your answers into the markdown sections right now..."
  );

  //creates a const variable for each key mentioned by checking into answers for this key, and allocates the value
  const {
    description,
    installation,
    usage,
    contributionGuidelines,
    testInstructions,
  } = answers;

  const contentSections = {
    description,
    installation,
    usage,
    contributionGuidelines,
    testInstructions,
  };

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
