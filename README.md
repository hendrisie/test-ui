<div align="center" markdown="1">

<h1>Simple Denominator App</h1>

Given a number of currency, this application will calculate the minimum number of denominators needed to make that amount when the user hits ‘Enter’

[![Build Status](https://travis-ci.com/hendrisie/test-ui.svg?branch=master)](https://travis-ci.com/hendrisie/test-ui)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

</div>

<!-- toc -->
- [Prerequisite](#prerequisite)
- [How to Run](#howtorun)
- [Cloud Hosting](#cloudhosting)
- [Design Specifications](#design)

<!-- tocstop -->

## Prerequisite

Before running the scripts, please ensure you have done the following:<br>
- Installed [NodeJS](https://nodejs.org/en/download/)
- Change the working directory to the project directory (/test-ui)
- Run `npm install` to install all the dependencies for the project

## How to Run

The following scripts can be run in the project directory via terminal (command line)

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Cloud Hosting

This app is also hosted in the cloud, the latest code in GitHub will be automatically tested and deployed to Amazon S3 by Travis CI.
Please check the link below for the latest version deployed:<br>
http://hsie-test-ui.s3-website-ap-southeast-1.amazonaws.com/

## Design Specifications

#### Library / Framework / Tools used:
- ReactJS library (https://reactjs.org/)
- Redux for app state management (https://redux.js.org/)
- Redux-Form for managing form inputs (https://redux-form.com)
- Material UI for UI elements (https://material-ui.com/)
- Jest and Enzyme for testing (https://jestjs.io/ and https://airbnb.io/enzyme/)
- Docker for standardize build and deployment process (https://www.docker.com/)
- Git for code versioning and GitHub for code repository (https://github.com/)
- Travis CI as CI/CD tool (https://travis-ci.com/)
- Amazon S3 for cloud based static web hosting (https://aws.amazon.com/s3/)

#### Folder structure:

```
.
+-- src
|   +-- components
|   |   +-- common_component1.jsx
|   |   +-- common_component2.jsx
|   +-- features
|   |   +-- feature1
|   |   |   +-- components
|   |   |   |   +-- feature1_component1.jsx
|   |   |   +-- containers
|   |   |   |   +-- feature1_container1.jsx
|   |   |   +-- index.js
|   |   |   +-- constants.js
|   |   |   +-- actions.js
|   |   |   +-- reducers.js
|   |   |   +-- selectors.js
|   |   |   +-- (...misc_files)
|   |   +-- feature2
|   +-- pages
|   |   +-- page1
|   |   |   +-- page1.jsx
|   |   |   +-- store1.jsx
|   +-- index.jsx
|   +-- serviceWorker.js
+-- public
```
Folder hierarchy is inspired by the `ducks` pattern (https://github.com/erikras/ducks-modular-redux)

- `src/components` will contain all the common/shared UI components
- `src/features` will group the files based which feature they belong to (including their specific presentational and container components)
- `src/pages` will group all the pages in the application (which will contain the root Component and Store definition)
- `src/index.jsx` is the main entry point to application, it will route to specific pages based on URL
- `public` will contain all the static files and assets required by the app

#### Class Diagram:

Below are the high level class diagram of the component tree
<img src="https://raw.githubusercontent.com/hendrisie/test-ui/master/docs/images/class-diagram.png">

#### Sequence Diagram:

Below are the high level flow of the application
<img src="https://raw.githubusercontent.com/hendrisie/test-ui/master/docs/images/sequence-diagram.png">