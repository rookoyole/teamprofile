

// create the cards for manager
const renderMan = manData => {
  for (i = 0; i<manData.length; I++) {
    return `
    <div class="card text-white bg-primary mb-3 mx-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${manData[i].name}</h5>
        <p class="card-text">${manData[i].role}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manData[i].id}</li>
        <li class="list-group-item">Email:
          <a href="mailto:${manData[i].email}" target="_blank class="card-link">${manData[i].email}</a>
        </li>
        <li class="list-group-item">Office Number: ${manData[i].office}</li>
      </ul>
    </div>
    `;
  }
};

const renderEng = engData => {
  for (i = 0; i<engData.length; I++) {
    return `
    <div class="card text-white bg-primary mb-3 mx-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${engData[i].name}</h5>
        <p class="card-text">${engData[i].role}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engData[i].id}</li>
        <li class="list-group-item">Email:
          <a href="mailto:${engData[i].email}" target="_blank class="card-link">${engData[i].email}</a>
        </li>
        <li class="list-group-item">Github:
          <a href="https://github.com/${engData[i].github}" target="_blank" class="card-link">${engData[i].github}</a>
        </li>
      </ul>
    </div>
    `;
  }
};

const renderInt = intData => {
  for (i = 0; i<intData.length; I++) {
    return `
    <div class="card text-white bg-primary mb-3 mx-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${intData[i].name}</h5>
        <p class="card-text">${intData[i].role}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intData[i].id}</li>
        <li class="list-group-item">Email: 
          <a href="mailto:${intData[i].email}" target="_blank class="card-link">${intData[i].email}</a>
        </li>
        <li class="list-group-item">School: ${intData[i].school}</li>
      </ul>
    </div>
    `;
  }
};

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
 //console.log(managerData);
 //console.log(engineerData);
 //console.log(internData);

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Roster</title>
    <link 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" 
    crossorigin="anonymous">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between text-center py-3">
        <h1 class="page-title text-primary bg-danger py-2 px-3">Team Roster</h1>
      </div>
    </header>
    <main class="container d-flex justify-content-center flex-wrap">
    ${renderMan(managerData)}
    ${renderEng(engineerData)}
    ${renderInt(internData)}
    </main>
  </body>
  </html>
  `;
  
};
