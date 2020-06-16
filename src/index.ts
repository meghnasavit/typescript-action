import * as core from '@actions/core';
import { Octokit } from '@octokit/rest';
import * as github from '@actions/github';

function run() {
  const myToken = core.getInput('accessToken');
  const name: string = core.getInput('my_input');
  console.log("fsdfdsfdsfdddfffffgfffgdds");
  const octokit = github.getOctokit(myToken)
  const { owner, repo } = github.context.repo;
  const event_type = 'custom';
  const payload = {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
      {
        "type": "ColumnSet",
        "columns": [
          {
            "type": "Column",
            "width": "auto",
            "items": [
              {
                "type": "TextBlock",
                "weight": "bolder",
                "text": "Issue opened : ",
                "wrap": true
              },
              {
                "type": "TextBlock",
                "size": "small",
                "isSubtle": true,
                "text": "Created by",
                "wrap": true,
                "spacing": "none",
                "separator": true
              }
            ]
          }
        ],
        "spacing": "large",
        "separator": true
      },
      {
        "type": "Container",
        "items": [
        {
          "type": "FactSet",
          "facts": [
            {
              "title": "Repository: ",
              "value": "event-transformer"
            }
          ]
        }
      ]
    }
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
