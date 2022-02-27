const generateMarkdown = data => {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  
  ## Table of Contents
  * [Installation](#installation)
  * [Credit](#credit)
  * [Website](#Website)
  * [Repository](#Respository)
  * [License](#License)
  
  ## Installation
  ${data.install}

  ## Credit
  ${data.credit}

  ## Website
  ${data.url}

  ## Repository
  ${data.repo}

  ## License
  ### The following apps were used: 
  ${data.license}`
  }
  
  module.exports = generateMarkdown;;
