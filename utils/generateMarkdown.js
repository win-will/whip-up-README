// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license){
    const badgeURL = `https://img.shields.io/static/v1?label=License&message=${license}&color=green`.replaceAll(" ","%20");
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

    licenseSection = `## License\n\n`;

    for (const l of license){
      licenseSection = `${licenseSection}### ${l}`;
      licenseSection = `${licenseSection}\n[![License](`+ renderLicenseBadge(l) +`)](` + renderLicenseLink(l) + `)\n\n`;
      // console.log(l);
    }

    licenseSection = `${licenseSection}\n`;

    return licenseSection;

  }
  else {
    return licenseSection;
  }

}

function renderTableOfContents(data) {
  let tc = ``;

  if (data.install || data.usage || data.license || data.collaborators || 
      data.thirdparty || data.tutorials || data.badges || data.features ||
      data.contribute || data.tests){
      
      tc = `## Table of Contents`;

      if (data.install) {
        tc = `${tc}\n- [Installation](#installation)`
      }
      if (data.usage) {
        tc = `${tc}\n- [Usage](#usage)`
      }
      if (data.collaborators || data.thirdparty || data.tutorials) {
        tc = `${tc}\n- [Credits](#credits)`
      }
      if (data.license) {
        tc = `${tc}\n- [License](#license)`
      }
      if (data.badges) {
        tc = `${tc}\n- [Badges](#badges)`
      }
      if (data.features) {
        tc = `${tc}\n- [Features](#features)`
      }
      if (data.contribute) {
        tc = `${tc}\n- [Contribute](#contribute)`
      }
      if (data.tests) {
        tc = `${tc}\n- [Tests](#tests)`
      }

      tc = `${tc}\n`

  }
  else {
    tc = ``;
  }


  return tc;

}

function renderCredits(collaborators, thirdparty, tutorials){

  let credits = ``;

  if (collaborators ||  thirdparty || tutorials) {
    credits = `##Credits\n`;
    if (collaborators){
      credits = `${credits}### Collaborators\n`;
      let arrayColl = collaborators.split(",");

      for(c of arrayColl){
        credits = `${credits}- ${c}\n`
      }

      credits = `${credits}\n`
    }

    if (thirdparty){
      credits = `${credits}### 3rd Party\n`;
      let arrayTP = thirdparty.split(",");

      for(t of arrayTP){
        credits = `${credits}- ${t}\n`
      }

      credits = `${credits}\n`
    }

    if (tutorials){
      credits = `${credits}### Tutorials\n`;
      let arrayTT = tutorials.split(",");

      for(t of arrayTT){
        credits = `${credits}- ${t}\n`
      }

      credits = `${credits}\n`
    }
  
  }
  
  
  return credits;
}

function renderScreenShots(screenshots){
  let shots = ``;

  if (screenshots){

    shots = `\n\n### Screenshots`

    let arraySC = screenshots.split(",");

    for (s of arraySC) {

      shots = `${shots}\n\`\`\`md\n![alt text](assets/images/${s})\n\`\`\``

    }
    
    shots = `${shots}\n`
  }

  return shots;
}

function renderBadges(badges){
  let badgeSection = ``;

  if (badges){

    badgeSection = `\n\n## Badges`

    let arrayB = badges.split(",");

    for (b of arrayB) {
      
      badgeSection = `${badgeSection}\n- ![${b.split("/")[b.split("/").length - 1]}](${b})`

    }

    badgeSection = `${badgeSection}\n`

  }

  return badgeSection;

}

function renderFeatures(features){
  let featureSection = ``;

  if (features){

    featureSection = `\n\n## Features`

    let arrayF = features.split(",");

    for (f of arrayF) {
      
      featureSection = `${featureSection}\n- ${f}`

    }

    featureSection = `${featureSection}\n`

  }

  return featureSection;

}

function renderContribute(contribute){
  let contributeSection = ``;

  if (contribute){

    contributeSection = `\n## How to Contribute

    ${contribute}
    
    `;

  }

  return contributeSection;

}

function renderTests(tests){
  let testSection = ``;

  if (tests){

    testSection = `\n\n## Tests`

    let arrayT = tests.split(",");

    for (t of arrayT) {
      
      testSection = `${testSection}\n- ${t}`

    }

    testSection = `${testSection}\n`

  }

  return testSection;

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\

## Description

- What was your motivation?
${data.motivation}

- Why did you build this project?
${data.build}

- What problem does it solve?
${data.solve}

- What did you learn?
${data.learn}\n\n`

+ renderTableOfContents(data) +
  
`## Installation
  
${data.install}
  
## Usage
  
${data.usage}\n`
+ renderScreenShots(data.screenshots) + `\n` 
+ renderCredits(data.collaborators, data.thirdparty, data.tutorials)
+ renderLicenseSection(data.license) + `\n\n---`
+ renderBadges(data.badges)
+ renderFeatures(data.features)
+ renderContribute(data.contribute)
+ renderTests(data.tests);


}

module.exports = generateMarkdown;
