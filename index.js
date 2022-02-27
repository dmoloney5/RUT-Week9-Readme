// Packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// an array of questions for user input
const questions = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'title',
                message: 'What is yout title? (Require)',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please Enter your title!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of your App or Website? (Require)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please Provide a description!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'credit',
                message: 'Provide the name of all collaborators! Use , to separate the names (Require)',
                validate: creditInput => {
                    if (creditInput) {
                        return true;
                    } else {
                        console.log('Please Provide at least your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'install',
                message: 'What are the steps required to install your project? (Require)',
                validate: installInput => {
                    if (installInput) {
                        return true;
                    } else {
                        console.log('Please Provide a installation instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'repo',
                message: 'Enter URL of the Github repository! (Require)',
                validate: repoInput => {
                    if (repoInput) {
                        return true;
                    } else {
                        console.log('Please Provide a URL!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'url',
                message: 'Enter the URL of the website!',
                validate: websiteInput => {
                    if (websiteInput) {
                        return true;
                    } else {
                        console.log('If no website is created just enter N/A');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'license',
                message: 'List all apps used! (Required)',
                validate: licenseInput => {
                    if (licenseInput) {
                        return true;
                    } else {
                        console.log('Please list all apps');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'screenshot',
                message: 'Provide provide link to screenshot or video? (Require)',
                validate: screenInput => {
                    if (screenInput) {
                        return true;
                    } else {
                        console.log('Need screenshot or video');
                        return false;
                    }
                }
            },
        ])
};

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
