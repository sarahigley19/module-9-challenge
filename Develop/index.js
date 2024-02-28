// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of your Project?",
	},
	{
		type: "input",
		name: "description",
		message: "What did you learn from this project? Please provide a 2-3 paragraph description.",
	},
	{
		type: "input",
		name: "features",
		message: "Is there anything exiciting you want to point out?",
	},
	{
		type: "input",
		name: "languages",
		message: "What languages were used on this project?",
	},
	{
		type: "input",
		name: "install",
		message: "Did you project need to be intalled on a specific software?",
	},
	{
		type: "input",
		name: "usage",
		message: "What will this project be used for?",
	},
	{
		type: "checkbox",
		name: "license",
		message: "Which license did you use for your project?",
		choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
	},
	{
		type: "input",
		name: "contributors",
		message: "Who contributed to this project?",
	},
	{
		type: "input",
		name: "test",
		message: "Was any testing done? If so, please elaborate.",
	},
	{
		type: "input",
		name: "creator",
		message: "What is your GitHub username?",
	},
	{
		type: "input",
		name: "email",
		message: "What is your email address?",
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((responses) => {
		console.log("Creating Professional README.md File...");
		writeToFile("./README.md", generateMarkdown({ ...responses }));
	});
}
// Function call to initialize app
init();
