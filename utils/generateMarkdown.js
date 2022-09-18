// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    const badgeURL = `https://img.shields.io/static/v1?label=license&message=${license}&color=green`;
    return badgeURL;
  }
  else{
    return ``;
  }
  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let link;

  switch(license) {

    case "GNU AGPLv3":
      link = "https://choosealicense.com/licenses/agpl-3.0/";
      break;

    case "GNU GPLv3":
      link = "https://choosealicense.com/licenses/gpl-3.0/";
      break;

    case "GNU LGPLv3":
      link = "https://choosealicense.com/licenses/lgpl-3.0/";
      break;

    case "Mozilla Public License 2.0":
      link = "https://choosealicense.com/licenses/mpl-2.0/";
      break;

    case "Apache License 2.0":
      link = "https://choosealicense.com/licenses/apache-2.0/";
      break;
    
    case "MIT License":
      link = "https://choosealicense.com/licenses/mit/";
      break;
    
    case "Boost Software License 1.0":
      link = "https://choosealicense.com/licenses/bsl-1.0/";
      break;
    
    case "The Unlicense":
      link = "https://choosealicense.com/licenses/unlicense/";
      break;

    default:
      link = "";
      break;
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ``;
  if (license) {

    licenseSection = `## ${license}\n
    [![License](`+ renderLicenseBadge(license) +`)](` + renderLicenseLink(license) + `)\n`;

  }
  else {
    return licenseSection;
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  \n
  ## Description
  \n
  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n
  \n
  - What was your motivation?\n
  ${data.motivation}\n
  - Why did you build this project?\n
  ${data.build}\n
  - What problem does it solve?\n
  ${data.solve}\n
  - What did you learn?\n
  ${data.learn}\n
  \n
  ## Table of Contents\n
  \n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Credits](#credits)\n
  - [License](#license)\n
  \n
  ## Installation\n
  \n
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n
  ${data.installation}\n
  ## Usage\n
  \n
  ${data.usage}\n
  \n
    \`\`\`md\n
    ![alt text](assets/images/${data.screenshot})
    \`\`\`\n
  \n
  \n
  ## Credits\n 
  \n 
  List your collaborators, if any, with links to their GitHub profiles.\n
  ${data.collaborator}\n
  \n
  If you used any third-party assets that require attribution.\n
  ${data.thirdparty}\n
  \n
  If you followed tutorials, include links to those here as well.\n
  ${data.thirdparty}\n
  \n
  \n
  ## License\n
  ${data.thirdparty}\n
  ---
  \n
  \n 
  ## Badges\n 
  \n
  ![${data.badgeName}](${data.badgeUrl}\n)
  \n
  ## Features\n
  \n
  If your project has a lot of features, list them here.\n
  ${data.badgeName}\n
  \n
  \n
  ## How to Contribute\n
  \n
  ${data.contribute}\n
  \n
  ## Tests\n
  \n
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.\n
  ${data.contribute}

`;
}

module.exports = generateMarkdown;
