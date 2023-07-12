# I implemented the file 

- Before starting on the task, make sure that all the points are clear to you. (You can reply on the email with yours questions)
- Create a new branch and push your commits to as you would do in a real-world task.
- Issue a Pull Request, reply to the task email with repository link to confirm you already finished the task.

# GitHub Top Stars

The idea of this project is to implement a solution for discovering popular repositories on GitHub.

## Service Specification

The service should be able to provide:

- A list of the most popular repositories, sorted by number of stars.
- An option to be able to view the top 10, 50, 100 repositories should be available.
- Given a date, the most popular repositories created from this date onwards should be returned.
- A filter for the programming language.
- Big plus: design this service to be able to handle great load of requests per second

## Implementation Details

GitHub provides a public search endpoint which you can use for fetching the most popular repositories: [https://api.github.com/search/repositories?q=created:>2019-01-10&sort=stars&order=desc](https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc).

- Feel free to use any other endpoints, if you wish.
- Should use ReactNative CLI
- Should use Redux or Redux ToolKit
- Should use React Navigation

## UI Design
[XD Files](https://drive.google.com/file/d/1v3hMX5awOcYY3eULlXMrWUWAYqWaBbJy/view?usp=sharing).

## Solution evaluation

Your solution will be evaluated corresponding to these points:

- The solution should have a CLI application.
- Automated tests.
- Scalability and performance.
- Concise and clean code.
- Include a readme file for how to run and use the solution.

NOTE: This challenge is aimed to senior developers, so expected to hit a high point of technicality.

Good Luck;

Milango Team
