#!user/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
};
async function welcome() {
    const rainbowwTitle = chalkAnimation.rainbow("---Yeehaaa---");
    await sleep();
    rainbowwTitle.stop();
    startAgain();
}
async function askQuestion() {
    let que = await inquirer.prompt([{
            type: "input",
            name: "str",
            message: chalkAnimation.rainbow("please enter the paraghaprh you want to convert")
        }]);
    // convert str to array with " "
    const wordArr = que.str.split(" ");
    console.log("Word count it :" + wordArr.length);
    // console.log(wordArr) 
    const chr_withoutSpaces = que.str.replace(/ /g, "");
    console.log(chr_withoutSpaces);
    console.log("Characters in paragraph :" + chr_withoutSpaces.length);
}
async function startAgain() {
    do {
        await askQuestion();
        var doAgain = await inquirer.prompt([{
                type: "input",
                name: "Restart",
                message: chalkAnimation.rainbow("Press Y or N to continue")
            }]);
    } while (doAgain.Restart === "y" || doAgain.Restart === "Y");
    return;
}
welcome();
