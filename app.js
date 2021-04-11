//const Game = require('./lib/Game');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site');
const generatePage = require('./src/page-template');

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Employee = require('./lib/Employee.js');

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
            this.manager = new Manager(name, id, email, office);
            console.log(this.manager);
            console.log(this.manager.getRole());
            this.addEmployee();
        })
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
            this.engineer = new Engineer(name, id, email, github);
            console.log(this.engineer);
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
            this.intern = new Intern(name, id, email, school);
            console.log(this.intern);
            this.addEmployee();
        });
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
