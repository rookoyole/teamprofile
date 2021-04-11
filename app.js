//const Game = require('./lib/Game');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site');
const generatePage = require('./src/page-template');

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Employee = require('./lib/Employee.js');
const directory = [];

class Profile {
    constructor() {
      //this.employee;
    }
  
    initialize() {
      inquirer
        .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the managers name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the managers ID?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the managers email address?'
        },
        {
            type: 'text',
            name: 'office',
            message: 'What is the managers office number?'
        }])
        .then(({ name, id, email, office }) => {
            var newManager = new Manager(name, id, email, office);
            return newManager;
        })
        .then(obj => {
            var managerObj = {name: obj.name, id: obj.id, email: obj.email, office: obj.office, role: 'Manager'}; 
            directory.push(managerObj);
            console.log(managerObj);
            this.addEmployee();
        });
    }

    addEmployee() {
        inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'action',
            choices: ['Add Engineer', 'Add Intern', 'Finished']
        })
        .then(({ action }) => {
            if (action === 'Add Engineer') {
                this.addEngineer();
            } else if (action === 'Add Intern') {
                this.addIntern();
            } else {
                this.deconstructData();
            }
        });
    }

    addEngineer() {
        inquirer
        .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the engineers name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the engineers ID?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the engineers email address?'
        },
        {
            type: 'text',
            name: 'github',
            message: 'What is the engineers github username?'
        }])
        .then(({ name, id, email, github }) => {
            var newEngineer = new Engineer(name, id, email, github);
            return newEngineer;
        })
        .then(obj => {
            var engineerObj = {name: obj.name, id: obj.id, email: obj.email, github: obj.github, role: 'Engineer'}; 
            directory.push(engineerObj);
            console.log(directory);
            this.addEmployee();
        });
    }

    addIntern() {
        inquirer
        .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the interns name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the interns ID?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the interns email address?'
        },
        {
            type: 'text',
            name: 'school',
            message: 'What school does the intern go to?'
        }])
        .then(({ name, id, email, school }) => {
            var newIntern = new Intern(name, id, email, school);
            return newIntern;
        })
        .then(obj => {
            var internObj = {name: obj.name, id: obj.id, email: obj.email, school: obj.school, role: 'Intern'}; 
            directory.push(internObj);
            console.log(internObj);
            this.addEmployee();
        });
    }

    //sort all data into different arrays for organized layout
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
        /*
        let pageText = `
        ${this.generateHeader()}
        ${this.generateManager(managerData)}
        ${this.generateEngineer(engineerData)}
        ${this.generateIntern(internData)}
        ${this.generateFooter()}
        `
        return this.writeFile(pageText);
        */
    }
}



/*
const promptProject = readmeData => {
    console.log(`
    =================
    Add a New Project
    =================
    `);
    
    // If there's no 'projects' array property, create one
    if (!readmeData.projects) {
      readmeData.projects = [];
    }
}
*/

new Profile().initialize();

/*
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
  */
