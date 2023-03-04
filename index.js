// import Manager from "./lib/Manager";
// import Engineer from "./lib/Engineer";
// import Intern from "./lib/Intern";
import inquirer from "inquirer";
// import { resolve, join } from "path";
// import fs from "fs";

// const OUTPUT_DIR = resolve(__dirname, "output");
// const outputPath = join(OUTPUT_DIR, "team.html");

// import render from "./src/page-template.js";

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const engineerPrompt = async () => {
  const response = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (input_1_1) => {
        if (!input_1_1) {
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
      validate: (input_3_1) => {
        if (!input_3_1) {
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
      validate: (input_5_1) => {
        if (!input_5_1) {
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
      validate: (input_7_1) => {
        if (!input_7_1) {
          return "Enter your GitHub name";
        } else {
          return true;
        }
      },
    },
    {
      type: "list",
      message: "What do you want to do next?",
      name: "next",
      choices: ["Add an engineer", "Add an intern", "Finish building team"],
    },
  ]);
  return response;
};

//console.log(await engineerPrompt());

const internPrompt = async () => {
  const response = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (input_1_1) => {
        if (!input_1_1) {
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
      validate: (input_3_1) => {
        if (!input_3_1) {
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
      validate: (input_5_1) => {
        if (!input_5_1) {
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
      validate: (input_7_1) => {
        if (!input_7_1) {
          return "Enter your school";
        } else {
          return true;
        }
      },
    },
    {
      type: "list",
      message: "What do you want to do next?",
      name: "next",
      choices: ["Add an engineer", "Add an intern", "Finish building team"],
    },
  ]);
  return response;
};

//console.log(await internPrompt());

const managerPrompt = async () => {
  const response = await inquirer
    .prompt([
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
        validate: (input_3) => {
          if (!input_3) {
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
        validate: (input_5) => {
          if (!input_5) {
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
        validate: (input_7) => {
          if (!input_7) {
            return "Enter your office number";
          } else {
            return true;
          }
        },
      },
      {
        type: "list",
        message: "What do you want to do next?",
        name: "next",
        choices: ["Add an engineer", "Add an intern", "Finish building team"],
      },
    ]);
    return response;
}

//console.log(await managerPrompt());

const promptUser = async () => {
  await managerPrompt()
    .then(async (response) => {
      console.log(response);
      while (response.next !== "Finish building team") {
        if (response.next === "Add an engineer") {
          console.log("***************************************");
          console.log("Adding an engineer");
          response = await engineerPrompt();
        }
        if (response.next === "Add an intern") {
          console.log("***************************************");
          console.log("Adding an intern");
          response = await internPrompt();
        }
      }
    });
};

// Bonus using async/await and try/catch
const init = async () => {
  try {
    promptUser();
  } catch (err) {
    console.log(err);
  }
};

init();
