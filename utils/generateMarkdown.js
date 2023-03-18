// function to generate markdown for README
function renderLicenseBadge(license) {
  if(license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}


function renderLicenseSection(license) {
  console.log('licenseSection', license)
  if (license !== "None") {
    return `### ___This project is licensed by the ${license}___`
  }
  return `### ___This project is unlicensed___`
}

function renderLicenseLink(license) {
  if(license !== "None") {
    return `[${license}](http://google.com)`
  }
  
}


function generateMarkdown(data) { 
  console.log("generatingMarkdown", data)
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
      ### Description
  
     ${data.description}
  
    ### Table of Contents
  
    * [Installation](#installation)
  
    * [Usage](#usage)
  
    ${renderLicenseLink(data.license)}
  
    *[Contributing](#contributing)
  
    *[Test](#tests)
  
    *[Questions](#questions)
  
    ## Installation 
  
    To install necessary dependencies, run the following command:
  
    \`\`\`
    ${data.installation}
    \`\`\`
  
    ##Usage
  
    ${data.usage}

    ## License
  
    ##Contributing
  
    ${data.contributing}
  
    ## Tests
  
    To run tests, run following command:
  
    \`\`\`
    ${data.test}
    \`\`\`
  
    ### Questions
  
    If you have any questions about the repo open an issue or 
    contact me directly at ${data.email}.
  
    You can find more of my work at [${data.github}](https://githbu.com/${data.github}).
  
`;
}

module.exports = generateMarkdown;