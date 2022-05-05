const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const generateHTML= require('./utils/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let teamArray = [];
const addEngineer = () => 
inquirer
  .prompt([
{
    type: 'input',
    name: 'name',
    message: 'What is the name of this Engineer?'
  },

  {
    type: 'input',
    name: 'id',
    message: 'What is the ID of this employee?'
  },

  {
    type: 'input',
    name: 'email',
    message: 'What is this engineers Email?'
  },

  {
    type: 'input',
    name: 'github',
    message: 'What is the engineers Github?'
  },
  {
    type: 'checkbox',
    name: 'nextMember',
    message: 'Select your next member of the team or finish your team:',
    choices: ['Add an Engineer', 'Add an Intern', "Finish my Team"]
},
])
        .then((answers) => {
            let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            teamArray.push(engineer)
            if (answers.nextMember == "Add an Engineer"){
                addEngineer()
            }
            else if (answers.nextMember == "Add an Intern"){
                addIntern()
            }
            else {
                generateTeam()
        }
})

const addIntern = () => 
inquirer
  .prompt([
{
    type: 'input',
    name: 'name',
    message: 'What is the name of this Intern?'
  },

  {
    type: 'input',
    name: 'id',
    message: 'What is the ID of this employee?'
  },

  {
    type: 'input',
    name: 'email',
    message: 'What is this Interns Email?'
  },

  {
    type: 'input',
    name: 'school',
    message: 'What is the Interns School?'
  },
  {
    type: 'checkbox',
    name: 'nextMember',
    message: 'Select your next member of the team or finish your team:',
    choices: ['Add an Engineer', 'Add an Intern', "Finish my Team"]
},
])
        .then((answers) => {
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            teamArray.push(intern)
            if (answers.nextMember == "Add an Engineer"){
                addEnginer()
            }
            else if (answers.nextMember == "Add an Intern"){
                addIntern()
            }
            else {
                generateTeam()
        }
})

//start manager

inquirer
  .prompt([
{
    type: 'input',
    name: 'name',
    message: 'What is the name of the Team Manager?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the Team Managers ID?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the Team Managers Email?'
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the Team Managers Office Number?'
  },
  {
    type: 'checkbox',
    name: 'nextMember',
    message: 'Select your next member of the team or finish your team:',
    choices: ['Add an Engineer', 'Add an Intern', "Finish my Team"]
},
])
        .then((answers) => {
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            teamArray.push(manager)
            if (answers.nextMember == "Add an Engineer"){
                addEngineer()
            }
            else if (answers.nextMember == "Add an Intern"){
                addIntern()
            }
            else {
                generateTeam()
        }
})
generateTeam = () => {
    fs.writeFileSync('./src/teamHTML.html', generateHTML(teamArray))
}
