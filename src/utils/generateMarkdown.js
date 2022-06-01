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

  //collates the required variables into an object that we will use for the title
  const titleSection = {
    title,
    license,
    licenseText,
  };

  //collates the required variables into an object that we will use for the table of content
  const contentSection = {
    description,
    installation,
    usage,
    contributionGuidelines,
    testInstructions,
    license,
  };

  //collates the required variables into an object that we will use for the question section
  const questionSection = {
    userName,
    email,
  };

  //looping over our object to render the main sections
  const renderMain = (section) => {
    const gatherMainInfo = (each) => {
      const eachInfo = { sectionTitle: each[0], sectionContent: each[1] };
      if (
        sectionTitle === "installation" ||
        sectionTitle === "testInstructions"
      ) {
        eachInfo.sectionType = "code";
      } else {
        eachInfo.sectionType = "text";
      }
      return eachInfo;
    };
    const createMainSection = (each) => {
      const getFormattedContent = (each) => {
        if (each.sectionType === "code") {
          return `\n\`\`\`\n${each.sectionContent}\n\`\`\`\n`;
        } else {
          return `\n${each.sectionContent}\n`;
        }
      };
      const mainString = `## ${capitalCase(
        each.sectionName
      )}\n\n${getFormattedContent(each)} `;
      return mainString;
    };

    const mainInfo = Object.entries(section)
      .filter((s) => !!s[1])
      .map(gatherMainInfo);
    console.log(mainInfo);

    const mainString = mainInfo.map(createMainSection).join("");

    return mainString;
  };

  //looping over our object to render the template string for each ToC item
  const renderToC = (contentSection) => {
    const createToCSection = (each) =>
      `* [${capitalCase(each[0])}](#${capitalCase(each[0])})\n`;
    const tocString = Object.entries(contentSection)
      .filter((s) => !!s[1])
      .map(createToCSection)
      .join("");
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
