import * as core from '@actions/core';
import { Octokit } from '@octokit/rest';
import * as github from '@actions/github';

function run() {
  const name: string = core.getInput('my_input');
  console.log("fsdfdsfdsfddddds");
  const octokit = github.getOctokit('bb67194b142e4234b2f165d08b156dce1247db95')
  const { owner, repo } = github.context.repo;
  const event_type = 'custom';
  octokit.repos.createDispatchEvent({
      owner,
      repo,
      event_type,
      client_payload: {"hi":"meghna"},
  });
  console.log("fgfdfffd");
  if (name) {
    core.debug(`Hello ${name}!`);
    return core.setOutput('my_output', `Hello ${name}!`);
  }
  core.setFailed('my_input not specified!');
}

run();
