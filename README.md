# Readme file generator

## Summary of the project

Readme.md generator using node.js and the inquirer package

## Table of Contents

- [About the Project](#about-the-project)
- [Technologies](#technologies)
- [Installation](#installation)
- [Demo video](#demo-video-of-the-application)
- [Contact me](#contact-me)

## About the Project

This application uses Node.js and the inquirer package ti run a readme generator. When running the application, the user is presented with a series of prompts in the CLI, asking for information about their project. When all the user responses have been gathered, the application generates a markdown file, with a table of content and the relevant sections according to the user's choices.

## Technologies

For this project, the following technologies and packages were used:

- Node.js v18.2.0 and NPM v8.9.0
- Node core packages: fs (for reading/writing into files), chalk (for CLI text colouring)
- Node external packages: inquirer (for user prompting and collecting answers), email-validator (for email format validation) and change-case (for text formatting)

## Installation

To get this project installed, the following steps are required:

The first step is to clone the repository, using SSH keys:

```
git clone git@github.com:Am0031/readme-generator.git
```

Or using HTTPS link:

```
git clone https://github.com/Am0031/readme-generator.git
```

Then going into the new repository and installing the required packages:

```
cd readme-generator
npm install
```

Once installed, to get this project running, the following command must be entered in the CLI:

```
npm run start
```

## Demo video of the application

This [video]() shows how the application works.
Please click here to view the demo.

## License

MIT

## Contact me

If you have any questions about this application, feel free to get in touch by sending me an [email](mailto:amelie.pira@gmail.com).
