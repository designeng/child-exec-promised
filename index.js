const exec = require('child_process').exec;

const runCommand = (command) => {
    return new Promise((resolve, reject) => {
        return exec(command, (error, stdout, stderr) => {
            if(stderr) {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });
    });
}

module.exports = runCommand;
