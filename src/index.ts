import * as core from '@actions/core';
import { Octokit } from '@octokit/rest';
import * as github from '@actions/github';

function run() {
  const myToken = core.getInput('accessToken');
  const name: string = core.getInput('my_input');
  console.log("fsdfdsfdsfddddds");
  const octokit = github.getOctokit(myToken)
  const { owner, repo } = github.context.repo;
  const event_type = 'customs';
  const payload = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
      {
        "type": "Container",
        "items": [
          {
            "type": "TextBlock",
            "text": "Youre Awesome"
          },
        ]
      },
    ]
  }
  octokit.repos.createDispatchEvent({
      owner,
      repo,
      event_type,
      client_payload: payload,
  });
  console.log("fgfffd");
  if (name) {
    core.debug(`Hello ${name}!`);
    return core.setOutput('my_output', `Hello ${name}!`);
  }
  core.setFailed('my_input not specified!');
}

run();
