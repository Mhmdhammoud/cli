import inquirer from 'inquirer'
inquirer
    .prompt([
        {
            type:'list',
            name:'type',
            message:'What do you want to create?',
            choices:['Resolver','Mutation','Query','Schema','Service','Input','Full resource']
        }
    ])
    .then((answers) => {
        console.log(answers)
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
