import * as core from '@actions/core';

function run() {
  const name: string = core.getInput('my_input');
  console.log("fsdfdsfdsfds");
  if (name) {
    core.debug(`Hello ${name}!`);
    return core.setOutput('my_output', `Hello ${name}!`);
  }
  core.setFailed('my_input not specified!');
}

run();
