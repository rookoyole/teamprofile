/*
// create the about section
const generateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${aboutText}</p>
    </section>
  `;
};

// create the projects section
const generateProjects = projectsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${projectsArr
        .filter(({ feature }) => feature)
        .map(({ name, description, languages, link }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.map(language => language).join(',')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}

      ${projectsArr
        .filter(({ feature }) => !feature)
        .map(({ name, description, languages, link }) => {
          console.log(languages);
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}
    
      </div>
    </section>
  `;
};

deconstructData(){
  const managerData = [];
  const engineerData = [];
  const internData = [];
  for (var i = 0; i < directory.length; i++){
      if(directory[i].role == 'Manager'){
          managerData.push(directory[i]);
      }
      else if(directory[i].role == 'Engineer'){
          engineerData.push(directory[i]);
      }
      else if(directory[i].role == 'Intern'){
          internData.push(directory[i]);
      }
  };
  console.log(managerData);
  console.log(engineerData);
  console.log(internData);
  
  let pageText = `
  ${this.generateHeader()}
  ${this.generateManager(managerData)}
  ${this.generateEngineer(engineerData)}
  ${this.generateIntern(internData)}
  ${this.generateFooter()}
  `
  return this.writeFile(pageText);
*/


// export function to generate entire page
module.exports = directory => {
  // destructure page data by section
 // const { projects, about, ...header } = templateData;

 const managerData = [];
 const engineerData = [];
 const internData = [];
 for (var i = 0; i < directory.length; i++){
     if(directory[i].role == 'Manager'){
         managerData.push(directory[i]);
     }
     else if(directory[i].role == 'Engineer'){
         engineerData.push(directory[i]);
     }
     else if(directory[i].role == 'Intern'){
         internData.push(directory[i]);
     }
 };
 console.log(managerData);
 console.log(engineerData);
 console.log(internData);

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" 
    crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3"></h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">

    </main>
  </body>
  </html>
  `;
  
};
