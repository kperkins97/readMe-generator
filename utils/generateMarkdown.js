// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title: 
  ${data.title} 

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Preview](#preview)
  - [Credits](#contributing)
  - [License](#license)
  - [Questions](#questions)

# Description: 
  ${data.description}
## Installation:
  ${data.installation} 
## Usage:
  ${data.usage} 
## Contributing:
  ${data.contributors} 
# License:
  ${data.license} 
# Questions:
Click here for my Github: https://github.com/${data.github}
# Email Me:
  Shoot me an email!: ${data.email} 
`;
}
module.exports = generateMarkdown;



// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}