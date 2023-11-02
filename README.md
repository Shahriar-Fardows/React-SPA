
# Project Title

Full Project is based on React. here you will get some course details and can select multiple courses to see the total price and a credit time.


## Features

- Responsive Layout
- Double Selected Course alert
- Live image setup
- Dynamic value change


## FAQ

I used two state one is useState and other is useEffect

#### How i Managed useState ?

Managing the useState hook in a React project involves using it to handle and update component state. Here's a general guide on how to use the useState hook effectively:

Import useState: 

Make sure to import the useState hook from the 'react' library at the beginning of your component file.
Declare State Variables: 

Inside your functional component, declare state variables using the useState hook.
Access and Update State: 

You can access and update the state variable within your component.
Functional Updates: 

You can also use a function with setCount for more complex state updates that depend on the previous state value
Use State Variables as Needed: You can use useState to manage multiple state variables in your component.
Effect of State Changes:

 Be aware that when state changes, React will re-render the component. This is essential for keeping your UI in sync with your data.
That's a general overview of how to manage state using the useState hook in a React project. Remember to use state variables for managing component-specific data and updates.

#### How i Managed useEffect ?

The useEffect hook is used in React to manage side effects in functional components. Side effects can include data fetching, DOM manipulation, setting up subscriptions, and more. Here's how to use the useEffect hook in a React project:

Import useEffect:

Import the useEffect hook from the 'react' library at the beginning of your component file:
Defining an Effect:

The useEffect hook takes two arguments:

 a function that represents the effect and an optional array of dependencies. The function is where you place the code that will run as a side effect. The second argument (dependencies array) is used to specify when the effect should run. If it's an empty array, the effect will run once after the initial render. If you provide a list of dependencies, the effect will run whenever one of those dependencies changes

 Running the Effect:

Inside the effect function, you can perform various actions like data fetching, setting up event listeners, or updating the component state. For instance, making an API request with fetch.

Cleaning Up the Effect:

You can return a cleanup function from the effect, which will be called when the component unmounts or when the dependencies change. This is useful for removing event listeners or cleaning up resources to avoid memory leaks.

Dependencies Array:

If you have dependencies, pass them in the second argument of useEffect. The effect will re-run whenever any of the listed dependencies change. This helps in scenarios where you need to react to specific changes.Be cautious when including dependencies. Adding too many can lead to excessive re-renders, while omitting necessary dependencies can lead to bugs.

Multiple useEffect Hooks:

You can use multiple useEffect hooks in a single component to separate different types of side effects.

That's a general overview of how i use the useEffect hook in a React project to manage side effects and perform various tasks in functional components.

