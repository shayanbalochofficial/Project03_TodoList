#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let tasks = [];
let shouldContinue = true;
let msg = chalk.green("\t---------------------------------------\n\t     Welcome to Shayan's Calculator\n\t----------------------------------------");
console.log(msg);
while (shouldContinue) {
    let answers = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: chalk.yellow("What do you want to do?"),
            choices: ["Add a task", "Delete last task", "View tasks", "Quit"],
        },
    ]);
    //! Declaring Action
    const action = answers.action;
    //! Adding a task
    if (action === "Add a task") {
        const task = await inquirer.prompt([
            {
                type: "input",
                name: "task",
                message: "Enter a new task:",
            },
        ]);
        tasks.push(task.task);
        console.log(`Task added: "${task.task}"\n`);
        //! Delete the task
    }
    else if (action === "Delete last task") {
        if (tasks.length === 0) {
            console.log(chalk.red("No tasks to delete.\n"));
        }
        else {
            tasks.pop();
            console.log(chalk.greenBright(`Task deleted Successfully\n`));
        }
    }
    //! View Task
    else if (action == "View tasks") {
        if (tasks.length === 0) {
            console.log(chalk.red("Add a task to be shown.\n"));
        }
        else {
            console.log(tasks);
        }
    }
    //! Quit
    else if (action == "Quit") {
        shouldContinue = false;
        let quitMsg = "\n------------Thanks for Using our TODO List-------------";
        const rainbowAnimateQ = chalkAnimation.radar(quitMsg);
        setTimeout(() => {
            rainbowAnimateQ.stop();
            console.clear();
        }, 4100);
        // Stop animation after 4 seconds
    }
}
