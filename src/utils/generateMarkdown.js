//requiring the change case package to format titles
const { capitalCase, snakeCase } = require("change-case");

const generateMarkdown = (answers) => {
  //creates a const variable for each key needed by checking into answers for this key, and allocates the value
  const {
    title,
    description,
    installation,
    usage,
    contributions,
    test,
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
    contributions,
    test,
    license,
  };

  //rendering question section
  const renderQuestion = () => {
    return `## Questions? \n If you have any questions about this project, you can contact me directly by [email](mailto:${email}). And you can check more of my projects on my [github page](https://www.github.com/${userName}).\n`;
  };

  //looping over our object to render the main sections
  const renderMain = (section) => {
    const gatherMainInfo = (each) => {
      const eachInfo = { sectionTitle: each[0], sectionContent: each[1] };
      if (
        eachInfo.sectionTitle === "installation" ||
        eachInfo.sectionTitle === "test"
      ) {
        eachInfo.sectionType = "code";
      } else if (
        eachInfo.sectionTitle === "license" &&
        eachInfo.sectionContent === "Other"
      ) {
        eachInfo.sectionContent = licenseText;
        eachInfo.sectionType = "text";
      } else {
        eachInfo.sectionType = "text";
      }
      return eachInfo;
    };
    const createMainSection = (each) => {
      const getFormattedContent = (each) => {
        if (each.sectionType === "code") {
          return `\nThese are the entries required in the CLI:\n\`\`\`\n${each.sectionContent}\n\`\`\`\n`;
        } else {
          return `\n${each.sectionContent}\n`;
        }
      };
      const mainString = `## ${capitalCase(
        each.sectionTitle
      )}\n\n${getFormattedContent(each)}\n\n `;
      return mainString;
    };

    const mainInfo = Object.entries(section)
      .filter((s) => !!s[1])
      .map(gatherMainInfo);

    const mainString = mainInfo.map(createMainSection).join("");

    return mainString;
  };

  //looping over our object to render the template string for each ToC item
  const renderToC = (contentSection) => {
    const createToCSection = (each) =>
      `* [${capitalCase(each[0])}](#${each[0]})\n`;
    const tocList = Object.entries(contentSection)
      .filter((s) => !!s[1])
      .map(createToCSection)
      .join("");
    return `## Table of content\n\n${tocList}* [Questions](#questions)\n\n`;
  };

  //rendering title and license badge at top of markdown file
  const renderTitle = () => {
    const chosenLicense =
      license === "Other" ? snakeCase(licenseText) : license;

    return `# ${capitalCase(
      title
    )} ![License](https://img.shields.io/badge/License-${chosenLicense}-blue)\n\n`;
  };

  const titleString = renderTitle();
  const tocString = renderToC(contentSection);
  const mainString = renderMain(contentSection);
  const questionString = renderQuestion();

  const markdown = `${titleString}\n${tocString}\n${mainString}\n${questionString}\n`;

  return markdown;
};

module.exports = generateMarkdown;
