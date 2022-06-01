// importing the fs module from Node.js core
import fs from "fs";

const writeToFile = (fileName, markdown) => {
  try {
    // write data to new file
    fs.writeFileSync(`./${fileName}.md`, markdown);
    console.log("Writing to file successful!");
  } catch (error) {
    console.log(error.message);
  }
};

export default writeToFile;
