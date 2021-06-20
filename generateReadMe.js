

function generateReadMe(answers) {
    return `# ${answers.title} 
    
    ${renderLicenseBadge(data)}
    
    ## Description
    ${answers.description}
    ## Table of Contents (Optional)
    If your README is long, add a table of contents to make it easy for users to find what they need.
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Questions](#questions)
    - [Contributors](#contributors)
    ## Installation
    ${answers.installation}
    ## Usage
    ${answers.usage}
    ## License
    ${answers.license}
    ## Tests
    ${answers.test}
    ## Questions
    Email: ${answers.email}
    Github: ${answers.github}
    ## Contributors
    ${answers.contributors}
    `;
}

// function renderLicenseLink(data) {
//     if (data.license -- "MIT" )
//     return 
// }else if (data.license -- "")
// }



module.exports = generateReadMe;
