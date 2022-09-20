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

  //Choose which license 
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


//Every section requires generating is list of items
function renderSectionList(items,sectionName){
  let section = ``;
  let arrayItems = [];
  let num = 1;

  if (items){
    if (sectionName === "Collaborators" ||
      sectionName === "Thrird-Party" ||
      sectionName === "Tutorials"){
        section = `### ${sectionName}`;
    }
  
    else if (sectionName === "License") {
      section = `## ${sectionName}\nThis application is covered under the following license(s).\n\n`;
    }
    else {
      section = `## ${sectionName}\n`;
    }

    if (typeof items === "string") arrayItems = items.split(",");
    else arrayItems = items;

    for (i of arrayItems) {
      i = i.trim();

      if (sectionName == "Badges") section = `${section}\n- ![${i.split("/")[i.split("/").length - 1]}](${i})`;
    
      else if (sectionName === "Screenshots") section = `${section}\n\`\`\`md\n![Screenshot ${parseInt(num)}](./assets/images/${i})\n\`\`\``;
      
      else if (sectionName === "License")
      {
        section = `${section}\n\n### ${i}`;
        section = `${section}\n[![License](`+ renderLicenseBadge(i) +`)](` + renderLicenseLink(i) + `)`;
      }
      else if (sectionName === "Installation") section = `${section}\n${parseInt(num)}. ${i}`;
      
      else section = `${section}\n- ${i}`;
      
      num++;
    }
  }

  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  //Create a ToCs based on which items were provided by the user
  const renderTableOfContents = (data) => {
    let tc = ``;
  
    if (data.install || data.usage || data.license || data.collaborators || 
        data.thirdparty || data.tutorials || data.badges || data.features ||
        data.contribute || data.tests){
        
        tc = `## Table of Contents`;
  
        if (data.install) tc = `${tc}\n- [Installation](#installation)`;
        
        if (data.usage) tc = `${tc}\n- [Usage](#usage)`;
        
        if (data.collaborators || data.thirdparty || data.tutorials) tc = `${tc}\n- [Credits](#credits)`;
        
        if (data.license) tc = `${tc}\n- [License](#license)`;
        
        if (data.badges) tc = `${tc}\n- [Badges](#badges)`;
        
        if (data.features) tc = `${tc}\n- [Features](#features)`;
        
        if (data.contribute) tc = `${tc}\n- [Contribute](#contribute)`;
        
        if (data.tests) tc = `${tc}\n- [Tests](#tests)`;

        if (data.github || data.email) tc = `${tc}\n- [Questions](#questions)`;
    }
    else {
      tc = ``;
    }
  
    return tc;
  };

  //The credits section is several sections
  //This creates the initial heading and links that with the creation of subsections
  const renderCredits = (data) => {
    let credits = ``;
  
    if (data.collaborators ||  data.thirdparty || data.tutorials) {
      credits = `## Credits\n\n`;

      if (data.collaborators) credits = credits + renderSectionList(data.collaborators,"Collaborators") + `\n\n`;
  
      if (data.thirdparty) credits = credits + renderSectionList(data.thirdparty,"Third-Party") + `\n\n`;
  
      if (data.tutorials) credits = credits + renderSectionList(data.tutorials,"Tutorials");
    }
    
    return credits;
  };

  //This just checks if there is a contribute section and prints it if it exists
  //Other sections handle this with the renderSectionList function
  const renderContribute = (data) => {
    let contributeSection = ``;
  
    if (data.contribute){
      contributeSection = `## How to Contribute\n${data.contribute}`;
    }
    return contributeSection;
  };

  //Questions section rendering
  const renderQuestionSection = (data) => {
    let questionSection = ``;
  
    if (data.github || data.email){
      questionSection = `## Questions\nIf you have further questions then you can reach me at:\n`;

      if (data.github) questionSection = `${questionSection}- GitHub: https://github.com/${data.github}\n`;
      if (data.email) questionSection = `${questionSection}- Email: ${data.email}\n`;
    }
    return questionSection;
  };

  //Every section requires generating is list of items
  const renderLicenseBadges = (data) => {
  let section = ``;

    for (i of data.license) {
      i = i.trim();
      section = `${section}[![License](`+ renderLicenseBadge(i) +`)](` + renderLicenseLink(i) + `)\n`;
    }

  return section;
};

  //Set the values for several sections
  const renderInstallation = renderSectionList(data.install,"Installation");
  const renderScreenShots = renderSectionList(data.screenshots,"Screenshots");
  const renderLicense = renderSectionList(data.license,"License");
  const renderBadges = renderSectionList(data.badges,"Badges");
  const renderFeatures = renderSectionList(data.features,"Features");
  const renderTests = renderSectionList(data.tests,"Tests");
  // const renderQuestions = renderQuestionSection(data);

  // return the markup file
  return `# ${data.title}

${renderLicenseBadges(data)}

## Description
- What was your motivation?
${data.motivation}

- Why did you build this project?
${data.build}

- What problem does it solve?
${data.solve}

- What did you learn?
${data.learn}

${renderTableOfContents(data)}
  
${renderInstallation}
  
## Usage
${data.usage}

${renderScreenShots}

${renderCredits(data)}

${renderLicense}

${renderBadges}

${renderFeatures}

${renderContribute(data)}

${renderTests}

${renderQuestionSection(data)}`;

}

module.exports = generateMarkdown;
