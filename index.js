// requires inquier libary
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
// grabs the manager class
const Manager = require('./lib/Manager');
// grabs the engineer class
const Engineer = require('./lib/Engineer');
// grabs the intern class
const Intern = require('./lib/Intern');
// sets link to the dist folder
const link = path.resolve(__dirname, 'dist');
// tells what file to create in the linked folder
const dist = path.join(link, 'cards.html');
// grabs the html templates we created
const render = require('./src/template.js');
// array of inputed information
const team = [];

function addManager() {
    inquirer
    //askes questions about manager
        .prompt([
            {
                type: 'input',
                name: 'manager_name',
                message: "What is the name of the manager?",
            },
            {
                type: 'input',
                name: 'manager_id',
                message: "What is the id number?",
            },
            {
                type: 'input',
                name: 'manager_email',
                message: "What is the email?",
            },
            {
                type: 'input',
                name: 'manager_officeNumber',
                message: "What is the office number?",
            },
        ])
        .then((answers) => {
         // creats a new manager class 
        const manager = new Manager(
            answers.manager_name,
            answers.manager_id,
            answers.manager_email,
            answers.manager_officeNumber
        );
        team.push(manager);
        maybeAddEmployee();
        });
}

function maybeAddEmployee() {
    inquirer
    .prompt([
    {
        type: 'list',
        name: 'addOrNot',
        message: 'Whould you like to add anyone else?',
        choices: [
            'Yes',
            'No',
        ],
    },
    ])
    .then((res) => {
        switch (res.addOrNot) {
        // if no more employess then the team will be built 
        case 'No':
            createCards();
          break;
        // if more employees then we will ask what type
        default:
         AddEmployee();
        }
    });
};

function  AddEmployee() {
    inquirer
    .prompt([
        {
        type: 'list',
        name: 'role',
        message: 'Which position will this employee fill?',
        choices: [
            'Engineer',
            'Intern',
        ],
    },
    ])
    .then((res) => {
        switch (res.role) {
        case 'Intern':
            addIntern();
            break;
        case 'Engineer':
            addEngineer();
            break;
        }
    });
};

function addIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'intern_name',
            message: "What is the name of your intern?",
        },
        {
            type: 'input',
            name: 'intern_id',
            message: "What is the id?",
        },
        {
            type: 'input',
            name: 'intern_email',
            message: "What is the email?",
        },
        {
            type: 'input',
            name: 'intern_school',
            message: "What school does the intern attend?",
        },
    ])
    .then((answers) => {
        const intern = new Intern(
            answers.intern_name,
            answers.intern_id,
            answers.intern_email,
            answers.intern_school
        );
        team.push(intern);
        maybeAddEmployee();
    });
};

function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineer_name',
            message: "What is the name of the engineer?",
        },
        {
            type: 'input',
            name: 'engineer_id',
            message: "What is the id number?",
        },
        {
            type: 'input',
            name: 'engineer_email',
            message: "What is the email?",
        },
        {
            type: 'input',
            name: 'engineer_github',
            message: "What is the GitHub username?",
        },
    ])
    .then((answers) => {
        const engineer = new Engineer(
            answers.engineer_name,
            answers.engineer_id,
            answers.engineer_email,
            answers.engineer_github
        );
        team.push(engineer);
        maybeAddEmployee();
    });
};

function  createCards() {
    // only creates file if not already there
    if (!fs.existsSync(link)) {
        fs.mkdirSync(link);
    }
    fs.writeFileSync(dist, render(team), 'utf-8');
}; 

addManager();