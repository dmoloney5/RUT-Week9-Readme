const generateMarkdown = data => {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  
  ## Table of Contents
  * [Installation](#installation)
  * [Credit](#credit)
  * [Website](#Website)
  * [Repository](#Repository)
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
  ${data.license}
  
  ## Video
  [!](./youtube.jpg)](${data.screenshot})
  `
}

module.exports = generateMarkdown;;
