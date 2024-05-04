import inquirer from 'inquirer';
const main = async () => {
    const answers = await inquirer.prompt([{
            name: 'Sentence',
            type: 'input',
            message: 'Enter your sentence to count the words:'
        }]);
    const words = answers.Sentence.trim().split("");
    console.log(words);
    console.log(`Your sentence word count is ${words.length}.`);
};
main();
