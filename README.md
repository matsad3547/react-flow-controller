## React Flow Controller

The flow controller is a component that consists of several steps and dictates the order that the steps can be used, notifies the user of the current progress through the steps, and what steps are remaining.  

### Purpose

The purpose of this package is the following:
1. Provide a clean, simple interface for creating a user interface that directs the user through a sequence of steps.
2. This interface will enable a very flexible system for styling the UI.
3. The flow controller will be agnostic to the functioning of its child components except insofar as they permit the verification of the individual components, each referred to as a step.

### Usage

#### Installation
Run `$ yarn add react-flow-controller`

#### Requirements
1. React Flow Controller requires the use of React Router
2. Run `yarn add react-router-dom` in your project
3. If its is not already somewhere in your project, add a `<Router/>` - specifically [`BrowserRouter`](https://reacttraining.com/react-router/web/api/BrowserRouter).  This component is needed in order to use [`<Link/>`]https://reacttraining.com/react-router/web/api/Link and link to the first step of your flow controller.

### MVP Features
* Enable adding or removing the controller
* Have a system for moving through steps
* Have a system for determining which steps are verified and which are not.
* Redirect to last verified step if attempting to navigate to an unverified step.
* Include a progress indicator that can also link to previous steps
* Handle errors gracefully
* Last step will have a button labeled "FINISH"

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
