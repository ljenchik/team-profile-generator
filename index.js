const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const renderHTML = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const nextPrompt = [
  {
    type: "list",
    message: "What do you want to do next?",
    name: "next",
    choices: ["Add an engineer", "Add an intern", "Finish building team"],
  },
];

const engineerPromptQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: (input) => {
      if (!input) {
        return "Enter your name";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is your employee ID?",
    validate: (input) => {
      if (!input) {
        return "Enter your employee ID";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: (input) => {
      if (!input) {
        return "Enter your email";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is your GitHub name?",
    name: "github",
    validate: (input) => {
      if (!input) {
        return "Enter your GitHub name";
      } else {
        return true;
      }
    },
  },
];

const internPromptQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: (input) => {
      if (!input) {
        return "Enter your name";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is your employee ID?",
    validate: (input) => {
      if (!input) {
        return "Enter your employee ID";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: (input) => {
      if (!input) {
        return "Enter your email";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What school did you graduate from?",
    name: "school",
    validate: (input) => {
      if (!input) {
        return "Enter your school";
      } else {
        return true;
      }
    },
  },
];

const managerPromptQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: (input_1) => {
      if (!input_1) {
        return "Enter your name";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is your employee ID?",
    validate: (input) => {
      if (!input) {
        return "Enter your employee ID";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: (input) => {
      if (!input) {
        return "Enter your email";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",
    validate: (input) => {
      if (!input) {
        return "Enter your office number";
      } else {
        return true;
      }
    },
  },
];

let employees = [];

let promptUser = () => {
  // Manager questions
  inquirer.prompt(managerPromptQuestions).then((response) => {
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );
    employees.push(manager);

    // Buiding a team: all employees except manager
    function teamMembers() {
      inquirer.prompt(nextPrompt).then(async (answer) => {
        
        while (answer.next !== "Finish building team") {
          
          // Add an engineer
          if (answer.next === "Add an engineer") {
            console.log("***************************************");
            console.log("Adding an engineer");

            // Engineer questions
            await inquirer.prompt(engineerPromptQuestions).then((response) => {
              const engineer = new Engineer(
                response.name,
                response.id,
                response.email,
                response.github
              );
              employees.push(engineer);
            });
          }

          // Add an intern
          if (answer.next === "Add an intern") {
            console.log("***************************************");
            console.log("Adding an intern");
            // Intern questions
            await inquirer.prompt(internPromptQuestions).then((response) => {
              const intern = new Intern(
                response.name,
                response.id,
                response.email,
                response.school
              );
              employees.push(intern);
            });
          }

        await inquirer.prompt(nextPrompt)
        .then((response) => answer = response) ;
        }


        // Render HTML file
        renderHTML(employees);
        console.log(renderHTML(employees));
      });
    }

    teamMembers();
  });
};

promptUser();
