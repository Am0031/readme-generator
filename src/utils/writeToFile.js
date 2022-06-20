// requiring the fs module from Node.js core
const fs = require("fs");

const writeToFile = (fileName, markdown) => {
  try {
    // write data to new file
    fs.writeFileSync(`./${fileName}.md`, markdown);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = writeToFile;
