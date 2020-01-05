## React Flow Controller

The Flow Controller is a component that consists of several steps and dictates the order that the steps can be used, notifies the user of the current progress through the steps, and what steps are remaining.  

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
3. If its is not already somewhere in your project, add a `<Router/>` - specifically [`BrowserRouter`](https://reacttraining.com/react-router/web/example/basic).  This component is needed in order to use [`<Link/>`]https://reacttraining.com/react-router/web/api/Link and link to the first step of your flow controller.

#### Props
1. `title` - optional string
2. `completionIndicator` - optional react component that itself takes an `isCompleted` prop.  Any other props for this component will be ignored.  By default a component is provided to render a check mark next to the step title in the progress indicator.  If not completion indicator is desired, you can pass `completionIndicator={() => null}` to the `<FlowControllerRenderer/>`, but what fun is that?
3. `steps` - this prop is an array of objects with the shape
```
{
    component: React component
    label: string,
    link: string,
    isCompleted: boolean,
}
```
Since the component that makes up a step will nearly by necessity take props itself, the way to format these components is like so:
```
...
component: ReactComponent({prop1: prop1})
...
```

#### Integration
React Flow Controller is agnostic to the functioning of the individual step components __except__ that each step component must be able to signal that the work taking place there is complete and the user can advance to the next step.  See the
1. Add a `<FlowControllerRenderer>` element somewhere within the router.
2. Use a `<Link>` element somewhere will load the Flow Controller.  If the location where the Flow Controller is launched is a nested route, the `<Link>` `to` property should use `match.pathname` as detailed [here](https://reacttraining.com/react-router/web/example/nesting) so that the Flow Controller will add as another nested set of routes.
3. `<FlowControllerRenderer>` takes three props, `title` and `completionIndicator` are optional as detailed above, while `steps` is more involved.
4. When the work in each step is completed - thereby changing appropriate member of the `steps` array's `isCompleted` property, the Flow Controller will allow the user to advance to the next step, either by the "Next" button or by using the links in the Progress Indicator. When all the steps have `isCompleted` true, the "Finish" button will be enabled. Upon clicking "Finish" the url will return to where the flow controller began.

#### Styling
* All the elements of the Flow Controller have CSS class names to enable whatever sort of styling is desired.  
* The example included shows how these classes may be used.
* When I get there, I will add in some possible base style sheets that can be used as defaults.

### Examples
Examples are coming soon!

### MVP Features
* Enable adding or removing the controller
* Have a system for moving through steps
* Have a system for determining which steps are verified and which are not.
* Redirect to last verified step if attempting to navigate to an unverified step.
* Include a progress indicator that can also link to previous steps
* Last step will have a button labeled "FINISH"

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
