![vscode-portfolio banner](./docs/mockup.png)

<div align="center">

[![codecov](https://codecov.io/gh/karlosos/frontend-interview-exercise/branch/main/graph/badge.svg?token=ORhAq8yE6A)](https://codecov.io/gh/karlosos/frontend-interview-exercise)
[![Code style: standardjs](https://img.shields.io/badge/code%20style-standardjs-F3DF49.svg)](https://standardjs.com/)
![Material UI](https://img.shields.io/badge/material_ui-%230081CB.svg?logo=material-ui&logoColor=white)
[![Build and Deploy](https://github.com/karlosos/frontend-interview-exercise/actions/workflows/main.yml/badge.svg)](https://github.com/karlosos/frontend-interview-exercise/actions/workflows/main.yml)
</div>

***

<h4 align="center">Frontend Engineer Interview Exercise</h4>


<p align="center">
  <a href="#about">About</a> •
  <a href="#development">Development</a> •
  <a href="#deployment">Deployment</a>
</p>

<p align="center">
<table>
<tbody>
<td align="center">
<img width="2000" height="0"><br>
Website: <b><a href="https://karlosos.github.io/frontend-interview-exercise">karlosos.github.io/frontend-interview-exercise 🌐</a></b><br>
<img width="2000" height="0">
</td>
</tbody>
</table>
</p>

## About

Frontend Engineer interview exercise. 

Simplified task requirements:

1. Create a wizard with 3 steps.
2. User can select multiple network elements and one operation type.
3. Data should be saved in the Firebase database.

Technical requirements:

1. Use React
1. Manage state with Redux
1. Manage side effects with redux-saga

### Technical decisions

**File structure**: I've opted for grouping by file type and [avoided nesting](https://reactjs.org/docs/faq-structure.html) as it's relatively simple app. Later I would make folders for each container component, like `NetworkElementStep`, `OperationTypeStep`, `SummaryStep`.

### Used tools 

- Node 14.16.1
- React 17.0.2

## Development

1. Install dependencies with `npm install`.
1. Run application with `npm run start`. 
1. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Tests

[![codecov](https://codecov.io/gh/karlosos/frontend-interview-exercise/branch/main/graph/badge.svg?token=ORhAq8yE6A)](https://codecov.io/gh/karlosos/frontend-interview-exercise)

Code coverage can be checked using `npm test -- --coverage --watchAll`.

Run tests with `npm test` which launches the test runner in the interactive watch mode.

## Deployment

Application is automatically deployed to GithubPages using `.github/workflows/main.yml` workflow.
